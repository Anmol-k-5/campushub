// ============================================================
// CAMPUSHUB SUPABASE CLOUD CLIENT WRAPPER
// Real-time PostgreSQL database & GoTrue authentication
// ============================================================
import { config } from './config.js';

class SupabaseService {
  constructor() {
    this.client = null;
    this.initClient();
  }

  initClient() {
    if (typeof window !== 'undefined' && window.supabase && config.isSupabaseConfigured()) {
      try {
        const url = config.getSupabaseUrl();
        const key = config.getSupabaseAnonKey();
        this.client = window.supabase.createClient(url, key);
        return true;
      } catch (err) {
        console.warn('Failed to initialize Supabase client:', err);
        this.client = null;
        return false;
      }
    }
    this.client = null;
    return false;
  }

  isReady() {
    if (!this.client && config.isSupabaseConfigured()) {
      this.initClient();
    }
    return Boolean(this.client);
  }

  // ------------------------------------------------------------
  // AUTHENTICATION
  // ------------------------------------------------------------
  async signUp(email, password, metadata = {}) {
    if (!this.isReady()) throw new Error('Supabase client is not configured.');

    const cleanEmail = email.trim().toLowerCase();
    const { data, error } = await this.client.auth.signUp({
      email: cleanEmail,
      password,
      options: {
        data: {
          name: metadata.name,
          role: metadata.role || 'Student',
          department: metadata.department,
          year: metadata.year
        }
      }
    });

    if (error) throw error;
    if (!data || !data.user) throw new Error('Signup failed. No user returned.');

    const user = data.user;
    const formattedProfile = {
      id: user.id,
      email: user.email,
      name: metadata.name || user.email.split('@')[0],
      rollNo: metadata.rollNo || `STU-${Math.floor(1000 + Math.random() * 9000)}`,
      department: metadata.department || 'Computer Science & Engineering',
      role: metadata.role || 'Student',
      year: metadata.year || '1st Year',
      avatar: metadata.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanEmail}`
    };

    // Insert profile into public.user_profiles
    try {
      await this.client.from('user_profiles').upsert([{
        id: formattedProfile.id,
        email: formattedProfile.email,
        name: formattedProfile.name,
        roll_no: formattedProfile.rollNo,
        department: formattedProfile.department,
        role: formattedProfile.role,
        year: formattedProfile.year,
        avatar: formattedProfile.avatar
      }]);
    } catch (profErr) {
      console.warn('Could not insert profile into user_profiles table:', profErr);
    }

    return { user: formattedProfile, session: data.session };
  }

  async signIn(email, password) {
    if (!this.isReady()) throw new Error('Supabase client is not configured.');

    const cleanEmail = email.trim().toLowerCase();
    const { data, error } = await this.client.auth.signInWithPassword({
      email: cleanEmail,
      password
    });

    if (error) throw error;
    if (!data || !data.user) throw new Error('Authentication failed.');

    const user = data.user;

    // Fetch user profile from user_profiles table
    let profile = null;
    try {
      const { data: profData } = await this.client
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      profile = profData;
    } catch (e) {
      console.warn('Could not fetch user_profiles row:', e);
    }

    const formattedProfile = {
      id: user.id,
      email: user.email,
      name: (profile && profile.name) || user.user_metadata?.name || user.email.split('@')[0],
      rollNo: (profile && profile.roll_no) || `STU-${Math.floor(1000 + Math.random() * 9000)}`,
      department: (profile && profile.department) || user.user_metadata?.department || 'Computer Science & Engineering',
      role: (profile && profile.role) || user.user_metadata?.role || 'Student',
      year: (profile && profile.year) || user.user_metadata?.year || '1st Year',
      avatar: (profile && profile.avatar) || `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanEmail}`
    };

    return { user: formattedProfile, session: data.session };
  }

  async signOut() {
    if (this.client) {
      try {
        await this.client.auth.signOut();
      } catch (err) {
        console.warn('Supabase signOut error:', err);
      }
    }
  }

  async getCurrentSessionUser() {
    if (!this.isReady()) return null;
    try {
      const { data } = await this.client.auth.getUser();
      return data?.user || null;
    } catch {
      return null;
    }
  }

  // ------------------------------------------------------------
  // USER STATE & DATABASE STORAGE
  // ------------------------------------------------------------
  async saveUserState(userId, state) {
    if (!this.isReady() || !userId) return false;
    try {
      const { error } = await this.client.from('user_states').upsert({
        user_id: userId,
        state: state
      });
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase saveUserState error:', err);
      return false;
    }
  }

  async getUserState(userId) {
    if (!this.isReady() || !userId) return null;
    try {
      const { data, error } = await this.client
        .from('user_states')
        .select('state')
        .eq('user_id', userId)
        .single();

      if (error || !data) return null;
      return data.state;
    } catch (err) {
      console.warn('Supabase getUserState error:', err);
      return null;
    }
  }

  // Quick test connection
  async testConnection(url, anonKey) {
    if (!window.supabase) {
      throw new Error('Supabase JS library is not loaded in browser.');
    }
    const tempClient = window.supabase.createClient(url.trim(), anonKey.trim());
    // Try simple query or auth check
    const { error } = await tempClient.from('user_profiles').select('count', { count: 'exact', head: true });
    // If error code is 42P01 (relation doesn't exist yet), the connection is still valid!
    if (error && error.code !== '42P01' && error.message && !error.message.includes('permission')) {
      throw new Error(error.message);
    }
    return true;
  }
}

export const supabaseService = new SupabaseService();

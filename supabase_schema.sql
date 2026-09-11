-- ============================================================
-- CAMPUSHUB SUPABASE POSTGRESQL DATABASE SCHEMA
-- Run this in your Supabase SQL Editor (1-Click Setup)
-- ============================================================

-- 1. Create user_profiles Table
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    roll_no TEXT,
    department TEXT DEFAULT 'Computer Science & Engineering',
    role TEXT DEFAULT 'Student',
    year TEXT DEFAULT '1st Year',
    avatar TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create user_states Table (Stores isolated application state per user)
CREATE TABLE IF NOT EXISTS public.user_states (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    state JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_states ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for user_profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.user_profiles;
CREATE POLICY "Users can view their own profile"
    ON public.user_profiles FOR SELECT
    USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.user_profiles;
CREATE POLICY "Users can insert their own profile"
    ON public.user_profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;
CREATE POLICY "Users can update their own profile"
    ON public.user_profiles FOR UPDATE
    USING (auth.uid() = id);

-- 5. RLS Policies for user_states
DROP POLICY IF EXISTS "Users can view their own state" ON public.user_states;
CREATE POLICY "Users can view their own state"
    ON public.user_states FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own state" ON public.user_states;
CREATE POLICY "Users can insert their own state"
    ON public.user_states FOR INSERT
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own state" ON public.user_states;
CREATE POLICY "Users can update their own state"
    ON public.user_states FOR UPDATE
    USING (auth.uid() = user_id);

-- 6. Trigger to automatically handle updated_at timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER set_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_user_states_updated_at ON public.user_states;
CREATE TRIGGER set_user_states_updated_at
    BEFORE UPDATE ON public.user_states
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Schema setup completed successfully!

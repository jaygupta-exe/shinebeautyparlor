-- ============================================
-- Supabase Setup: messages table
-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/hsuriursnxilhmmqgh/sql/new
-- ============================================

-- 1. Create the messages table
CREATE TABLE IF NOT EXISTS messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous inserts (for the contact form to submit)
CREATE POLICY "Allow anonymous inserts" ON messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Allow anonymous reads (for Sanity Studio dashboard to fetch)
CREATE POLICY "Allow anonymous reads" ON messages
  FOR SELECT
  TO anon
  USING (true);

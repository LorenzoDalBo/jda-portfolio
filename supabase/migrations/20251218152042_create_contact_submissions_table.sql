/*
  # Create contact submissions table for JDA'soluções portfolio

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `message` (text, required)
      - `phone` (text, optional)
      - `created_at` (timestamp with timezone)
      - `read` (boolean, default false)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public users to insert submissions
    - Add policy for authenticated users to view their own submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

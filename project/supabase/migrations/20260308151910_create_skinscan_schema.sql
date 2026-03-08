/*
  # Create SkinscanAI Database Schema

  ## Overview
  This migration sets up the complete database schema for the SkinscanAI application,
  including user profiles, skin analyses, and subscription management.

  ## New Tables
  
  ### 1. profiles
  - id (uuid, primary key) - References auth.users
  - email (text) - User email
  - full_name (text) - User's full name
  - language (text) - Preferred language (en/es)
  - subscription_tier (text) - free/pro/business
  - analyses_used_this_month (integer) - Counter for free tier limit
  - subscription_period_start (timestamptz) - Start of current billing period
  - stripe_customer_id (text) - Stripe customer identifier
  - created_at (timestamptz) - Account creation timestamp
  - updated_at (timestamptz) - Last update timestamp

  ### 2. skin_analyses
  - id (uuid, primary key) - Unique analysis identifier
  - user_id (uuid) - References profiles(id)
  - image_url (text) - URL to uploaded image in storage
  - skin_type (text) - Detected skin type
  - conditions (jsonb) - Array of detected conditions
  - hydration_level (text) - Hydration assessment
  - elasticity_level (text) - Elasticity assessment
  - am_routine (jsonb) - Morning skincare routine
  - pm_routine (jsonb) - Evening skincare routine
  - ingredients_to_use (jsonb) - Recommended ingredients
  - ingredients_to_avoid (jsonb) - Ingredients to avoid
  - progress_timeline (jsonb) - Expected progress milestones
  - analysis_date (timestamptz) - When analysis was performed
  - created_at (timestamptz) - Record creation timestamp

  ## Security
  - Enable RLS on all tables
  - Users can only read/write their own data
  - Authenticated access required for all operations
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text DEFAULT '',
  language text DEFAULT 'en',
  subscription_tier text DEFAULT 'free',
  analyses_used_this_month integer DEFAULT 0,
  subscription_period_start timestamptz DEFAULT now(),
  stripe_customer_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skin_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  image_url text NOT NULL,
  skin_type text NOT NULL,
  conditions jsonb DEFAULT '[]'::jsonb,
  hydration_level text NOT NULL,
  elasticity_level text NOT NULL,
  am_routine jsonb DEFAULT '[]'::jsonb,
  pm_routine jsonb DEFAULT '[]'::jsonb,
  ingredients_to_use jsonb DEFAULT '[]'::jsonb,
  ingredients_to_avoid jsonb DEFAULT '[]'::jsonb,
  progress_timeline jsonb DEFAULT '[]'::jsonb,
  analysis_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skin_analyses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own analyses"
  ON skin_analyses FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own analyses"
  ON skin_analyses FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own analyses"
  ON skin_analyses FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());
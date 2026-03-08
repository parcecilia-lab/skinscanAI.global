import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string;
  language: 'en' | 'es';
  subscription_tier: 'free' | 'pro' | 'business';
  analyses_used_this_month: number;
  subscription_period_start: string;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
};

export type SkinAnalysis = {
  id: string;
  user_id: string;
  image_url: string;
  skin_type: string;
  conditions: string[];
  hydration_level: string;
  elasticity_level: string;
  am_routine: { step: string; product: string }[];
  pm_routine: { step: string; product: string }[];
  ingredients_to_use: string[];
  ingredients_to_avoid: string[];
  progress_timeline: { week: number; milestone: string }[];
  analysis_date: string;
  created_at: string;
};

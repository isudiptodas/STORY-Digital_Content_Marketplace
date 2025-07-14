import { createClient } from '@supabase/supabase-js'

const projectURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;

// Create Supabase client
export const supabase = createClient(projectURL as string, anonKey as string);

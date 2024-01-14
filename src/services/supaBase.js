import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fbmnthpwcbpdarnmlxda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibW50aHB3Y2JwZGFybm1seGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzODA0OTQsImV4cCI6MjAxOTk1NjQ5NH0.T_B6cOYVY6w0hnAV3yY6aTPYy8-2bf5cxhNekT_1F8w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

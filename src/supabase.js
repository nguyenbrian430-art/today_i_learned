import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://meoutyizrsytvhhkmdwi.supabase.co";
const supabaseKey = "sb_publishable_tgUmOxO3NWzf1hcQ0Qkgzw_GL-dItLs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

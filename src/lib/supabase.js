import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdrzwvqmysvyohwsspoj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcnp3dnFteXN2eW9od3NzcG9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NzczOTksImV4cCI6MjA1MTM1MzM5OX0.gKH0ZOttS_r4hlAs31bz4B6eWyp-PZUyjmtGaAucBjU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getPageViews(pageSlug) {
  try {
    const { data, error } = await supabase
      .from("page_views")
      .select("views")
      .eq("page_slug", pageSlug)
      .single();

    if (error) {
      console.error("Error fetching page views:", error);
      return 0;
    }

    return data?.views || 0;
  } catch (err) {
    console.error("Unexpected error fetching page views:", err);
    return 0;
  }
}


export async function incrementPageView(page_name, page_slug) {
    const { error } = await supabase.rpc("increment_view", { page_name_param: page_name, page_slug_param: page_slug });
    if (error) {
        console.error("Error incrementing page view:", error);
    }
}

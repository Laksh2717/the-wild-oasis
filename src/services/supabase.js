import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owiglyqdtefcorsyabez.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93aWdseXFkdGVmY29yc3lhYmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MDA3MDMsImV4cCI6MjA3NDk3NjcwM30.bD11-1Cp_eulV5AaF5FO3kwh5AI83mjiRYjFnunAtWI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const supabase = createClient(
  'https://xvkibiodgrqadztafexn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2a2liaW9kZ3JxYWR6dGFmZXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyODA1NDksImV4cCI6MjA5Njg1NjU0OX0.sImdsJw-JaA_f2vtxFGjFRLnpkDIRMoSvMNEUJ3tFMc'
)

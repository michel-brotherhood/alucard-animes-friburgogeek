-- Tighten the public INSERT policy on form_submissions: still allows anonymous
-- submissions (required by public contest/contact forms), but adds basic
-- structural validation instead of an unconditional WITH CHECK (true).
DROP POLICY IF EXISTS "Allow public inserts on form_submissions" ON public.form_submissions;

CREATE POLICY "Allow public inserts on form_submissions"
ON public.form_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  form_type IS NOT NULL
  AND length(form_type) BETWEEN 1 AND 100
  AND form_data IS NOT NULL
  AND jsonb_typeof(form_data) = 'object'
  AND (email IS NULL OR length(email) <= 320)
);
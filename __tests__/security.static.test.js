const fs = require('node:fs');
const path = require('node:path');

const supabaseClientSource = fs.readFileSync(
  path.join(__dirname, '../lib/supabase.ts'),
  'utf8',
);

describe('Supabase client initialization', () => {
  test('does not fetch or evaluate remote code during module initialization', () => {
    expect(supabaseClientSource).not.toMatch(/\beval\s*\(/);
    expect(supabaseClientSource).not.toMatch(/\batob\s*\(/);
    expect(supabaseClientSource).not.toContain('AUTH_API_KEY');
    expect(supabaseClientSource).not.toContain("import('node-fetch')");
  });

  test('uses only the public Supabase client configuration', () => {
    expect(supabaseClientSource).toContain('EXPO_PUBLIC_SUPABASE_URL');
    expect(supabaseClientSource).toContain('EXPO_PUBLIC_SUPABASE_ANON_KEY');
    expect(supabaseClientSource).toContain('createClient<Database>');
  });
});

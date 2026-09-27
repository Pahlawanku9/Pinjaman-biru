-- Skema awal untuk prototipe. Jalankan setelah membuat project Supabase.
create extension if not exists pgcrypto;

create table if not exists public.loan_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  amount numeric(14,2) not null check (amount > 0),
  tenor_months integer not null check (tenor_months between 3 and 12),
  name text not null,
  phone text not null,
  nik_encrypted text,
  job text,
  monthly_income numeric(14,2),
  bank_name text,
  account_number_encrypted text,
  account_name text,
  ktp_path text,
  status text not null default 'Menunggu Verifikasi'
    check (status in ('Menunggu Verifikasi','Disetujui','Ditolak','Pencairan')),
  created_at timestamptz not null default now()
);

create table if not exists public.loan_settings (
  id boolean primary key default true,
  monthly_rate numeric(8,4) not null default 1.5,
  service_fee_rate numeric(8,4) not null default 1.0,
  updated_at timestamptz not null default now()
);

alter table public.loan_applications enable row level security;
alter table public.loan_settings enable row level security;

-- User hanya dapat membaca pengajuan miliknya.
create policy "users read own applications"
on public.loan_applications for select
using (auth.uid() = user_id);

-- Untuk produksi, insert/update harus lewat server-side endpoint
-- setelah validasi, anti-abuse, dan authorization.
create policy "users create own applications"
on public.loan_applications for insert
with check (auth.uid() = user_id);

-- Jangan membuat policy admin berdasarkan email di browser.
-- Gunakan role/claim server-side untuk admin.

-- Run in Supabase SQL editor after creating a project.
-- Enables My Hub weight tracking with Row Level Security.

create table if not exists public.weight_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  entry_date date not null,
  weight_kg numeric not null,
  medication text,
  dose text,
  supplier text,
  created_at timestamptz not null default now()
);

create index if not exists weight_entries_user_date_idx
  on public.weight_entries (user_id, entry_date);

alter table public.weight_entries enable row level security;

create policy "weight_select_own"
  on public.weight_entries for select
  using (auth.uid() = user_id);

create policy "weight_insert_own"
  on public.weight_entries for insert
  with check (auth.uid() = user_id);

create policy "weight_update_own"
  on public.weight_entries for update
  using (auth.uid() = user_id);

create policy "weight_delete_own"
  on public.weight_entries for delete
  using (auth.uid() = user_id);

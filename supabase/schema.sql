-- Run in Supabase SQL editor after creating a project.
-- Enables My Hub weight tracking with Row Level Security.
-- Auth: use Supabase Authentication (email/password). Add /auth/callback to Redirect URLs in the dashboard.

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

-- ── Profiles (visible in Table Editor) + sync from auth.users ───────────────
-- Supabase lists registered users under Authentication → Users.
-- This table mirrors each signup into public so you can browse them in Table Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Backfill existing auth users (run once if profiles was added later):
-- insert into public.profiles (id, email)
-- select id, email from auth.users u
-- where not exists (select 1 from public.profiles p where p.id = u.id);

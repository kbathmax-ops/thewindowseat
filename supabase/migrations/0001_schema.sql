-- The Window Seat — schema
create table if not exists countries (
  id text primary key,
  name text not null,
  continent text not null,
  region text not null
);

create table if not exists lessons (
  id bigint generated always as identity primary key,
  country_id text not null references countries (id) on delete cascade,
  lesson text not null,
  summary text not null,
  source_title text not null,
  source_author text,
  source_publication text not null,
  source_url text not null,
  pull_quote text not null,
  pull_quote_verbatim boolean not null default false
);

create table if not exists country_traits (
  country_id text primary key references countries (id) on delete cascade,
  novelty numeric(3,2) not null check (novelty between 0 and 1),
  sociality numeric(3,2) not null check (sociality between 0 and 1),
  discomfort numeric(3,2) not null check (discomfort between 0 and 1),
  structure numeric(3,2) not null check (structure between 0 and 1),
  pace numeric(3,2) not null check (pace between 0 and 1),
  growth_theme text not null check (growth_theme in ('patience','courage','belonging','self_knowledge'))
);

create table if not exists country_activities (
  country_id text not null references countries (id) on delete cascade,
  position smallint not null,
  activity text not null,
  primary key (country_id, position)
);

alter table countries enable row level security;
alter table lessons enable row level security;
alter table country_traits enable row level security;
alter table country_activities enable row level security;

create policy "public read countries" on countries for select using (true);
create policy "public read lessons" on lessons for select using (true);
create policy "public read traits" on country_traits for select using (true);
create policy "public read activities" on country_activities for select using (true);

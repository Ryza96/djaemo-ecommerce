-- =========================
-- SUPABASE CORE SCHEMA
-- D'Jaemo Jamur Krispi
-- =========================

-- =========================
-- 1. PRODUCTS TABLE
-- =========================
create table products (
id uuid primary key default gen_random_uuid(),
name text not null,
slug text unique,
description text,
price integer not null,
category text check (category in ('premium', 'pre_order', 'bundle')),
type text check (type in ('single', 'bundle')),
weight integer,
stock integer default 0,
is_active boolean default true,
created_at timestamp default now(),
updated_at timestamp default now()
);

-- =========================
-- 2. ORDERS TABLE
-- =========================
create table orders (
id uuid primary key default gen_random_uuid(),
invoice_number text unique not null,

customer_name text not null,
customer_phone text not null,
customer_email text,

province text,
city text,
district text,
sub_district text,
postal_code text,
full_address text,

subtotal integer not null,
shipping_cost integer default 0,
discount integer default 0,
total_price integer not null,

payment_status text check (payment_status in ('pending', 'paid', 'failed')) default 'pending',
order_status text check (order_status in ('waiting_confirmation', 'processing', 'shipped', 'completed', 'cancelled')) default 'waiting_confirmation',

created_at timestamp default now(),
updated_at timestamp default now()
);

-- =========================
-- 3. ORDER ITEMS TABLE
-- =========================
create table order_items (
id uuid primary key default gen_random_uuid(),
order_id uuid references orders(id) on delete cascade,
product_id uuid references products(id),

product_name text,
price integer not null,
quantity integer not null,
subtotal integer not null
);

-- =========================
-- 4. PAYMENTS TABLE
-- =========================
create table payments (
id uuid primary key default gen_random_uuid(),
order_id uuid references orders(id) on delete cascade,

transaction_id text,
payment_type text,

payment_status text check (payment_status in ('pending', 'settlement', 'expire', 'cancel')) default 'pending',

payment_url text,
paid_at timestamp,

created_at timestamp default now()
);

-- =========================
-- INDEXES (PERFORMANCE)
-- =========================
create index idx_orders_invoice on orders(invoice_number);
create index idx_orders_status on orders(order_status);
create index idx_payments_order on payments(order_id);
create index idx_order_items_order on order_items(order_id);

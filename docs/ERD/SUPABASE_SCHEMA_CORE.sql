-- ==========================================
-- D'JAEMO DATABASE SCHEMA v2.0
-- ==========================================

create extension if not exists pgcrypto;

-- ==========================================
-- PRODUCTS
-- ==========================================

create table products (
    id uuid primary key default gen_random_uuid(),

    name text not null,
    slug text unique not null,

    description text,

    category text not null check (
        category in (
            'premium',
            'pre_order',
            'bundle'
        )
    ),

    type text not null check (
        type in (
            'single',
            'bundle'
        )
    ),

    price integer not null check (price >= 0),

    weight integer,

    stock integer not null default 0,

    thumbnail_url text,

    is_preorder boolean default false,

    is_active boolean default true,

    display_order integer default 0,

    created_at timestamptz default now(),

    updated_at timestamptz default now()
);

create index idx_products_slug
on products(slug);

create index idx_products_category
on products(category);

create index idx_products_active
on products(is_active);
-- ==========================================
-- PRODUCT IMAGES
-- ==========================================

create table product_images (

    id uuid primary key default gen_random_uuid(),

    product_id uuid not null
    references products(id)
    on delete cascade,

    image_url text not null,

    sort_order integer default 0,

    created_at timestamptz default now()
);

create index idx_product_images_product
on product_images(product_id);
-- ==========================================
-- ORDERS
-- ==========================================

create table orders (

    id uuid primary key default gen_random_uuid(),

    invoice_number text unique not null,

    customer_name text not null,

    customer_phone text not null,

    customer_email text,

    province text not null,

    city text not null,

    district text not null,

    sub_district text not null,

    postal_code text not null,

    full_address text not null,

    subtotal integer not null check (subtotal >= 0),

    shipping_cost integer not null default 0,

    discount integer not null default 0,

    total_price integer not null check (total_price >= 0),

    shipping_courier text,

    shipping_service text,

    shipping_receipt text,

    payment_status text not null default 'pending'
    check (
        payment_status in (
            'pending',
            'paid',
            'failed',
            'expired',
            'refunded'
        )
    ),

    order_status text not null default 'waiting_confirmation'
    check (
        order_status in (
            'waiting_confirmation',
            'processing',
            'shipped',
            'completed',
            'cancelled'
        )
    ),

    created_at timestamptz default now(),

    updated_at timestamptz default now()
);

create index idx_orders_invoice
on orders(invoice_number);

create index idx_orders_status
on orders(order_status);

create index idx_orders_phone
on orders(customer_phone);
-- ==========================================
-- ORDER ITEMS
-- ==========================================

create table order_items (

    id uuid primary key default gen_random_uuid(),

    order_id uuid not null
    references orders(id)
    on delete cascade,

    product_id uuid not null
    references products(id),

    product_name text not null,

    product_price integer not null check (product_price >= 0),

    quantity integer not null check (quantity > 0),

    subtotal integer not null check (subtotal >= 0),

    created_at timestamptz default now()
);

create index idx_order_items_order
on order_items(order_id);

create index idx_order_items_product
on order_items(product_id);
-- ==========================================
-- PAYMENTS
-- ==========================================

create table payments (

    id uuid primary key default gen_random_uuid(),

    order_id uuid unique not null
    references orders(id)
    on delete cascade,

    midtrans_order_id text,

    transaction_id text,

    payment_type text,

    snap_token text,

    payment_url text,

    payment_status text not null default 'pending'
    check (
        payment_status in (
            'pending',
            'capture',
            'settlement',
            'deny',
            'cancel',
            'expire',
            'refund'
        )
    ),

    paid_at timestamptz,

    created_at timestamptz default now()
);

create index idx_payments_order
on payments(order_id);

create index idx_payments_status
on payments(payment_status);
-- ==========================================
-- VOUCHERS
-- ==========================================

create table vouchers (

    id uuid primary key default gen_random_uuid(),

    code text unique not null,

    discount_type text not null
    check (
        discount_type in (
            'percentage',
            'fixed'
        )
    ),

    discount_value integer not null,

    minimum_purchase integer default 0,

    quota integer default 0,

    used integer default 0,

    start_date timestamptz,

    end_date timestamptz,

    is_active boolean default true,

    created_at timestamptz default now()
);

create index idx_vouchers_code
on vouchers(code);
-- ==========================================
-- BANNERS
-- ==========================================

create table banners (

    id uuid primary key default gen_random_uuid(),

    title text,

    image_url text not null,

    link_url text,

    display_order integer default 0,

    is_active boolean default true,

    created_at timestamptz default now()
);
-- ==========================================
-- SETTINGS
-- ==========================================

create table settings (

    id uuid primary key default gen_random_uuid(),

    store_name text,

    store_email text,

    store_phone text,

    store_address text,

    instagram text,

    facebook text,

    tiktok text,

    shopee text,

    logo_url text,

    created_at timestamptz default now(),

    updated_at timestamptz default now()
);
-- ==========================================
-- ADMIN NOTIFICATIONS
-- ==========================================

create table admin_notifications (

    id uuid primary key default gen_random_uuid(),

    title text not null,

    message text not null,

    is_read boolean default false,

    created_at timestamptz default now()
);

create index idx_admin_notifications_read
on admin_notifications(is_read);
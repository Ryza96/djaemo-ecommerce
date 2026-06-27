# ERD-01 — CORE ENTITIES

## 1. Products Table

Tabel utama untuk semua produk.

### Fields:

* id (UUID, Primary Key)
* name (string)
* slug (string)
* description (text)
* price (integer)
* category (enum: premium, pre_order, bundle)
* type (enum: single, bundle)
* weight (integer)
* stock (integer, internal only)
* is_active (boolean)
* created_at (timestamp)
* updated_at (timestamp)

---

## 2. Orders Table

Tabel utama transaksi customer.

### Fields:

* id (UUID, Primary Key)
* invoice_number (string, unique)

### Customer Data:

* customer_name (string)
* customer_phone (string)
* customer_email (string)

### Shipping Address:

* province (string)
* city (string)
* district (string)
* sub_district (string)
* postal_code (string)
* full_address (text)

### Order Financial:

* subtotal (integer)
* shipping_cost (integer)
* discount (integer)
* total_price (integer)

### Status:

* payment_status (pending, paid, failed)

* order_status (waiting_confirmation, processing, shipped, completed, cancelled)

* created_at (timestamp)

* updated_at (timestamp)

---

## 3. Order_Items Table

Detail produk dalam setiap order.

### Fields:

* id (UUID, Primary Key)
* order_id (UUID, Foreign Key → orders.id)
* product_id (UUID, Foreign Key → products.id)

### Snapshot Data:

* product_name (string)
* price (integer)
* quantity (integer)
* subtotal (integer)

---

## 4. Payments Table

Data pembayaran dari Midtrans.

### Fields:

* id (UUID, Primary Key)
* order_id (UUID, Foreign Key → orders.id)
* transaction_id (string)
* payment_type (string)

### Status:

* payment_status (pending, settlement, expire, cancel)

### Metadata:

* payment_url (string)
* paid_at (timestamp)
* created_at (timestamp)

---

## 5. Relationships

* products → order_items (1 to many)
* orders → order_items (1 to many)
* orders → payments (1 to 1)

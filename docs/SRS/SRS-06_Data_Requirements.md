# SRS-06 — DATA REQUIREMENTS

## 1. Product Data

Data utama produk yang dijual di website.

* id (UUID)
* name (string)
* slug (string)
* description (text)
* price (integer)
* category (enum: premium, pre-order, bundle)
* type (enum: single, bundle)
* stock (integer, internal use only)
* weight (integer, gram)
* images (array of string URL)
* is_active (boolean)
* created_at (timestamp)
* updated_at (timestamp)

---

## 2. Order Data

Data transaksi customer.

* id (UUID)
* invoice_number (string)
* customer_name (string)
* customer_phone (string)
* customer_email (string)

### Shipping Address

* province
* city
* district
* sub_district
* postal_code
* full_address

### Order Summary

* subtotal (integer)
* shipping_cost (integer)
* discount (integer)
* total_price (integer)

### Status

* payment_status (pending, paid, failed)

* order_status (waiting_confirmation, processing, shipped, completed, cancelled)

* created_at

* updated_at

---

## 3. Order Items

Detail produk dalam satu order.

* id (UUID)
* order_id (foreign key)
* product_id (foreign key)
* product_name_snapshot (string)
* price_snapshot (integer)
* quantity (integer)
* subtotal (integer)

---

## 4. Payment Data

Data pembayaran Midtrans.

* id (UUID)
* order_id (foreign key)
* payment_gateway (Midtrans)
* transaction_id (string)
* payment_type (string)
* payment_status (pending, settlement, expire, cancel)
* payment_url (string)
* paid_at (timestamp)

---

## 5. Shipping Data

Data pengiriman menggunakan Biteship.

* id (UUID)
* order_id (foreign key)
* courier_name (string)
* courier_service (string)
* tracking_number (string)
* shipping_status (pending, dispatched, delivered)
* shipping_cost (integer)
* shipped_at (timestamp)

---

## 6. Voucher Data

Data diskon promo.

* id (UUID)
* code (string)
* type (percentage / fixed)
* value (integer)
* min_purchase (integer)
* max_discount (integer)
* is_active (boolean)
* expired_at (timestamp)

---

## 7. Banner Data

Data tampilan website.

* id (UUID)
* title (string)
* image_url (string)
* link (string)
* is_active (boolean)
* position (string: hero, promo)

---

## 8. Contact Messages

Pesan dari customer.

* id (UUID)
* name (string)
* email (string)
* message (text)
* is_read (boolean)
* created_at

---

## 9. Admin Data

Data admin sistem.

* id (UUID)
* name (string)
* email (string)
* password_hash (string)
* last_login (timestamp)

---

## 10. System Settings

Konfigurasi website.

* id (UUID)
* store_name (string)
* logo_url (string)
* whatsapp_number (string)
* email_support (string)
* address (text)
* midtrans_config (json)
* biteship_config (json)

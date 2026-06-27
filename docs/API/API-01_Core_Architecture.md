# API-01 — CORE API ARCHITECTURE

---

## 1. API Philosophy

Sistem menggunakan pendekatan:

> **Server-First Architecture (Next.js API Layer)**

Artinya:

* Semua transaksi penting diproses di server
* Client hanya mengirim request
* Tidak ada logic pembayaran / shipping di frontend

---

## 2. API Layers

Sistem dibagi menjadi 4 layer:

### 1. Client Layer (Browser)

* Next.js UI
* Cart interaction
* Checkout form

### 2. API Layer (Next.js Route Handlers)

* /api/orders
* /api/payments
* /api/shipping
* /api/webhooks

### 3. Service Layer (External APIs)

* Midtrans
* Biteship
* Supabase

### 4. Database Layer

* Supabase PostgreSQL

---

## 3. CORE API ENDPOINTS

---

# 🛒 3.1 Product APIs

### GET /api/products

Mengambil semua produk aktif.

Response:

```json
[
  {
    "id": "uuid",
    "name": "Balado 72gr",
    "price": 15000,
    "stock": 20
  }
]
```

---

### GET /api/products/:id

Detail produk.

---

# 🛍️ 3.2 Cart APIs

Cart disimpan di frontend (local state / localStorage).

Tidak ada API server untuk cart.

---

# 📦 3.3 Order APIs

---

### POST /api/orders/create

Membuat order baru saat checkout.

Request:

```json
{
  "customer": {
    "name": "string",
    "phone": "string",
    "email": "string"
  },
  "address": {
    "province": "string",
    "city": "string",
    "district": "string",
    "sub_district": "string",
    "postal_code": "string",
    "full_address": "string"
  },
  "items": [
    {
      "product_id": "uuid",
      "quantity": 2
    }
  ],
  "voucher_code": "string"
}
```

Response:

```json
{
  "order_id": "uuid",
  "invoice_number": "INV-001",
  "total_price": 120000
}
```

---

# 💳 3.4 Payment APIs (Midtrans)

---

### POST /api/payments/create

Membuat transaksi Midtrans Snap.

Response:

```json
{
  "payment_url": "https://app.midtrans.com/...",
  "transaction_id": "xxx"
}
```

---

### POST /api/webhooks/midtrans

Webhook dari Midtrans.

Logic:

* validasi signature
* update payment status
* update order status → "paid"
* kurangi stock produk
* kirim email admin

---

# 🚚 3.5 Shipping APIs (Biteship)

---

### POST /api/shipping/rates

Menghitung ongkir berdasarkan alamat.

Request:

```json
{
  "destination_postal_code": "60211",
  "items": [
    {
      "weight": 72,
      "quantity": 2
    }
  ]
}
```

Response:

```json
[
  {
    "courier": "jne",
    "service": "REG",
    "price": 12000,
    "etd": "2-3 days"
  }
]
```

---

### POST /api/shipping/create

Membuat resi setelah admin konfirmasi.

Response:

```json
{
  "tracking_number": "AWB123456"
}
```

---

# 🔐 3.6 Admin APIs

---

### POST /api/admin/login

Login admin.

---

### GET /api/admin/orders

List semua order.

---

### POST /api/admin/orders/:id/confirm

Admin klik “Konfirmasi Pesanan”.

Logic:

* update order_status → processing
* trigger WhatsApp message
* log timestamp

---

### POST /api/admin/orders/:id/ship

Generate resi + update status shipped.

---

# 📧 3.7 Notification APIs

---

### POST /api/notifications/email

Kirim email ke admin.

Trigger:

* order paid
* order created

---

# ⚙️ 4. API RULES

---

## Rule 1 — Server-only logic

* Midtrans
* Biteship
* stock update
  → semua harus server-side

---

## Rule 2 — No direct database write from client

Semua write ke Supabase harus lewat API route

---

## Rule 3 — Webhook is source of truth

Payment status hanya valid dari Midtrans webhook

---

## Rule 4 — Order immutability

Setelah order dibuat:

* items tidak bisa diubah
* hanya status yang berubah

---

## Rule 5 — Idempotency

Webhook harus aman dari duplicate request

---

## Rule 6 — Stateless frontend

Frontend tidak menyimpan logic bisnis

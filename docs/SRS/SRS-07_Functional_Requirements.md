# SRS-07 — FUNCTIONAL REQUIREMENTS

---

## 1. Customer Functional Requirements

### FR-001 — View Products

Sistem harus menampilkan semua produk aktif kepada customer.

---

### FR-002 — View Product Detail

Sistem harus menampilkan detail produk lengkap termasuk harga, deskripsi, dan gambar.

---

### FR-003 — Add to Cart

Customer dapat menambahkan produk ke dalam keranjang.

---

### FR-004 — Update Cart Quantity

Customer dapat mengubah jumlah produk di dalam keranjang.

---

### FR-005 — Remove from Cart

Customer dapat menghapus produk dari keranjang.

---

### FR-006 — Checkout Order

Sistem harus mengizinkan customer melakukan checkout tanpa login.

---

### FR-007 — Input Customer Data

Sistem harus menerima data:

* nama
* email
* nomor WhatsApp
* alamat lengkap
* kode pos
* wilayah pengiriman

---

### FR-008 — Calculate Shipping Cost

Sistem harus menghitung ongkos kirim menggunakan API Biteship berdasarkan alamat tujuan.

---

### FR-009 — Apply Voucher

Sistem harus memvalidasi dan menerapkan voucher jika tersedia.

---

### FR-010 — Create Payment

Sistem harus membuat transaksi pembayaran melalui Midtrans.

---

### FR-011 — Payment Notification Handling

Sistem harus menerima webhook Midtrans dan memperbarui status pembayaran menjadi "paid".

---

### FR-012 — Order Status Tracking

Customer dapat melihat status pesanan berdasarkan invoice.

---

## 2. Admin Functional Requirements

---

### FR-013 — Admin Login

Sistem harus menyediakan autentikasi admin menggunakan email dan password.

---

### FR-014 — View Dashboard Summary

Admin dapat melihat ringkasan:

* total penjualan
* pesanan baru
* produk terjual
* status pesanan

---

### FR-015 — Manage Orders

Admin dapat melihat detail semua pesanan.

---

### FR-016 — Confirm Order

Admin dapat mengubah status dari:

* "waiting_confirmation" → "processing"

dan memicu:

* WhatsApp message
* timestamp konfirmasi

---

### FR-017 — Update Order Status

Admin dapat mengubah status pesanan:

* processing
* shipped
* completed
* cancelled

---

### FR-018 — Manage Products

Admin dapat:

* menambah produk
* mengedit produk
* menghapus produk
* mengubah status aktif produk

---

### FR-019 — Manage Stock

Admin dapat melihat dan mengubah stok produk (internal only).

---

### FR-020 — Manage Voucher

Admin dapat:

* membuat voucher
* mengaktifkan/nonaktifkan voucher
* mengatur batas penggunaan

---

### FR-021 — Manage Banner

Admin dapat mengatur banner homepage dan promo.

---

### FR-022 — Manage Contact Messages

Admin dapat membaca pesan dari customer.

---

## 3. System Functional Requirements

---

### FR-023 — Email Notification

Sistem harus mengirim email ke admin ketika:

* pembayaran berhasil
* order baru dibuat

---

### FR-024 — WhatsApp Integration

Sistem harus menghasilkan pesan WhatsApp otomatis saat admin mengonfirmasi order.

---

### FR-025 — Stock Deduction

Sistem harus mengurangi stok ketika pembayaran berhasil (paid/settlement).

---

### FR-026 — Invoice Generation

Sistem harus membuat invoice unik untuk setiap order.

---

### FR-027 — Order Creation

Sistem harus membuat order baru setelah checkout berhasil.

---

### FR-028 — Data Persistence

Sistem harus menyimpan semua data order ke Supabase.

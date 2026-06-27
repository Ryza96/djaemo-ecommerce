# SRS-10 — EXTERNAL INTEGRATIONS

---

## 1. Supabase Integration

* Sistem menggunakan Supabase sebagai database utama.
* Semua data (product, order, payment, shipping) disimpan di Supabase.
* Akses database harus melalui server-side atau protected client rules.
* Supabase digunakan untuk:

  * Authentication admin
  * Database storage
  * File storage (product images)

---

## 2. Midtrans Integration

* Midtrans digunakan sebagai payment gateway utama.
* Sistem harus membuat transaksi melalui Midtrans Snap API.
* Webhook Midtrans digunakan untuk update status pembayaran.
* Status pembayaran harus sinkron dengan sistem internal.

---

## 3. Biteship Integration

* Biteship digunakan untuk perhitungan ongkos kirim dan pembuatan resi.
* Sistem mengirim data alamat customer ke API Biteship.
* Sistem menerima response berupa:

  * opsi kurir
  * estimasi pengiriman
  * biaya pengiriman
* Resi dibuat setelah admin memproses pesanan.

---

## 4. Email Service Integration

* Sistem harus mengirim email notifikasi ke admin.
* Trigger email:

  * pembayaran berhasil
  * order baru dibuat
* Email berisi ringkasan order dan link ke dashboard.

---

## 5. WhatsApp Integration (Manual Link)

* Sistem tidak menggunakan WhatsApp API resmi.
* Sistem hanya menghasilkan link WhatsApp dengan pre-filled message.
* Digunakan oleh admin untuk komunikasi dengan customer.

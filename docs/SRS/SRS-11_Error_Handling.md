# SRS-11 — ERROR HANDLING

---

## 1. Payment Errors

* Jika pembayaran gagal, status order tetap "pending".
* Customer dapat mencoba pembayaran ulang.
* Sistem harus menyimpan alasan kegagalan jika tersedia.

---

## 2. Shipping API Errors (Biteship)

* Jika Biteship gagal merespons:

  * sistem menampilkan pesan error
  * admin dapat menginput ongkir manual (fallback)

---

## 3. Database Errors

* Jika Supabase gagal:

  * sistem tidak boleh membuat order setengah jadi
  * transaksi harus atomic (all or nothing)

---

## 4. Validation Errors

* Semua form harus menampilkan pesan error jika input tidak valid.
* Data tidak boleh disimpan jika ada field wajib kosong.

---

## 5. Webhook Errors

* Jika webhook Midtrans gagal diproses:

  * sistem harus dapat retry otomatis
  * webhook tidak boleh menyebabkan data duplikat

# SRS-13 — PERFORMANCE REQUIREMENTS

---

## 1. Response Time

* Halaman utama harus load di bawah 3 detik.
* API response maksimal 500ms untuk operasi umum.

---

## 2. Transaction Speed

* Checkout harus dapat diproses dalam waktu kurang dari 10 detik (tanpa termasuk pembayaran eksternal).

---

## 3. Scalability

* Sistem harus mampu menangani peningkatan order tanpa perubahan struktur besar.

---

## 4. Database Performance

* Query database harus dioptimalkan dengan indexing pada:

  * order_id
  * product_id
  * invoice_number

---

## 5. File Handling

* Gambar produk harus dikompres untuk mempercepat loading.

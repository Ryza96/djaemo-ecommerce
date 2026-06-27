# SRS-08 — NON-FUNCTIONAL REQUIREMENTS

---

## 1. Performance Requirements

* Sistem harus mampu menangani minimal 100 concurrent users tanpa penurunan performa signifikan.
* Waktu loading halaman utama maksimal 3 detik pada koneksi normal.
* API response time rata-rata di bawah 500ms untuk operasi standar (produk, order, cart).

---

## 2. Availability Requirements

* Sistem harus memiliki uptime minimal 99%.
* Website harus dapat diakses 24/7 kecuali dalam kondisi maintenance.
* Maintenance harus dilakukan tanpa merusak data transaksi yang sedang berjalan.

---

## 3. Scalability Requirements

* Sistem harus dapat berkembang dari 1 admin dan puluhan order per hari hingga ratusan order per hari tanpa perubahan arsitektur besar.
* Database (Supabase) harus mendukung peningkatan jumlah data tanpa redesign struktur utama.

---

## 4. Security Requirements

* Password admin harus disimpan dalam bentuk hash (bcrypt atau setara).
* Semua komunikasi antara client dan server harus melalui HTTPS.
* Admin dashboard harus dilindungi autentikasi.
* Webhook Midtrans harus diverifikasi menggunakan signature key.
* Tidak ada data sensitif yang ditampilkan di frontend customer.

---

## 5. Reliability Requirements

* Sistem harus memastikan data order tidak hilang meskipun terjadi kegagalan jaringan.
* Setiap transaksi pembayaran harus memiliki mekanisme retry webhook jika gagal.
* Sistem harus memiliki fallback jika API Biteship atau Midtrans gagal sementara.

---

## 6. Maintainability Requirements

* Kode harus dipisahkan berdasarkan modul (customer, admin, payment, shipping).
* Semua fungsi utama harus reusable dan tidak duplikasi logic.
* Struktur project harus mendukung pengembangan fitur baru tanpa perubahan besar pada core system.

---

## 7. Usability Requirements

* Customer harus dapat menyelesaikan checkout dalam kurang dari 5 langkah.
* Interface harus sederhana dan tidak membingungkan pengguna baru.
* Tidak diperlukan registrasi akun untuk melakukan pembelian.

---

## 8. Compatibility Requirements

* Sistem harus kompatibel dengan browser modern (Chrome, Safari, Firefox).
* Sistem harus responsif untuk perangkat mobile dan desktop.
* Integrasi harus kompatibel dengan:

  * Midtrans API
  * Biteship API
  * Supabase

---

## 9. Data Integrity Requirements

* Setiap order harus memiliki invoice unik.
* Data pembayaran harus konsisten dengan status order.
* Tidak boleh ada order tanpa referensi payment record.
* Relasi data harus dijaga dengan foreign key di database.

---

## 10. Logging & Monitoring Requirements

* Sistem harus mencatat aktivitas penting seperti:

  * pembayaran berhasil
  * order dibuat
  * admin mengubah status order
* Error sistem harus dicatat untuk debugging.
* Log tidak boleh menyimpan data sensitif customer.

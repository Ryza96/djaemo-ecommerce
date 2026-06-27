# SRS-09 — SECURITY REQUIREMENTS

---

## 1. Authentication Security

* Sistem harus menggunakan autentikasi untuk akses Admin Dashboard.
* Password admin harus disimpan menggunakan hashing (bcrypt atau setara).
* Sistem harus menolak akses tanpa autentikasi ke halaman admin.
* Session login harus memiliki masa berlaku (session expiration).

---

## 2. Authorization Security

* Hanya admin yang memiliki akses ke fitur dashboard.
* Customer tidak memiliki akses ke data internal admin.
* API internal admin harus diproteksi dari akses publik.

---

## 3. Route Protection

* Semua route admin harus dilindungi middleware authentication.
* User yang belum login harus diarahkan ke halaman login.
* Tidak boleh ada akses langsung ke endpoint admin tanpa validasi.

---

## 4. Payment Security (Midtrans)

* Semua webhook dari Midtrans harus diverifikasi menggunakan signature key.
* Sistem harus menolak request webhook yang tidak valid.
* Status pembayaran hanya boleh diubah berdasarkan data resmi dari Midtrans.

---

## 5. Data Protection

* Data sensitif seperti:

  * password
  * API keys
  * secret keys
    harus disimpan di environment variables.
* Data customer tidak boleh diekspos ke frontend selain data yang diperlukan.

---

## 6. Input Validation

* Semua input customer harus divalidasi sebelum disimpan ke database.
* Sistem harus mencegah input kosong pada field wajib.
* Sistem harus menghindari injection (SQL / XSS) melalui sanitasi input.

---

## 7. API Security

* Semua request ke Supabase harus menggunakan anon/public key yang dibatasi aksesnya.
* Endpoint internal harus menggunakan server-side authentication.
* Tidak boleh ada secret key di frontend.

---

## 8. Shipping Security (Biteship)

* API key Biteship harus disimpan di server environment.
* Request ke Biteship hanya boleh dilakukan dari server-side.
* Tidak boleh ada akses langsung dari client ke API Biteship.

---

## 9. Session & Access Control

* Admin session harus otomatis logout jika tidak aktif dalam waktu tertentu.
* Login session tidak boleh dapat digunakan di perangkat tidak dikenal tanpa autentikasi ulang.

---

## 10. Logging Security Events

* Sistem harus mencatat:

  * login admin berhasil/gagal
  * perubahan status order
  * akses webhook pembayaran
* Log tidak boleh menyimpan password atau API secret.

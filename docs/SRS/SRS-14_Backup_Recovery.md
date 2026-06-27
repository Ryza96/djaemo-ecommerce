# SRS-14 — BACKUP & RECOVERY

---

## 1. Database Backup

* Supabase harus memiliki backup otomatis.
* Backup dilakukan secara berkala.

---

## 2. Data Recovery

* Sistem harus dapat memulihkan data jika terjadi kegagalan sistem.
* Data order tidak boleh hilang dalam kondisi apapun.

---

## 3. Transaction Safety

* Semua transaksi harus bersifat atomic.
* Tidak boleh ada order setengah jadi tanpa status jelas.

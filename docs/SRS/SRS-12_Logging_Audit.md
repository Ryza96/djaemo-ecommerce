# SRS-12 — LOGGING & AUDIT

---

## 1. System Logs

Sistem harus mencatat aktivitas penting:

* order created
* payment success
* payment failed
* admin login
* admin action on order

---

## 2. Admin Activity Logs

Setiap tindakan admin harus dicatat:

* change order status
* confirm order
* create product
* update product
* generate shipping label

---

## 3. Error Logs

* Semua error sistem harus dicatat.
* Error log digunakan untuk debugging dan monitoring.

---

## 4. Audit Trail

* Setiap order harus memiliki histori perubahan status.
* Admin yang melakukan perubahan harus tercatat.

# PROJECT RULES

## D'Jaemo Jamur Krispi Website

Version : 1.0

---

# 1. PROJECT PHILOSOPHY

Project ini dibangun dengan prinsip:

> **"Correctness First, Feature Second, Design Last."**

Artinya:

1. Sistem harus bekerja dengan benar sebelum menambahkan fitur baru.
2. Stabilitas lebih penting daripada kecepatan development.
3. Tampilan (UI) dapat berubah kapan saja, tetapi business logic harus tetap konsisten.
4. Semua keputusan teknis harus mengacu pada dokumen SRS, ERD, API, dan Architecture.

---

# 2. SINGLE SOURCE OF TRUTH

Project ini memiliki urutan prioritas sebagai berikut:

1. PROJECT_RULES.md
2. SRS
3. ERD
4. API Specification
5. Architecture
6. Source Code

Jika terjadi konflik antar dokumen, maka prioritas tertinggi yang digunakan adalah urutan di atas.

Source Code **tidak boleh** mengubah keputusan bisnis yang telah ditetapkan pada SRS.

---

# 3. DEVELOPMENT PRINCIPLES

Seluruh pengembangan harus mengikuti prinsip berikut:

* Build small, test often.
* Satu fitur selesai sepenuhnya sebelum memulai fitur berikutnya.
* Tidak membuat fitur yang belum direncanakan.
* Tidak melakukan optimasi prematur.
* Tidak menambahkan library tanpa alasan yang jelas.
* Selalu mengutamakan keterbacaan kode.

---

# 4. AI WORKING RULES

Setiap AI (OpenCode, Cursor, Copilot, ChatGPT, atau AI lainnya) wajib mengikuti aturan berikut:

* Wajib membaca PROJECT_RULES.md sebelum melakukan perubahan.
* Wajib mengikuti struktur folder project.
* Tidak boleh mengubah arsitektur tanpa persetujuan owner.
* Tidak boleh membuat file baru jika file yang sesuai sudah ada.
* Tidak boleh menghapus file tanpa instruksi.
* Tidak boleh mengubah nama folder tanpa instruksi.
* Tidak boleh mengubah business rules.
* Tidak boleh mengubah struktur database tanpa persetujuan.
* Tidak boleh mengubah API contract tanpa persetujuan.
* Tidak boleh mengubah UI ketika tugas hanya berkaitan dengan backend.
* Tidak boleh mengubah backend ketika tugas hanya berkaitan dengan UI.

Jika sebuah instruksi bertentangan dengan PROJECT_RULES.md, AI harus meminta konfirmasi terlebih dahulu sebelum melakukan perubahan.

---

# 5. PROJECT STRUCTURE

Semua file harus ditempatkan pada folder yang sesuai.

Contoh:

* docs/ → Dokumentasi
* app/ → Routing Next.js
* components/ → UI Components
* lib/ → Helper dan konfigurasi
* services/ → Business Logic
* store/ → State Management
* types/ → TypeScript Types

Tidak diperbolehkan membuat folder baru tanpa alasan teknis yang kuat.

---

# 6. DEVELOPMENT STAGE

Project harus dikerjakan sesuai urutan berikut:

Stage 1

* Requirement (SRS)

Stage 2

* Database Design (ERD)

Stage 3

* API Design

Stage 4

* Architecture

Stage 5

* Database Implementation

Stage 6

* Backend Development

Stage 7

* Frontend Development

Stage 8

* Testing

Stage 9

* Deployment

Urutan ini tidak boleh dilompati kecuali disetujui owner.

---

# 7. GENERAL CODING PRINCIPLES

Semua kode harus memenuhi prinsip berikut:

* Mudah dibaca.
* Mudah dipelihara.
* Konsisten.
* Tidak duplikasi.
* Menggunakan TypeScript secara maksimal.
* Menghindari penggunaan "any".
* Menggunakan nama variabel yang deskriptif.
* Fungsi memiliki satu tanggung jawab (Single Responsibility Principle).

---

# END OF PART 1

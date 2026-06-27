## 5. Business Rules

### Customer

* Customer dapat melakukan pembelian tanpa membuat akun (Guest Checkout).
* Customer wajib mengisi data pengiriman yang valid.
* Customer hanya dapat membeli produk yang memiliki stok.
* Customer dapat membeli lebih dari satu item dalam satu transaksi.
* Customer dapat menggunakan voucher apabila memenuhi syarat.

---

### Product

* Website hanya menjual produk milik D'Jaemo.
* Produk dapat memiliki lebih dari satu gambar.
* Produk dapat diaktifkan atau dinonaktifkan oleh Admin.
* Produk yang dinonaktifkan tidak tampil pada Website Customer.

---

### Stock

* Stok tidak berkurang ketika produk dimasukkan ke keranjang.
* Stok hanya berkurang setelah pembayaran berhasil (Settlement).
* Admin dapat menambah atau mengurangi stok melalui Dashboard.

---

### Payment

* Seluruh pembayaran diproses menggunakan Midtrans.
* Status pembayaran diperbarui berdasarkan notifikasi (Webhook) dari Midtrans.
* Customer yang belum menyelesaikan pembayaran dianggap belum melakukan pembelian.

---

### Shipping

* Ongkos kirim dihitung menggunakan API Biteship.
* Resi hanya dibuat setelah pesanan siap dikirim.
* Nomor resi disimpan pada data pesanan.

---

### Admin

* Sistem hanya memiliki satu Admin.
* Admin memiliki akses penuh ke seluruh Dashboard.
* Admin wajib login untuk mengakses Dashboard.
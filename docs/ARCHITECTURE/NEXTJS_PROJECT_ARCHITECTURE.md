# NEXTJS PROJECT ARCHITECTURE

---

## 1. Architecture Overview

Project menggunakan:

> Next.js (App Router) + Server Actions + API Routes Hybrid

Prinsip utama:

* UI = Client Components
* Logic penting = Server Actions / API Routes
* External services = Server-side only

---

## 2. Root Folder Structure

```text id="struct01"
app/
components/
lib/
services/
hooks/
store/
types/
middleware.ts
```

---

## 3. APP ROUTER STRUCTURE

---

### 🏠 CUSTOMER SIDE

```text id="cust01"
app/
 ├── page.tsx (Homepage)
 ├── products/
 │    ├── page.tsx
 │    ├── [slug]/page.tsx
 ├── cart/
 │    ├── page.tsx
 ├── checkout/
 │    ├── page.tsx
 ├── payment/
 │    ├── page.tsx
 ├── order/
 │    ├── [invoice]/page.tsx
 ├── about/
 ├── contact/
```

---

### 🧑‍💼 ADMIN SIDE

```text id="admin01"
app/admin/
 ├── login/
 │    ├── page.tsx
 ├── dashboard/
 │    ├── page.tsx
 ├── orders/
 │    ├── page.tsx
 │    ├── [id]/page.tsx
 ├── products/
 │    ├── page.tsx
 ├── vouchers/
 ├── banners/
 ├── settings/
```

---

## 4. API STRUCTURE

```text id="api02"
app/api/
 ├── products/
 ├── orders/
 │    ├── create/
 │    ├── [id]/
 │    ├── confirm/
 ├── payments/
 │    ├── create/
 │    ├── webhook/
 ├── shipping/
 │    ├── rates/
 │    ├── create/
 ├── admin/
 │    ├── login/
 ├── notifications/
 │    ├── email/
```

---

## 5. LIB (CORE LOGIC)

```text id="lib01"
lib/
 ├── supabase/
 │    ├── client.ts
 │    ├── server.ts
 ├── midtrans/
 │    ├── snap.ts
 │    ├── webhook.ts
 ├── biteship/
 │    ├── shipping.ts
 ├── auth/
 │    ├── admin-auth.ts
 ├── utils/
 │    ├── invoice.ts
 │    ├── currency.ts
```

---

## 6. SERVICES LAYER

```text id="service01"
services/
 ├── order.service.ts
 ├── payment.service.ts
 ├── shipping.service.ts
 ├── product.service.ts
 ├── admin.service.ts
```

---

## 7. STATE MANAGEMENT

```text id="state01"
store/
 ├── cart.store.ts
 ├── checkout.store.ts
```

* cart = local state (client only)
* checkout = temporary session state

---

## 8. TYPES SYSTEM

```text id="types01"
types/
 ├── product.ts
 ├── order.ts
 ├── payment.ts
 ├── shipping.ts
 ├── api.ts
```

---

## 9. KEY DESIGN RULES

---

### RULE 1 — Server First

* semua transaksi penting di server
* client hanya UI

---

### RULE 2 — No Direct DB Access from Client

* Supabase hanya via server layer

---

### RULE 3 — API is single source for external services

* Midtrans tidak dipanggil dari frontend
* Biteship tidak dipanggil dari frontend

---

### RULE 4 — Cart is client-only

* tidak disimpan di database

---

### RULE 5 — Order is immutable

* hanya status yang bisa berubah

---

### RULE 6 — Admin separated route

* semua admin di /admin/*
* wajib auth middleware

---

## 10. DATA FLOW OVERVIEW

```text id="flow01"
Customer → Cart → Checkout → API Orders → Midtrans → Webhook → Supabase → Admin Dashboard
```

---

## 11. SYSTEM DESIGN PRINCIPLE

> “Minimal client logic, maximum server control”

Artinya:

* frontend ringan
* backend yang mengatur semua rules bisnis

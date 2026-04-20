# CommercePro - Full-Stack eCommerce Platform

Production-ready monorepo eCommerce platform with:
- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + MySQL + JWT
- **Database:** MySQL relational schema + seed data
- **Features:** Customer storefront, cart, wishlist, checkout, reviews, coupons, full admin panel

## 1) Folder Structure

```txt
Ecommerce-fullstack/
├── frontend/                 # Next.js app (customer + admin pages)
├── backend/                  # Express API
├── database/
│   ├── schema.sql            # Relational schema
│   └── seed.sql              # Demo data
└── README.md
```

## 2) Quick Setup

### Prerequisites
- Node.js 20+
- MySQL 8+

### Database
```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql
```

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend: `http://localhost:3000`  
Backend API: `http://localhost:5000/api`

## 3) Auth and Roles
- JWT access token via `Authorization: Bearer <token>`.
- Role-based access middleware (`customer`, `admin`).
- Protected admin routes in frontend and backend.

## 4) API Overview
Base URL: `/api`

- Auth: `POST /auth/register`, `POST /auth/login`, `GET /auth/me`
- Products: `GET /products`, `GET /products/:id`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id`
- Categories: CRUD `/categories`
- Orders: `/orders` + admin status update
- Users: `/users` admin CRUD
- Coupons: `/coupons` CRUD
- Reviews: `/reviews` CRUD
- Cart: `/cart` operations
- Wishlist: `/wishlist` operations
- Upload: `POST /upload/product-image`
- Analytics: `GET /analytics/overview`

## 5) Admin Pages
- Dashboard
- Products
- Categories
- Orders
- Users
- Coupons
- Reviews
- Settings

## 6) Seed Accounts
- **Admin:** `admin@commercepro.com` / `Admin@123`
- **Customer:** `user@commercepro.com` / `User@123`

## 7) Production Checklist
- Set strong `JWT_SECRET`
- Configure HTTPS and CORS domain allow-list
- Use object storage (S3/Cloudinary) for image uploads
- Enable DB backups + monitoring
- Add payment gateway credentials (Stripe/Razorpay/etc.)


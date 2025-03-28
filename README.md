# Adidas Store - MERN Stack E-commerce

## 📝 Mô tả

Dự án website thương mại điện tử bán quần áo Adidas được xây dựng bằng MERN Stack (MongoDB, Express.js, React.js, Node.js), cho phép người dùng duyệt sản phẩm, thêm vào giỏ hàng và thanh toán với nhiều phương thức khác nhau.

## 🚀 Demo

- Website: [https://adidas-store-fe.vercel.app/]
- Admin Dashboard: [https://adidas-admin-eight.vercel.app/]

## 🔑 Tài khoản Demo

```javascript
// Tài khoản Admin
Email: adminuser@gmail.com
Password: admin123

// Tài khoản User
Email: testuser@gmail.com
Password: 12345678

// Số thẻ giả để test stripe
Số thẻ: 4000007020000003
CVC: 123
```

## 🛠 Tech Stack

### Frontend

- React.js
- TailwindCSS
- Axios
- React Router Dom
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payment Gateway
- Cloudinary

## ⚙️ Tính năng

### User

- Đăng nhập/Đăng ký
- Xem danh sách sản phẩm
- Lọc sản phẩm theo danh mục
- Thêm/Xóa sản phẩm khỏi giỏ hàng
- Thanh toán (COD, Stripe)
- Xem lịch sử đơn hàng
- Quản lý thông tin cá nhân (chưa hoàn thiện)

### Admin

- Quản lý sản phẩm (Thêm/Sửa/Xóa)
- Quản lý đơn hàng

## 🏃‍♂️ Cách chạy locally

```bash
# Clone repository
git clone [https://github.com/qanh171002/Fullstack-Ecommerce-Store.git]

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run server

# Admin
cd admin
npm install
npm run dev
```

## 🔒 Biến môi trường

### Frontend (.env)

```bash
VITE_BACKEND_URL=your_backend_url
```

### Backend (.env)

```bash
MONGODB_URL=your_mongodb_url
CLOUDINARY_API_KEY =your_cloudinary_api_key
CLOUDINARY_SECRET_KEY =your_cloudinary_secret_key
CLOUDINARY_NAME =your_cloudinary_name
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
ADMIN_EMAIL =your_admin_email
ADMIN_PASSWORD =your_admin_password
```

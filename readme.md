# 🎓 ScholarStream – Scholarship Management Platform

## 📌 Project Overview
**ScholarStream** is a full-stack MERN-based Scholarship Management System designed to connect students with scholarship opportunities. Universities and organizations can post scholarships, students can search and apply for them, moderators can review applications, and admins can manage the entire platform efficiently.

This project simplifies the process of finding financial aid and managing scholarship applications in one centralized system. :contentReference[oaicite:0]{index=0}

---

## 🎯 Purpose of the Project
- Help students easily discover and apply for scholarships
- Allow universities/organizations to post and manage scholarships
- Provide moderators with tools to review applications and give feedback
- Enable admins to manage users, scholarships, and analytics
- Ensure a secure, scalable, and recruiter-friendly full-stack application

---

## 🌐 Live Site
🔗 **Live URL:** 

---

## 📂 GitHub Repositories
- **Client Repository:** https://github.com/buildsbyranbir/scholarstream.git  
- **Server Repository:** https://github.com/buildsbyranbir/scholarstream-server.git

---

## 🧩 Key Features

### 🔐 Authentication & Authorization
- Email & Password login
- Google Social Login
- Firebase Authentication
- Role-based access control (Student / Moderator / Admin)
- Password validation (min length, uppercase, special character)

---

### 🏠 Home Page
- Hero Banner with search button
- Top 6 dynamic scholarships
- Framer Motion animations
- Two extra sections (Testimonials, FAQ / Contact)

---

### 🎓 Scholarships
- View all scholarships in a responsive grid
- Search by scholarship name, university name, or degree
- Filter by category, subject, or country
- Sort by application fee or post date
- Pagination support
- Detailed scholarship view with reviews

---

### 💳 Application & Payment System
- Stripe payment integration
- Checkout page (private route)
- Payment success & failure pages
- Application stored with payment status
- Retry payment option for failed payments

---

### 🧑‍💻 Dashboard (Role Based)

#### 👨‍🎓 Student Dashboard
- My Profile
- My Applications (edit, delete, pay)
- Add, edit & delete reviews
- View application feedback

#### 🧑‍💼 Moderator Dashboard
- Manage applied applications
- Update application status
- Provide feedback
- Moderate and delete reviews

#### 👨‍💻 Admin Dashboard
- Manage users & roles
- Add, update & delete scholarships
- Platform analytics
- Charts (applications, users, fees)

---

### 📊 Analytics
- Total users
- Total scholarships
- Total fees collected
- Charts using visual data representation

---

## 🗄️ Database Collections
- **Users**
- **Scholarships**
- **Applications**
- **Reviews**

---

## 🛠️ Technology Stack

### Frontend
- HTML
- Tailwind CSS
- DaisyUI
- JavaScript
- React
- React Router
- Framer Motion
- TanStack Query

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe API

### Authentication & Hosting
- Firebase Authentication
- Netlify / Vercel (Client)
- Render / Vercel (Server)

---

## 🔐 Environment Variables
All sensitive credentials are secured using environment variables:

### Client (`.env`)
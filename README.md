# CodeCampus 🎓

![React](https://img.shields.io/badge/React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-brightgreen?logo=mongodb)
![Stripe](https://img.shields.io/badge/Stripe-purple?logo=stripe)
![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

**CodeCampus** is a modern Learning Management System (LMS) where users can explore, enroll in, and upload their own courses.

---

## ✨ Features

### 👩‍🎓 User Features

- Sign up / Log in (using **Clerk** authentication)
- Browse and search available courses
- View detailed course information (price, content, ratings, enrollments, duration)
- Preview lectures before purchase
- Enroll in courses and pay using **Stripe** in test mode
- Track course progress
- Rate courses

### 👩‍🏫 Admin Features

- Upload and manage courses
- Track earnings of courses uploaded
- View enrolled students for each course

---

## 🛠️ Local Setup

| Client (Frontend) | Server (Backend) |
| :---------------- | :--------------- |
| cd client         | cd server        |
| yarn              | yarn init        |
| yarn dev          | yarn dev         |

> Ensure **both client and server are running simultaneously**, and all required **environment variables** are properly configured in `.env` files.

---

## 🌐 Deployment

The project is deployed on **Vercel** for fast and reliable hosting.

🔗 **Live Demo:** [https://code-campus-frontend.vercel.app/](https://code-campus-frontend.vercel.app/)

---

## 💳 Test Payment Info

Use the following dummy card to simulate a purchase:

- **Card Number:** `4242 4242 4242 4242`
- **Expiry Date:** `12/40`
- **CVC:** `123`

> Stripe is integrated in test mode.

---

## 📚 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Authentication:** Clerk
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment:** Stripe
- **Deployment:** Vercel

---

## 🚀 Future Improvements

- Live classes and webinars
- Certification after course completion
- Email notifications
- Social sharing of course achievements
- Advanced analytics dashboard for admins

##

> Built with 💙 to empower learners and educators.

# Skill-Hive (Learning Management System)

<div align="center">

<img src="https://raw.githubusercontent.com/yourusername/LMS/main/client/public/vite.svg" alt="LMS Logo" width="120" height="120" style="border-radius: 15px;">

### 🚀 **A Full-Stack MERN Learning Management Platform**

_Connecting learners and educators through seamless technology_

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand navigation</summary>

- [🎯 About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Built With](#️-built-with)
- [🏗️ System Architecture](#️-system-architecture)
- [🚀 Quick Start](#-quick-start)
- [📱 User Experience](#-user-experience)
- [⚡ Admin Dashboard](#-admin-dashboard)
- [🔌 API Reference](#-api-reference)
- [📱 Responsive Design](#-responsive-design)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)

</details>

---

## 🎯 About The Project

<br>

**LMS** is a full-stack learning management system built using the MERN stack (MongoDB, Express.js, React, Node.js). The platform connects students and instructors, enabling seamless course creation, purchase, and progress tracking.

### 🏗️ **Three-Component Architecture**

| Component              | Purpose                                             | Technology Stack            |
| ---------------------- | --------------------------------------------------- | --------------------------- |
| 🎨 **User Frontend**   | Student-facing interface for browsing and learning  | React + Vite                |
| 👨‍💼 **Admin Dashboard** | Course and lecture management for admins            | React                       |
| 🔧 **Backend API**     | Business logic, authentication, and data management | Node.js + Express + MongoDB |

---

## ✨ Key Features

<div align="center">

### 🧑‍🎓 **Student Portal Features**

</div>

<table>
<tr>
<td width="50%">

**🔐 Authentication System**

- User registration and login
- Secure session management

**📚 Course Catalog**

- Browse all available courses
- View course details, curriculum, and instructor info
- Search and filter courses

</td>
<td width="50%">

**💳 Course Purchase**

- Purchase courses securely
- Access purchased content

**📈 Progress Tracking**

- Track course and lecture completion
- Resume learning where you left off

</td>
</tr>
</table>

**💬 Communication**

- Protected routes for enrolled students
- Profile management

<div align="center">

### 👨‍💼 **Admin Dashboard Features**

</div>

<table>
<tr>
<td width="50%">

**📖 Course Management**

- Add new courses with images and descriptions
- Edit existing courses
- Delete courses
- List all courses

**🎬 Lecture Management**

- Add, edit, and delete lectures for each course
- Rich text editor for lecture content

</td>
<td width="50%">

**🧑‍🎓 Student Management**

- View enrolled students
- Access student progress

**🔧 Platform Management**

- Clean, intuitive interface
- Efficient workflow for course and lecture management

</td>
</tr>
</table>

---

## 🛠️ Built With

<div align="center">

### 🎨 **Frontend Technologies**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ⚙️ **Backend Technologies**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### 🚀 **Services & Tools**

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

</div>

---

## 🏗️ System Architecture

### 📁 **Project Structure**


---

## 🚀 Quick Start

### 📋 **Prerequisites**

```bash
Node.js (v16 or newer)
npm or yarn
MongoDB
Git
```

### 🛠️ **Installation Steps**

#### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/LMS.git
cd LMS
```

#### 2️⃣ **Backend Setup**

```bash
cd server
npm install
# Configure your environment variables in a .env file (see below)
npm start
```

#### 3️⃣ **Frontend Setup**

```bash
cd ../client
npm install
npm run dev
```

### 🎉 **Access Your Application**

| Service                | Local URL               | Description           |
| ---------------------- | ----------------------- | --------------------- |
| 🎨 **User Frontend**   | `http://localhost:5173` | Student interface     |
| 🔧 **Backend API**     | `http://localhost:5000` | RESTful API server    |

---

## ⚙️ Environment Variables

Create a `.env` file in the `server/` directory with the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 📱 User Experience

### 🏠 **User Journey**

<table>
<tr>
<td width="25%">

**🎯 Homepage**

- Course categories display
- Featured courses

</td>
<td width="25%">

**📚 Course Browsing**

- Filter by category
- View course details
- Enroll in courses

</td>
<td width="25%">

**🛒 Course Purchase**

- Secure checkout
- Access purchased courses

</td>
<td width="25%">

**📈 Progress Tracking**

- Track completed lectures
- Resume learning

</td>
</tr>
</table>

---

## ⚡ Admin Dashboard

### 🎛️ **Admin Capabilities**

<table>
<tr>
<td width="33%">

**📖 Course Management**

- Add, edit, delete courses
- Upload course images

</td>
<td width="33%">

**🎬 Lecture Management**

- Add, edit, delete lectures
- Rich text content

</td>
<td width="33%">

**🧑‍🎓 Student Management**

- View enrolled students
- Track student progress

</td>
</tr>
</table>

---

## 🔌 API Reference

### 🛡️ **Authentication Endpoints**

| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| `POST` | `/api/auth/register`   | Register new user     |
| `POST` | `/api/auth/login`      | User login            |

### 📚 **Course Endpoints**

| Method | Endpoint         | Description                |
| ------ | ----------------| -------------------------- |
| `GET`  | `/api/courses`  | Get all courses            |
| `GET`  | `/api/courses/:id` | Get course details      |
| `POST` | `/api/courses`  | Add new course (admin)     |
| `PUT`  | `/api/courses/:id` | Edit course (admin)     |
| `DELETE`| `/api/courses/:id`| Delete course (admin)   |

### 🎬 **Lecture Endpoints**

| Method | Endpoint         | Description                |
| ------ | ----------------| -------------------------- |
| `POST` | `/api/lectures` | Add lecture (admin)        |
| `PUT`  | `/api/lectures/:id` | Edit lecture (admin)   |
| `DELETE`| `/api/lectures/:id`| Delete lecture (admin) |

### 🛒 **Purchase Endpoints**

| Method | Endpoint         | Description           |
| ------ | ----------------| --------------------- |
| `POST` | `/api/purchase` | Purchase a course     |
| `GET`  | `/api/purchase` | Get user's purchases  |

### 📈 **Progress Endpoints**

| Method | Endpoint         | Description                     |
| ------ | ----------------| ------------------------------- |
| `GET`  | `/api/progress/:courseId` | Get course progress   |
| `POST` | `/api/progress/:courseId/lecture/:lectureId` | Mark lecture as completed |

### 👤 **User Endpoints**

| Method | Endpoint         | Description         |
| ------ | ----------------| ------------------- |
| `GET`  | `/api/user/profile` | Get user profile |
| `PUT`  | `/api/user/profile` | Update profile   |

---

## 📱 Responsive Design

- Flexible grid layouts
- Touch-friendly controls
- Responsive images
- Collapsible navigation menu
- Media queries for all breakpoints

---

## 🗺️ Roadmap

### ✅ **Completed Features**

- [x] User authentication
- [x] Course catalog and details
- [x] Course purchase and access
- [x] Progress tracking
- [x] Admin dashboard for course/lecture management
- [x] Responsive design
- [x] Profile management

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

<div align="center">

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-yourusername-181717?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![Project](https://img.shields.io/badge/Project-LMS-FF6B6B?style=for-the-badge&logo=github)](https://github.com/yourusername/LMS)

</div>

---

## 🙏 Acknowledgments

- **[React](https://react.dev/)**
- **[Redux Toolkit](https://redux-toolkit.js.org/)**
- **[Vite](https://vitejs.dev/)**
- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Cloudinary](https://cloudinary.com/)**

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

**Made with ❤️ by [Jeel Boghra](https://github.com/jeel8003)**

</div>

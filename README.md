# 🎓 LMS - Full-Stack Learning Management System

 <!-- Replace with a link to your own project banner -->

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 📖 Overview

This is a feature-rich, full-stack Learning Management System (LMS) built from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js)[2]. The platform is designed to provide a seamless online learning experience, allowing students to browse, purchase, and track their progress in various courses, while instructors can create, manage, and publish their own content[2].

This project demonstrates a complete end-to-end development cycle, from backend API creation to a dynamic, responsive frontend user interface[6]. It was developed to solidify full-stack development skills and serve as a comprehensive portfolio piece[2][7].

## ✨ Key Features

This application includes a wide array of features for different user roles[2]:

**👨‍🎓 For Students:**
*   **Authentication**: Secure user registration and login functionality.
*   **Course Discovery**: Browse, search, and filter through a catalog of available courses.
*   **Course Details**: View detailed information for each course, including content, instructor, and price.
*   **Payment Integration**: Securely purchase courses using Stripe integration.
*   **My Learning Dashboard**: Access all purchased courses and track learning progress.
*   **Course Progression**: Watch lectures, and mark them as complete/incomplete.
*   **Protected Routes**: Non-purchased course content is locked and inaccessible.
*   **User Profile**: View and update personal profile information and avatar.

**👨‍🏫 For Instructors/Admins:**
*   **Admin Dashboard**: A comprehensive dashboard showing total revenue and enrollment analytics with graphical representation.
*   **Course Management**: Create, edit, and delete courses.
*   **Content Uploads**: Add, update, and remove video lectures for each course, with media files hosted on Cloudinary.
*   **Publishing Control**: Publish or un-publish courses, making them live or keeping them as drafts. Draft courses are not visible to students.
*   **Role-Based Access**: Distinct functionalities and views for instructor and student roles.

**💻 Technical Features:**
*   **State Management**: Efficient and predictable state management using Redux Toolkit (RTK Query) for API data caching[2][7].
*   **Responsive Design**: A fully responsive UI that works seamlessly on desktop and mobile devices.
*   **UI/UX**: Modern and user-friendly interface with features like loading skeletons (shimmer UI) and a light/dark mode toggle[2].
*   **Rich Text Editor**: A rich text editor for creating detailed course descriptions.

## 📸 Screenshots

<!-- IMPORTANT: Add screenshots of your application here. Visuals are critical for a portfolio project. -->
**Landing Page (Dark Mode)**


**Course Dashboard (Light Mode)**


**Course Progress Page**


## 🛠️ Tech Stack & Tools

The project leverages a modern tech stack for building robust and scalable web applications[1][2]:

| Category      | Technology                                                                                                  |
|---------------|-------------------------------------------------------------------------------------------------------------|
| **Frontend**  | React.js, Redux Toolkit, React Router DOM, Tailwind CSS, Shadcn UI                                          |
| **Backend**   | Node.js, Express.js                                                                                         |
| **Database**  | MongoDB                                                                                                     |
| **APIs**      | RESTful API                                                                                                 |
| **DevOps**    | Cloudinary (for Media Storage), Stripe (for Payments)                                                       |
| **Languages** | JavaScript, CSS, HTML                                                                                       |

## ⚙️ Project Architecture

The application follows a standard client-server architecture, with the frontend and backend decoupled for better maintainability and scalability[1].



## 🚀 Local Development Setup

To get a local copy up and running, please follow these simple steps.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn
*   MongoDB (local instance or a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```
    git clone https://github.com/jeel8003/LMS.git
    cd LMS
    ```

2.  **Set up the Backend:**
    ```
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the following environment variables. Use the `.env.example` as a guide.
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_API_KEY=your_stripe_api_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

3.  **Set up the Frontend:**
    ```
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory and add the backend server URL:
    ```
    VITE_SERVER_URL=http://localhost:5000
    ```

### Usage

1.  **Start the Backend Server:**
    Navigate to the `server` directory and run:
    ```
    npm start
    ```

2.  **Start the Frontend Development Server:**
    In a new terminal, navigate to the `client` directory and run:
    ```
    npm run dev
    ```

Open your browser and go to `http://localhost:5173` to see the application live.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.




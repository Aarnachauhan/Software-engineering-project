# 🏫 Hostel Complaint Management System

A full-stack web application that enables hostel students to raise complaints and allows administrators to efficiently manage, track, and resolve them through a centralized dashboard.

# 📁 Project Structure
Software-engineering-project/
│
├── admin/        → Admin Panel (React + Vite)
├── backend/      → Backend (Node.js + Express)
├── frontend/     → Student Panel (React + Vite)
├── ml_api/       → ML API 
└── README.md

# 🚀 Tech Stack
# 🎨 Frontend

React

Vite

Axios

React Router

React Toastify

# ⚙️ Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Axios

# 🤖 ML API

Python



# ✅ Prerequisites

Ensure the following are installed on your system:

Node.js (v18+ recommended)
https://nodejs.org/

npm (comes with Node.js)

MongoDB (local or MongoDB Atlas)

Python (for ML API)

Verify installations:

node -v
npm -v
python --version

# 🔧 Backend Setup

📌 Open a new terminal / command prompt

1️⃣ Navigate to backend folder
cd backend

2️⃣ Install dependencies
npm install


⚠️ If you get an error related to axios:

npm install axios

3️⃣ Start backend server
node server.js


# ✅ Expected output:

Server started on port 4000
MongoDB connected

# 🧑‍🎓 Frontend Setup (Student Panel)

📌 Open a new terminal / command prompt

1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start frontend dev server
npm run dev


✅ Runs on:

http://localhost:5173

# 🧑‍💼 Admin Panel Setup

📌 Open a new terminal / command prompt

1️⃣ Navigate to admin folder
cd admin

2️⃣ Install dependencies
npm install

3️⃣ Start admin panel
npm run dev


✅ Admin panel runs on:

http://localhost:5174

# 🤖 ML API Setup 

📌 Open a new terminal

1️⃣ Navigate to ML API folder
cd ml_api

2️⃣ Activate virtual environment
venv\Scripts\activate

3️⃣ Start ML API server
python app.py

# ✅ Final Checklist (Follow This Always)

Whenever you clone the repository:

cd admin
npm install
npm run dev

cd ../frontend
npm install
npm run dev

cd ../backend
npm install
node server.js

cd ml_api
venv\Scripts\activate
python app.py

# ❗ Common Issues & Fixes
❌ 'vite' is not recognized

👉 Run:

npm install


inside the respective frontend/admin folder.

# ❌ Cannot find package 'axios'

👉 Run:

npm install axios


inside the backend folder.

# ❌ 401 Unauthorized

Ensure admin is logged in

JWT token exists in localStorage

Token is being sent in request headers


# ✨ Author

Aarna Chauhan
Computer Science Engineering, NIT Patna

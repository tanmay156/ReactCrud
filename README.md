# React CRUD Application with JSON Server

This is a simple React-based CRUD (Create, Read, Update, Delete) application that uses **JSON Server** as a backend. The application allows users to manage a list of users by performing CRUD operations.

## 🚀 Features

- **Add new users** with details like name, email, and phone number
- **Update** existing user information
- **Delete** users from the list
- **View** all users in a tabular format

## 🛠 Tech Stack

- **Frontend:** React 18.3.1, React Router, React Bootstrap
- **Backend:** JSON Server (Mock API)
- **API Communication:** Axios (for HTTP requests)
- **Styling:** Bootstrap for responsive design

## 🔧 How to Run the Project

### 1️⃣ Clone the Repository
```sh
 git clone <repository-url>
 cd <project-directory>
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Start JSON Server (Backend)
```sh
 json-server --watch db.json --port 3000
```
This will start the mock backend at `http://localhost:3000/users`.

### 4️⃣ Start React Frontend
```sh
 npm run dev
```
The frontend will be available at `http://localhost:5173`.

## 📦 Dependencies to Install

Run the following command in the terminal to install all required dependencies:

```sh
npm install axios bootstrap react-bootstrap react-router-dom json-server
```

Or install them individually:

```sh
npm install axios  # For making requests
npm install bootstrap  # For styling using Bootstrap
npm install react-bootstrap  # React components for Bootstrap
npm install react-router-dom  # For handling routing/navigation
npm install json-server  # For setting up a mock REST API
```

## 📌 Author

- **Tanmay Jadhav**

Feel free to contribute! 🚀


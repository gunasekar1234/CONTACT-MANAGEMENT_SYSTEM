Contact Management System (MERN Stack)

A simple Contact Management System built using the MERN Stack (MongoDB, Express, React, Node.js). This app allows users to add, view, update, and delete contacts with features like categorizing contact status and tracking interactions.

Features

Add new contacts with name, email, phone, and company.

Track contact status: Interested, Follow-up, or Closed.

View a list of all contacts.

Delete or update contacts.

Responsive React frontend with modern UI.

Backend API using Node.js + Express.

Data storage in MongoDB.

Persistent data with Mongoose schemas.

Tech Stack

Layer Technology

Frontend React.js, CSS

Backend Node.js, Express.js

Database MongoDB (Atlas or local)

ORM / ODM Mongoose

Dev Tools VS Code, Postman (for testing API)

Folder Structure

contact-management/ │ ├─ backend/ │ ├─ models/ # Mongoose schemas (Contact.js) │ ├─ routes/ # Express routes (contactRoutes.js) │ ├─ server.js # Main server file │ └─ .env # Environment variables (MONGODB_URI) │ ├─ frontend/ │ ├─ src/ │ │ ├─ components/ # React components │ │ ├─ App.jsx # Main app component │ │ └─ index.jsx # React entry point │ └─ package.json # React dependencies │ └─ README.md # Project documentation Installation & Setup

Backend

Go to the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file:

MONGODB_URI=your_mongodb_connection_string

PORT=5000

Start the backend server:

npm run dev

Backend API will run at http://localhost:5000.

Frontend

Go to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontend app:

npm start

React app will run at http://localhost:3000.

API Endpoints

Method Endpoint Description

GET /contact Get all contacts

POST /contact Add a new contact

GET /contact/:id Get a single contact

PUT /contact/:id Update a contact

DELETE /contact/:id Delete a contact

Example Contact Schema { name: "John Doe", email: "john@example.com", phone: "1234567890", company: "ABC Corp", status: "Interested", // Options: Interested, Follow-up, Closed createdAt: Date } Screenshots

(You can add screenshots of your React UI here)

License MIT License © 2026

Name Gunasekar M

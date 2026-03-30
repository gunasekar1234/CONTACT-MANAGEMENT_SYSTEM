// Import required packages
import express from 'express';         // Express framework for building REST APIs
import mongoose from 'mongoose';       // Mongoose ODM to interact with MongoDB
import cors from 'cors';               // CORS middleware to allow cross-origin requests
import dotenv from 'dotenv';           // dotenv to load environment variables
import contactRoutes from './routes/contactroutes.js'; // Contact API routes

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware

app.use(cors());            // Enable CORS for all routes
app.use(express.json());    // Parse incoming JSON requests automatically

// Route handling
// All requests to '/contact' will be handled by contactRoutes
app.use('/contact', contactRoutes);

// Connect to MongoDB using the URI stored in environment variables
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');    
    
    // Start the server only after successful DB connection
    app.listen(5000, () => console.log('Server is running on port 5000'));
})
.catch((error) => console.log('MongoDB connection error:', error));
// Import necessary modules
import { MongoCryptCreateDataKeyError } from 'mongodb'; // Not used in schema, may remove if unnecessary
import mongoose from 'mongoose';

// Define the Contact schema
// Each contact will represent a person/company entry in the database
const contactSchema = new mongoose.Schema({
    // Name of the contact (required field)
    name: {
        type: String,
        required: true, // Validation: Name is mandatory
    },

    // Email of the contact (optional)
    email: String,

    // Phone number of the contact (optional)
    phone: String,

    // Company associated with the contact (optional)
    company: String,

    // Status of the contact
    status: {
        type: String,
        enum: ["Interested", "Follow-up", "closed"], // Allowed values only
        default: "Interested" // Default status if not provided
    },

    // Timestamp when the contact was created
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets to current date/time
    }
});

// Export the Contact model
// This allows CRUD operations on the 'contacts' collection in MongoDB
export default mongoose.model('Contact', contactSchema);
        
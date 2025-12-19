import mongoose from 'mongoose';

const contactRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  message: { type: String },
  timestamp: { type: Date, default: Date.now }
});

const ContactRequest = mongoose.model('ContactRequest', contactRequestSchema);
export default ContactRequest;

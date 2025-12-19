import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import AccessLog from './models/AccessLog.js';
import ContactRequest from './models/ContactRequest.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/access-log', async (req, res) => {
  const { serial, timestamp } = req.body;
  try {
    const log = new AccessLog({ serial, timestamp });
    await log.save();
    res.status(201).json({ message: 'Access logged successfully.' });
  } catch (error) {
    console.error('Log save failed:', error);
    res.status(500).json({ error: 'Logging failed.' });
  }
});
app.post('/api/contact-request', async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
      const request = new ContactRequest({ name, email, phone, message });
      await request.save();
      res.status(201).json({ message: 'Request submitted successfully.' });
    } catch (error) {
      console.error('Contact request failed:', error);
      res.status(500).json({ error: 'Failed to save contact request.' });
    }
  });
  

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));

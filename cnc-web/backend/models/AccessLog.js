import mongoose from 'mongoose';

const accessLogSchema = new mongoose.Schema({
  serial: { type: String, required: true },
  timestamp: { type: Date, required: true }
});

export default mongoose.model('AccessLog', accessLogSchema);

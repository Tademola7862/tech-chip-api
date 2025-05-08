import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
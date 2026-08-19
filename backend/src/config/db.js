import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectDB = async () => {
    try {
        dotenv.config();
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
        process.exit(1);
    }
};
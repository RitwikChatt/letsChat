import express from 'express';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

const app = express();

dotenv.config();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  res.status(400).json({message: "Route not found"});
});

app.use(errorHandler);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
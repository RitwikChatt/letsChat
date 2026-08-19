import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import {connectDB} from './config/db.js';
import User from './models/user.model.js';

configDotenv();

const seedData = async () => {
    try {
        await connectDB();

        const users = await User.create([
           {username: "Aisha", email: "aisha@test.com", password: "temp123"},
           {username: "Rahul", email: "rahul@test.com", password: "temp123"},
           {username: "Sara", email: "sara@test.com", password: "temp123"},
           {username: "Ritwik", email: "ritwik@test.com", password: "temp123"}
        ]);
        console.log(`Seeded ${users.length} users successfully.`);
    } catch(error) {
        console.log("Error seeding data:", error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
};

seedData();
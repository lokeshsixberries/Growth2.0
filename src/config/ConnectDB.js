
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = `mongodb+srv://sharma.lokesh.222001@gmail.com:veera@9895@growthapp.2hi59s1.mongodb.net/Growth`;
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;

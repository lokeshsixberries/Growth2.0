
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = `mongodb://localhost:27017/Growth`;
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;

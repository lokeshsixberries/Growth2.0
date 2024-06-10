import express from "express";
import app from "./src/app.js";
import errorHandler from "./src/middleware/errorMiddleware.js";
import connectDB from "./src/config/ConnectDB.js";
import bodyParser from "body-parser";

// Connect to the database
connectDB();

// Applying error handling middleware
app.use(errorHandler);


// Start the server
const PORT = 4000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

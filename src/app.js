const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./utils/logger");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});

// Task routes
app.use("",taskRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Central error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    logger.error(err.message, {
        statusCode
    });

    res.status(statusCode).json({
        success: false,
        message: statusCode === 500
            ? "Internal server error"
            : err.message
    });
});

module.exports = app;
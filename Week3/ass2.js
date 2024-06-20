const express = require("express");
const app = express();
const requestTimes = [];

// Middleware to log request start time
app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});

// Middleware to log request end time and calculate duration
app.use((req, res, next) => {
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - req.startTime;
        requestTimes.push(duration);
    });
    next();
});

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        msg: "Assignment Number 2"
    });
});

// Endpoint to get average request handling time
app.get("/time-taken", (req, res) => {
    if (requestTimes.length === 0) {
        return res.json({ average_time: null });
    }
    const averageTime = requestTimes.reduce((a, b) => a + b, 0) / requestTimes.length;
    res.json({ average_time: averageTime });
});

app.listen(8000)

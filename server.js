const express = require("express");
const dotenv = require("dotenv");

//LOAD env vars
dotenv.config({path: "./config/config.env"});

const PORT = process.env.PORT || 27324;

const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
    res.status(200).json({success: true, msg: "Show all bootcamps"});
});

app.get("/api/v1/bootamps/:id", (req, res) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
})

app.post("/api/v1/bootamps", (req, res) => {
    res.status(200).json({success: true, msg: "Create new bootcamp"});
})

app.put("/api/v1/bootamps/:id", (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
})

app.delete("/api/v1/bootamps/:id", (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
})

app.listen(PORT, () => {
console.log(`Server runing in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})
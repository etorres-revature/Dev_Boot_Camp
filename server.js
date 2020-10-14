const express = require("express");
const dotenv = require("dotenv");

//Route files
const bootcamps = require("./routes/bootcamps")

//LOAD env vars
dotenv.config({path: "./config/config.env"});

const PORT = process.env.PORT || 27324;

const app = express();

//Mount routers 
app.use("/api/v1/bootcamps", bootcamps);

app.listen(PORT, () => {
console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})
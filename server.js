const express = require("express");
const dotenv = require("dotenv");

//Route files
const bootcamps = require("./routes/bootcamps")

//LOAD env vars
dotenv.config({path: "./config/config.env"});

const PORT = process.env.PORT || 27324;

const app = express();

const logger = (req, res, next) => {
    console.log(`The method was: ${req.method} and the URL was: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

app.use(logger);
//Mount routers 
app.use("/api/v1/bootcamps", bootcamps);

app.listen(PORT, () => {
console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
})
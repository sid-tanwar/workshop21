require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_URI).then(() => console.log("DATABASE IS CONNECTED!"));

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {

    res.send("API IS RUNNING SUCCESFULLY!");
})
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`SERVER RUNNING ON PORT ${port}`));

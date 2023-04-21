const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to MongoDB! Idk How")
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/",(req,res)=>{
    res.send("API is running");
});

// app.get("/users",(req,res)=>{
//     res.send("Welcome to User page")
// })

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Backend server running at port 5000");
});

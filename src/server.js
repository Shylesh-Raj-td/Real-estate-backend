require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDB();

app.use("/auth", authRoutes);
app.use("/properties", propertyRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));

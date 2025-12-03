const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => console.log("Server is running on port 5000"));

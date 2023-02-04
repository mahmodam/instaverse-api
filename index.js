const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

const Posts = require("./routes/posts");
const User = require("./routes/users");

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

app.use(express.json({ limit: "50mb", extended: true }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

//app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.use("/api/posts", Posts);

app.use("/api/user", User);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

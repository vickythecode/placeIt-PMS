require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const { auth, checkRole } = require("./middleware/auth");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const driveRoutes = require("./routes/driveRoutes");
const notifyRoutes = require("./routes/notifyRoute");
const applicationRoutes = require("./routes/applicationRoutes");
const studendRoutes = require("./routes/studentRoutes");

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> Api Chal Raha Hai </h1>");
});
// Routes
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/colleges", collegeRoutes);
app.use("/api/drives", driveRoutes);
app.use("/api/notifications",notifyRoutes);
app.use("/api/applications",applicationRoutes);
app.use("/api/students",studendRoutes);



app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

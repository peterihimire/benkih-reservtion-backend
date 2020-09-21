const express = require("express");
const bodyParser = require("body-parser");

const roomsRoutes = require("./routes/rooms-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();

// => /api/rooms/
app.use("/api/rooms", roomsRoutes);

// => /api/rooms/
app.use("/api/admin/rooms", adminRoutes);

// Error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

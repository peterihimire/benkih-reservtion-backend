const express = require("express");
const bodyParser = require("body-parser");

const roomsRoutes = require("./routes/rooms-routes");
const adminRoutes = require("./routes/admin-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

// => /api/rooms/
app.use("/api/rooms", roomsRoutes);

// => /api/admin/rooms/
app.use("/api/admin/rooms", adminRoutes);

// Error handling for unregistered routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route!", 404);
  throw error;
});

// Error handling middleware
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

const express = require("express");

const router = express.Router();

const DUMMY_ROOMS = [
  {
    id: "r1",
    name: "single economy",
    slug: "single-economy",
    type: "single",
    price: 100,
    size: 200,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "This is the description of this room one , which is a single economy.",
    extras: [
      "Plush pillows and breathable bed",
      "Full-sized, pH-balanced toiletries",
      "internet",
    ],
  },
  {
    id: "r2",
    name: "double economy",
    slug: "double-economy",
    type: "single",
    price: 200,
    size: 400,
    capacity: 2,
    pets: true,
    breakfast: false,
    featured: true,
    description:
      "This is the description of this room two , which is a double economy.",
    extras: [
      "Plush pillows and breathable bed",
      "Full-sized, pH-balanced toiletries",
      "internet",
      "free breakfast",
    ],
  },
];

router.get("/", (req, res, next) => {
  console.log("Get the room request");
  res.json({ rooms: DUMMY_ROOMS });
});

router.get("/:rid", (req, res, next) => {
  const roomId = req.params.rid;
  const room = DUMMY_ROOMS.find((r) => {
    return r.id === roomId;
  });
  if (!room) {
    const error = new Error("Could not find a room for the provided id.");
    error.code = 404;
    throw error; // used for synchronous code
  }

  res.json({ room }); // { room } => {room : room}
});

module.exports = router;

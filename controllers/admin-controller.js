const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

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

const getRooms = (req, res, next) => {
  console.log("Get the room request");
  res.json({ rooms: DUMMY_ROOMS });
};

const getRoomsById = (req, res, next) => {
  const roomId = req.params.rid;
  const room = DUMMY_ROOMS.find((r) => {
    return r.id === roomId;
  });

  // // Using the express error middleware
  // if (!room) {
  //   const error = new Error("Could not find a room for the provided id.");
  //   error.code = 404;
  //   throw error; // used for synchronous code
  // }

  // Using the HttpError model
  if (!room) {
    throw new HttpError("Could not find a room for the provided id lol.", 404);
  }

  res.json({ room }); // { room } => {room : room}
};
// function getRooms(){...}
// const getRooms = function(){...}

const createRoom = (req, res, next) => {
  const {
    name,
    slug,
    type,
    price,
    size,
    capacity,
    pets,
    breakfast,
    featured,
    description,
    extras,
  } = req.body;
  // const name = req.body.name;

  const createdRoom = {
    id: uuidv4(),
    name,
    slug,
    type,
    price,
    size,
    capacity,
    pets,
    breakfast,
    featured,
    description,
    extras,
  };

  DUMMY_ROOMS.push(createdRoom);

  res.status(201).json({ room: createdRoom });
};
const updateRoomById = (req, res, next) => {
  const roomId = req.params.rid;

  const room = DUMMY_ROOMS.find((r) => {
    r.id === roomId;
  });
};

const deleteRoomById = (req, res, next) => {
  const roomId = req.params.rid;

  const room = DUMMY_ROOMS.filter((r) => {
    return r.id !== roomId;
  });
  res.status(200);
  res.json({ message: "Room successfully deleted." });
};

exports.getRooms = getRooms;
exports.getRoomsById = getRoomsById;
exports.createRoom = createRoom;
exports.updateRoomById = updateRoomById;
exports.deleteRoomById = deleteRoomById;

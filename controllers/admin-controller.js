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

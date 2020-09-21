const express = require("express");

const adminControllers = require("../controllers/admin-controller");

const router = express.Router();

router.get("/rooms", adminControllers.getRooms);

router.get("/rooms/:rid", adminControllers.getRoomsById);

router.post("/rooms", adminControllers.createRoom);

router.patch("/rooms/:rid", adminControllers.updateRoomById);

router.delete("/rooms/:rid", adminControllers.deleteRoomById);

router.get("/users", adminControllers.getUsers);

// router.get("/users/:uid", adminControllers.getUser);

module.exports = router;

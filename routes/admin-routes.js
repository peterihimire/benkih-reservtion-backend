const express = require("express");

const adminControllers = require("../controllers/admin-controller");

const router = express.Router();

router.get("/", adminControllers.getRooms);

router.get("/:rid", adminControllers.getRoomsById);

router.post("/", adminControllers.createRoom);

router.patch("/:rid", adminControllers.updateRoomById);

router.delete("/:rid", adminControllers.deleteRoomById);

module.exports = router;

const express = require("express");

const adminControllers = require("../controllers/admin-controller");

const router = express.Router();

router.get("/", adminControllers.getRooms);

router.get("/:rid", adminControllers.getRoomsById);

module.exports = router;

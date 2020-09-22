const express = require("express");
const { check } = require("express-validator");

const adminControllers = require("../controllers/admin-controller");

const router = express.Router();

router.get("/rooms", adminControllers.getRooms);

router.get("/rooms/:rid", adminControllers.getRoomsById);

router.post(
  "/rooms",
  [
    check("name").not().isEmpty(),
    check("slug").not().isEmpty(),
    check("type").not().isEmpty(),
    check("price").isNumeric(),
    check("size").isNumeric(),
    check("capacity").isNumeric(),
    check("pets").isBoolean(),
    check("breakfast").isBoolean(),
    check("featured").isBoolean(),
    check("description").isLength({ min: 5 }),
    check("extras").isArray(),
  ],
  adminControllers.createRoom
);

router.patch(
  "/rooms/:rid",
  [
    check("name").not().isEmpty(),
    check("slug").not().isEmpty(),
    check("type").not().isEmpty(),
    check("price").isNumeric(),
    check("size").isNumeric(),
    check("capacity").isNumeric(),
    check("pets").isBoolean(),
    check("breakfast").isBoolean(),
    check("featured").isBoolean(),
    check("description").isLength({ min: 5 }),
    check("extras").isArray(),
  ],
  adminControllers.updateRoomById
);

router.delete("/rooms/:rid", adminControllers.deleteRoomById);

router.get("/users", adminControllers.getUsers);

// router.get("/users/:uid", adminControllers.getUser);

module.exports = router;

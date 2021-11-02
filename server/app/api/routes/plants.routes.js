const express = require("express");
const router = express.Router();

const { createPlants, getAllCharacter, getPlantsById } = require("../controllers/plants.controller");

router.post("/create", createPlants );
router.get("/", getAllCharacter);
router.get("/:PlantsId", getPlantsById);

module.exports = router;
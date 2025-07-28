const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const {sendReservation,getReservations,deleteReservation} = require("../controllers/reservation");

// POST /api/reservation
router.post("/send", sendReservation);

// GET /api/reservation
router.get("/get", getReservations);

// DELETE /api/reservation/:id
router.delete("/delete/:id", deleteReservation);






module.exports = router;



const express = require("express");
const router = new express.Router();
const ReservationController = require('../../controller/ReservationController');

router.post("/createreservationsalle",ReservationController.CreateReservation);
router.post("/getreservation",ReservationController.GetReservationSalle);//inscription

module.exports = router;  
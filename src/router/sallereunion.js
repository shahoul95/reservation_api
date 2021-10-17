const express = require("express");
const router = new express.Router();
const SallleReunionControllers = require('../../controller/SallleReunionController');

router.post("/createsallereunion",SallleReunionControllers.CreateSalleReunion);//inscription

module.exports = router;  
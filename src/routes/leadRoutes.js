const express = require("express");
const router = express.Router();
const { postLead } = require("../controllers/leadController");

router.post("/lead", postLead); // Public route

module.exports = router;

const express = require("express");
const router = express.Router();
const { postLead, getLeads } = require("../controllers/leadController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/lead", postLead);
router.get("/get-all-leads", getLeads);

module.exports = router;

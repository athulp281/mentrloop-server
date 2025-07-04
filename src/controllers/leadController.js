const { Lead } = require("../models");

exports.postLead = async (req, res) => {
  try {
    const { name, phone, whatsapp, email, course } = req.body;
    const lead = await Lead.create({ name, phone, whatsapp, email, course });
    res.status(201).json({ message: "success", lead });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.status(200).json({ message: "success", leads });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

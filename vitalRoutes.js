// const express = require("express");
// const Vital = require("../models/Vital");
// const router = express.Router();

// router.post("/vitals", async (req, res) => {
//   const vital = new Vital(req.body);
//   await vital.save();

//   let alert = null;
//   if (req.body.heartRate > 100) {
//     alert = "High heart rate detected!";
//   }

//   res.json({ message: "Vitals saved", alert });
// });

// module.exports = router;
function calculateRisk(v) {
  if (v.heartRate > 110 || v.spo2 < 92 || v.temperature > 38)
    return "HIGH";
  if (v.heartRate > 95 || v.spo2 < 95)
    return "MEDIUM";
  return "LOW";
}

router.post("/vitals", async (req, res) => {
  const risk = calculateRisk(req.body);

  const vital = new Vital({ ...req.body, risk });
  await vital.save();

  res.json({
    message: "Vitals processed",
    risk,
    alert: risk === "HIGH" ? "Immediate attention required" : null
  });
});

router.get("/vitals", async (req, res) => {
  const vitals = await Vital.find().sort({ timestamp: -1 });
  res.json(vitals);
});

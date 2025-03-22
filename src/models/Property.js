const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  price: { type: String, required: true, min: 100, max: 100000 },
  transactionType: { type: String, enum: ["Sale", "Rent"], required: true },
  propertyType: { type: String, enum: ["Apartment", "Land"], required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", PropertySchema);

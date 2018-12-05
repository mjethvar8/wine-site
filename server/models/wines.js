const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WinesSchema = new Schema({
  name: { type: String },
  lastOpened: { type: String },
  yearMade: { type: Number },
  datePurchased: { type: String },
  notes: { type: String },
  wineType: { type: String },
  price: { type: Number },
  owned: { type: Boolean }
});

mongoose.model("wine", WinesSchema);

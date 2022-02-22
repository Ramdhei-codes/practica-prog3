const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  bank_account: {
    type: String,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    zip_code: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("user", userSchema);

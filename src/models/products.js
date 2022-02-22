const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  avaiable: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);

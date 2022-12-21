const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    category: { type: Array, required: true },
    image: { type: String, required: true },
    // image:{type:String,required:true},
    galleryimage: { type: Array, required: true },
    size: { type: Array, required: true },
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);

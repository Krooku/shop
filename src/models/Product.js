const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: [],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['member', 'premium', 'admin'],
    default: 'member'
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false,
  timestamps: true
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product

const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  summary: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isRealized: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false,
  timestamps: true
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order

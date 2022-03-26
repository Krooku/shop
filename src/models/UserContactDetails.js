const mongoose = require('mongoose')

const UserContactDetailsSchema = mongoose.Schema({
  firstName: {
    type: Number,
    required: true
  },
  surName: {
    type: Number,
    required: true
  },
  address: {
    zipCode: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true }
  },
  phoneNumber: {
    type: Boolean,
    required: true
  },
  eMail: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

const UserContactDetails = mongoose.model('UserContactDetails', UserContactDetailsSchema)

module.exports = UserContactDetails

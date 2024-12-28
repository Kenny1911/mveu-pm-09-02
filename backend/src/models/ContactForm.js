const { Schema, model } = require('mongoose')

const ContactForm = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Schema.Types.Date,
  },
})

module.exports = {
  ContactForm: model('ContactForm', ContactForm),
}
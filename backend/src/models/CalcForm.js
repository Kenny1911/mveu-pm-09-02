const { Schema, model } = require('mongoose')

const Item = new Schema({
  title: {
    type: String,
    required: true
  },
  sum: {
    type: Number,
    required: true,
  }
})

const CalcForm = new Schema({
  items: [Item],
  sum: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Schema.Types.Date,
  },
})

module.exports = {
  CalcForm: model('CalcForm', CalcForm),
}

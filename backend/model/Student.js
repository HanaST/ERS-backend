const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Student = new Schema({
  candidate_name: {
    type: String
  },
  candidate_email: {
    type: String
  },
  phone_no: {
    type: String
  },
  education: {
    type: Array
  },
  qualification: {
    type: String
  },
  certification: {
    type: String
  },
  skills: {
    type: String
  },
  experience: {
    type: String
  },
  work_history: {
    type: String
  }
}, {
  collection: 'resumes'
})

module.exports = mongoose.model('Student', Student)
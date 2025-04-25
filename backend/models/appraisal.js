const mongoose = require('mongoose');

const AppraisalSchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  qualification: String,
  experience: Number,
  academicYear: String,
  teaching: [
    {
      courseCode: String,
      courseTitle: String,
      ugpg: String,
      semester: String,
      students: Number,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Appraisal', AppraisalSchema);

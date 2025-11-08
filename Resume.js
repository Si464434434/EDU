const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  summary: {
    type: String
  },
  education: [{
    degree: String,
    institution: String,
    year: String,
    grade: String
  }],
  experience: [{
    title: String,
    company: String,
    duration: String,
    description: String
  }],
  skills: [{
    type: String
  }],
  projects: [{
    name: String,
    description: String,
    technologies: String,
    link: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    date: String
  }],
  template: {
    type: String,
    default: 'professional'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ResumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Resume', ResumeSchema);

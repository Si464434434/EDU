const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  opportunity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Opportunity',
    required: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Shortlisted', 'Interview', 'Selected', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String
  },
  resume: {
    type: String
  },
  coverLetter: {
    type: String
  },
  timeline: [{
    status: String,
    date: Date,
    notes: String
  }]
});

// Add initial timeline entry on creation
ApplicationSchema.pre('save', function(next) {
  if (this.isNew) {
    this.timeline.push({
      status: 'Applied',
      date: this.appliedDate,
      notes: 'Application submitted'
    });
  }
  next();
});

module.exports = mongoose.model('Application', ApplicationSchema);

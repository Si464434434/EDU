const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Please provide a type'],
    enum: ['Internship', 'Scholarship', 'Hackathon', 'Competition']
  },
  company: {
    type: String,
    required: [true, 'Please provide a company/organization name']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  requirements: {
    type: String
  },
  eligibility: {
    type: String
  },
  stream: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  stipend: {
    type: String
  },
  duration: {
    type: String
  },
  deadline: {
    type: Date,
    required: [true, 'Please provide a deadline']
  },
  applyLink: {
    type: String
  },
  tags: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applicationsCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for search
OpportunitySchema.index({ title: 'text', description: 'text', company: 'text' });

module.exports = mongoose.model('Opportunity', OpportunitySchema);

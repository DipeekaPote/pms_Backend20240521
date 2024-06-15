
const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
  type: String,
  placeholder: String,
  label: String,
  value: String,
  sectionid: String,
});

const SectionSchema = new mongoose.Schema({
  sectionname: String,
  questions: [QuestionSchema],
});

const organizerSchema = new mongoose.Schema({

  templatename: {
    type: String,
    required: [true, 'Template name is required'],
    trim: true
  },

  organizerName: {
    type: String,
    required: [true, 'Organizer Name is required'],
    trim: true
  },

  sections: [SectionSchema],

  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });


const OrganizerTemplate = mongoose.model('Organizer', organizerSchema);
module.exports = OrganizerTemplate;
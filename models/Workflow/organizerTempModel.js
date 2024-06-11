
const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
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

  title: String,

  fields: [fieldSchema],

  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });


const OrganizerTemplate = mongoose.model('Organizer', organizerSchema);
module.exports = OrganizerTemplate;
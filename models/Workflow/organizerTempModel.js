
const mongoose = require('mongoose');


// Define the form element schema
const formElementSchema = new mongoose.Schema({
  type: { type: String, required: true },
  id: { type: Number, required: true },
  sectionid: { type: Number, required: true },
  options: [
    {
      id: { type: Number, required: true },
      text: { type: String, required: true }
    }
  ],
  text: { type: String }


});



const SectionSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  text: { type: String },
  formElements : [formElementSchema],
  
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


const OrganizerTemplate = mongoose.model('OrganizerTemplate', organizerSchema);
module.exports = OrganizerTemplate;
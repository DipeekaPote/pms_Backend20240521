const OrganizerTemplate = require('../../models/Workflow/organizerTempModel');
const mongoose = require("mongoose");

//get all OrganizerTemplate
const getOrganizerTemplates = async (req, res) => {
    try {
        const OrganizerTemplates = await OrganizerTemplate.find();
        res.status(200).send(OrganizerTemplates);
      } catch (error) {
        res.status(400).send(error);
      }
};

//Get a single OrganizerTemplate
const getOrganizerTemplate = async (req, res) => {
    try {
        const OrganizerTemplate = await OrganizerTemplate.findById(req.params.id);
        if (!OrganizerTemplate) {
          return res.status(404).send();
        }
        res.status(200).send(OrganizerTemplate);
      } catch (error) {
        res.status(400).send(error);
      }
};

//POST a new OrganizerTemplate 
const createOrganizerTemplate = async (req, res) => {
    try {
        const { templatename, organizerName, sections, active } = req.body;
        try {
            // Check if a task template with similar properties already exists
            const existingTemplate = await OrganizerTemplate.findOne({ templatename });
    
            if (existingTemplate) {
                return res.status(400).json({ error: "Organizer Template already exists" });
            }
            // If no existing template is found, create a new one
            const newOrganizerTemplate = await OrganizerTemplate.create({ templatename, organizerName, sections, active });

            return res.status(201).json({ message: "Organizer Template created successfully", newOrganizerTemplate });
        } catch (error) {
            console.error("Error creating Organizer Template:", error);
            return res.status(500).json({ error: "Error creating Organizer Template" });
        }


        // console.log(req.body)
        // // const organizerTemplate = new OrganizerTemplate(req.body); // Create an instance with the request body
        // const OrganizerTemplatenew = await OrganizerTemplate.save(); // Save the instance to the database
    
        // res.status(200).json({ message: "OrganizerTemplate Saved successfully", OrganizerTemplatenew });
      } catch (error) {
        res.status(400).send(error);
      }
};


module.exports = {
    createOrganizerTemplate,
    getOrganizerTemplate,
    getOrganizerTemplates,
    // deleteJobTemplate,
    // updateJobTemplate,
    // getJobTemplateList
}
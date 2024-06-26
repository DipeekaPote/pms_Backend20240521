const OrganizerAccountWise = require('../../models/Workflow/organizerAccountWiseModel');
const mongoose = require("mongoose");

//get all OrganizerAccountWise
const getOrganizerAccountWises = async (req, res) => {
    try {
        const organizerAccountWise = await OrganizerAccountWise.find();

        res.status(200).json({ message: "OrganizerAccountWise Template retrieved successfully", organizerAccountWise })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
};

//Get a single OrganizerAccountWise
const getOrganizerAccountWise = async (req, res) => {
    try {
        const organizerAccountWise = await OrganizerAccountWise.findById(req.params.id);
        if (!organizerAccountWise) {
          return res.status(404).send();
        }
        res.status(200).json({ message: "Organizer AccountWise retrieved successfully", organizerAccountWise })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
};

//POST a new OrganizerAccountWise 
const createOrganizerAccountWise = async (req, res) => {
    try {
        const { accountid, organizertemplateid, reminders, jobid, sections, active } = req.body;
        try {
            // Check if a task template with similar properties already exists
            const existingOrganizerAccountWise = await OrganizerAccountWise.findOne({ accountid, organizertemplateid });
    
            if (existingOrganizerAccountWise) {
                return res.status(200).json({ error: "OrganizerAccountWise already exists" });
            }
            // If no existing template is found, create a new one
            const newOrganizerAccountWise = await OrganizerAccountWise.create({ accountid, organizertemplateid, reminders, jobid, sections, active });

            return res.status(200).json({ message: "OrganizerAccountWise created successfully", newOrganizerAccountWise });
        } catch (error) {
            console.error("Error creating OrganizerAccountWise:", error);
            return res.status(500).json({ error: "Error creating OrganizerAccountWise" });
        }

      } catch (error) {
        res.status(400).send(error);
      }
};

//delete a OrganizerAccountWise

const deleteOrganizerAccountWise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid OrganizerAccountWise ID" });
  }

  try {
      const deletedOrganizerAccountWise = await OrganizerAccountWise.findByIdAndDelete({ _id: id });
      if (!deletedOrganizerAccountWise) {
          return res.status(404).json({ error: "No such OrganizerAccountWise" });
      }
      res.status(200).json({ message: "OrganizerAccountWise deleted successfully", deletedOrganizerAccountWise });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

// //Get a single OrganizerAccountWise

const getOrganizerByAccountId = async (req, res) => {
    try {
        const organizerAccountWise = await OrganizerAccountWise.find({ accountid: req.params.id })
            .populate({ path: 'accountid', model: 'account' }) // Populate the account details if needed
            .populate({ path: 'organizertemplateid', model: 'OrganizerTemplate' }) // Populate the organizer template details if needed
            .populate({ path: 'jobid', model: 'Job' }); // Populate the job details if needed

         

        if (!organizerAccountWise) {
            return res.status(404).json({ error: "Organizer AccountWise not found" });
        }

        res.status(200).json({ message: "Organizer AccountWise retrieved successfully", organizerAccountWise });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//update a new OrganizerTemplate 
const updateOrganizerAccountWise = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid TaskTemplate ID" });
    }
  
    try {
        const updatedOrganizerAccountWise = await OrganizerAccountWise.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );
  
        if (!updatedOrganizerAccountWise) {
            return res.status(404).json({ error: "No such OrganizerAccountWise" });
        }
  
        res.status(200).json({ message: "Organizer AccountWise Updated successfully", updatedOrganizerAccountWise });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  };


module.exports = {
    createOrganizerAccountWise,
    getOrganizerAccountWise,
    getOrganizerAccountWises,
    deleteOrganizerAccountWise,
    getOrganizerByAccountId,
    updateOrganizerAccountWise,
}
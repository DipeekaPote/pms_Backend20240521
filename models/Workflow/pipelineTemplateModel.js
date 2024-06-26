const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Stage name is required"],
  },

  conditions: [{
    type: Array,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tag',
  }],

  automations: [{
    automationId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Automations',
    },

    conditions: [{
      type: Array,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tag',
    }],

    templates: {
      templateName: {
        type: String,
      },
      templateId: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },

  }],

  automove: {
    type: Boolean,
  }
});

const pipelineSchema = new mongoose.Schema(
  {
    pipelineName: {
      type: String,
      required: [true, "pipelineName is required"],
    },

    availableto: [{
      type: Array,
      type: mongoose.Schema.Types.ObjectId, ref: 'user',
      required: [true, 'Available to are required'],
    }],

    sortjobsby: {
      type: mongoose.Schema.Types.ObjectId, ref: 'SortJobsBy',
    },

    defaultjobtemplate: {
      type: mongoose.Schema.Types.ObjectId, ref: 'JobTemplate',
    },

    accountId: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    description: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    duedate: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    accounttags: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    priority: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    days_on_Stage: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    assignees: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    name: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    startdate: {
      type: Boolean,
      default: false, // Provide a default value if needed
    },

    stages: [stageSchema],

    active: {
      type: Boolean,
      default: true, // Provide a default value if needed
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("pipeline", pipelineSchema);

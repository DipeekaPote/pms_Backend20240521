const mongoose = require('mongoose');

const automationsSchema = new mongoose.Schema({

    description: {
        type: String,
    }
},
    { timestamps: true });

const Automations = mongoose.model('Automations', automationsSchema);

module.exports = Automations;
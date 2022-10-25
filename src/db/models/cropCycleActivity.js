const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropCycleActivitySchema = new Schema({    
    logDate: Date,
    cropCycleId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'CropCycle'
    },
    activityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Activity'
    },
    description: String
});

module.exports = cropCycleActivitySchema;

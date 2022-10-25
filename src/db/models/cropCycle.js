const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropSeedSchema = {
cropId: {
    type: Schema.Types.ObjectId,
    required:true,
    ref:'CropType'
},
seedId: {
    type: Schema.Types.ObjectId,
    required:true,
    ref:'SeedType'
}
};

const cropCycleSchema = new Schema({
    cropSeeds: [cropSeedSchema],
    startDate: Date,
    endDate: Date,
    farmId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'UserFarm'
    },
    cultivationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'CultivationType'
    },
    isPast: {
        type: Boolean,
        default: false
    }
});

module.exports = cropCycleSchema;
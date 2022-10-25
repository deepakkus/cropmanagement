const CropCycle = require('../db/models/cropCycle');
const db = require('../db/index');
const axios = require('axios');
const error = require('../helpers/error');
const APIError = error.APIError;

//get from list of farmids
const getCropCycles = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleModel = db.getModel('CropCycle', CropCycle);
    // const cropCycles = await CropCycleModel.find(filter);
    // return cropCycles;
    const cropCycles = [];
    for(const farmId in filter){
        const cropCycle = await CropCycleModel.find({"farmId": filter[farmId]});
        cropCycles.push(cropCycle);
    }
    return cropCycles;
}

//get a specific farm cropcycles
const getCropCycle = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleModel = db.getModel('CropCycle', CropCycle);
    const cropCycles = await CropCycleModel.find(filter);    
    return cropCycles;
}

const postCropCycle = async (reqBody) => {
    if (!reqBody) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleModel = db.getModel('CropCycle', CropCycle);
    // date in mm-dd-yyyy format
    const cropCycle = new CropCycleModel(reqBody);    
    const saved = await cropCycle.save();    
    return saved;
}

const updateCropCycle = async (cropCycle) => {
    if (!cropCycle) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleModel = db.getModel('CropCycle', CropCycle);
    await CropCycleModel.update({ _id: cropCycle._id }, cropCycle);    
    return cropCycle;
}

module.exports = {
    getCropCycles,
    getCropCycle,
    postCropCycle,
    updateCropCycle
};

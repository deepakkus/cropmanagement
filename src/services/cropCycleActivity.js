const CropCycleActivity = require('../db/models/cropCycleActivity');
const db = require('../db/index');
const error = require('../helpers/error');
const APIError = error.APIError;

//get from list of cropcycleids
const getCropCycleActivities = async (filter) => {
    // if (!filter) {
    //     throw APIError('BadRequestFormat');
    // } 
    // await db.getDbConn();
    // const CropCycleActivityModel = db.getModel('CropCycleActivity', CropCycleActivity);   
    // const cropCycleActivities = await CropCycleActivityModel.findOne({"cropCycleId": filter[cropCycleId]});
    // return cropCycleActivities;
        if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleActivityModel = db.getModel('CropCycleActivity', CropCycleActivity);   
    const cropCycleActivities = [];
    for(const cropCycleIndex in filter){
        const cropCycleActivity = await CropCycleActivityModel.find({"cropCycleId": filter[cropCycleIndex]});
        cropCycleActivities.push(cropCycleActivity);
    }
    return cropCycleActivities;
}

//get a specific farm cropcycles
const getCropCycleActivity = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleActivityModel = db.getModel('CropCycleActivity', CropCycleActivity);   
    const cropCycleActivity = await CropCycleActivityModel.find(filter);    
    return cropCycleActivity;
}

const postCropCycleActivity = async (reqBody) => {
    if (!reqBody) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const CropCycleActivityModel = db.getModel('CropCycleActivity', CropCycleActivity);
    // date in mm-dd-yyyy format
    const cropCycleActivity = new CropCycleActivityModel(reqBody);    
    const saved = await cropCycleActivity.save();
    return saved;
}

module.exports = {
    getCropCycleActivities,
    getCropCycleActivity,
    postCropCycleActivity
};

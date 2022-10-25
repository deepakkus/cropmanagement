const Activity = require('../db/models/activity');
const CropType = require('../db/models/cropType');
const CultivationType = require('../db/models/cultivationType');
const DeviceType = require('../db/models/deviceType');
const SeedType = require('../db/models/seedType');
const SoilType = require('../db/models/soilType');
const TerrainType = require('../db/models/terrainType');
const WaterSource = require('../db/models/waterSource');
const e = require('express');
const db = require('../db/index');

// List of devices of a specific User
const getLookUpData = async (filter) => {
    await db.getDbConn();
    const dataList = [
        db.getModel('Activity', Activity),
        db.getModel('CropType', CropType),
        db.getModel('CultivationType', CultivationType),
        db.getModel('DeviceType', DeviceType),
        db.getModel('SeedType', SeedType),  
        db.getModel('SoilType', SoilType),      
        db.getModel('TerrainType', TerrainType),     
        db.getModel('WaterSource', WaterSource)
    ];
    const output = {};
    for (const cindex in dataList) {
        const Model = dataList[cindex];
        const key = Model.collection.collectionName;
        const toAdd = await Model.find(filter);        
        output[key] = toAdd;
    }
    return output;
}

module.exports = {
    getLookUpData
};

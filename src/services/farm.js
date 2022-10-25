const axios = require('axios');
const db = require('../db/index');
const UserFarm = require('../db/models/userFarm');
const error = require('../helpers/error');
const APIError = error.APIError;

// List of Farms of a specific User
const getFarms = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Farm = db.getModel('UserFarm', UserFarm);
    const userFarms = await Farm.find(filter);
    return userFarms;
}

//get a specific userFarm of a user
const getFarm = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Farm = db.getModel('UserFarm', UserFarm);
    const userFarm = await Farm.findById(filter);
    return userFarm;
}

//filter should be an instance of UserFarm Schema
const postFarm = async (farm) => {
    if (!farm) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Farm = db.getModel('UserFarm', UserFarm);
    const userFarm = new Farm(farm);
    const saved = await userFarm.save();
    return saved;
}

const updateFarm = async (farm) => {
    if (!farm) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Farm = db.getModel('UserFarm', UserFarm);
    await Farm.update({ _id: farm._id }, farm);    
    return farm;
}

module.exports = {
    getFarms,
    getFarm,
    postFarm,
    updateFarm
};

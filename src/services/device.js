const axios = require('axios');
const db = require('../db/index');
const UserDevice = require('../db/models/userDevice');
const error = require('../helpers/error');
const APIError = error.APIError;

// List of devices of a specific User
const getDevices = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Device = db.getModel('UserDevice', UserDevice);
    const userDevices = await Device.find(filter);
    return userDevices;
}

//get a specific userdevice of a user
const getDevice = async (filter) => {
    if (!filter) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Device = db.getModel('UserDevice', UserDevice);
    const userDevice = await Device.findById(filter);
    return userDevice;
}

//filter should be an instance of Userdevice Schema
const postdevice = async (device) => {
    if (!device) {
        throw APIError('BadRequestFormat');
    }
    await db.getDbConn();
    const Device = db.getModel('UserDevice', UserDevice);    
    const count = await Device.countDocuments({deviceId: device.deviceId, userId: device.userId})
    if (!count) {
        const userDevice = new Device(device);
        const deviceSaved = await userDevice.save();        
        return deviceSaved;
    }
    throw APIError(null, 'Device ID is already added');
}

module.exports = {
    getDevices,
    getDevice,
    postdevice,
};

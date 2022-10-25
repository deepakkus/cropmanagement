const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDeviceSchema = new Schema({
userId: {
    type: String,
    required:true
},
deviceTypeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'DeviceType'
},
deviceId: {
    type: String,
    required: true,
    //unique:true
},
deviceName: {
    type: String,
    required: true
}
});

/*userDeviceSchema.path('deviceId').validate(async (deviceId) => {
const count = await mongoose.models.UserDevice.countDocuments({deviceId});
return !count;
}, "Device ID is already Added")*/

module.exports = userDeviceSchema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userFarmSchema = new Schema({
userId: {
    type: String,
    required:true,
},
soilTypeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'SoilType'
},
terrainTypeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'TerrainType'
},
waterSourceId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'WaterSource'
},
farmName: {
    type: String,
    required: true
},
//polygon points forming the farm area
location: {
    type: [],
    required: true
},
// address using the places API, address string and lat-lng
address: {
    addressName: {
        type: String,
        required:true
    },
    location: {
        type: [],
        required: true
    }
}
});

module.exports = userFarmSchema;

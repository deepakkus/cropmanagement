const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const terrainTypeSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = terrainTypeSchema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soilTypeSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = soilTypeSchema;
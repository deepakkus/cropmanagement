const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropTypeSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
},
scientificName: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = cropTypeSchema;
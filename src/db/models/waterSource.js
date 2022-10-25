const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waterSourceSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = waterSourceSchema;
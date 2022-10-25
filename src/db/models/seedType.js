const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seedTypeSchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = seedTypeSchema;
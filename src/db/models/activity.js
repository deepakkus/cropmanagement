const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
name: {
    type: String,
    required: true,
    unique: true
}
});

module.exports = activitySchema;
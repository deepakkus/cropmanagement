const mongoose = require('mongoose');
//const MongoClient = require('mongodb').MongoClient;

const connectDb = () => {
    mongoose.connect("mongodb://localhost:27017/SGCropMgtDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

mongoose.connection.once('open', function () {
    console.log('DB Connection has been made');
}).on('error', function (error) {
    console.log('Connect error', error);
}).on('disconnected', function () {
    console.log('Connection disconnected');
});



module.exports = {
    connectDb,
};
const mongoose = require('mongoose');
let connection = null;

const getDbConn = async () => {
    if (connection === null) {
        connection = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/SGCropMgtDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    return connection;    
}

const getModel = (name, schema) => {
    return connection.model(name, schema);
};

mongoose.connection.once('open', function () {
    console.log('DB Connection has been made');
}).on('error', function (error) {
    console.log('Connect error', error);
    mongoose.connection.close();
    connection = null;
}).on('disconnected', function () {
    console.log('Connection disconnected');
});

module.exports = {
    getDbConn,
    getModel
};
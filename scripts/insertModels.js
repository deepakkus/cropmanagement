const MongoClient = require('mongodb').MongoClient;
const data = require('./data.json');
const insertData = async () => {
    try{
        // Connect to the db
        const client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true });
        const db = client.db('SGCropMgtDB');
        for (const collection in data) {
            const values = data[collection];
            const toInsert = [];
            for (const value of values) {
                toInsert.push({name: value});
            }
            await db.collection(collection).insertMany(toInsert);
        }
        console.log('Inserted all the data!')
        client.close();
        process.exit();
    } catch(err) {
        console.log('There was an error while isnerting...', err);
        process.exit();
    }    
}

insertData();
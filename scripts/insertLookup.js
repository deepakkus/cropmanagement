const MongoClient = require('mongodb').MongoClient;
const data = require('./data.json');
const insertData = async () => {
    try{
        // Connect to the db
        const client = await MongoClient.connect('mongodb://dbuser:txbze2kkl6@ec2-54-160-124-126.compute-1.amazonaws.com:27017/SGCropMgtDB', { useUnifiedTopology: true });
        const db = client.db('SGCropMgtDB');
        for (const collection in data) {
            const values = data[collection];
            const toInsert = [];
            for (const value of values) {
                if (collection === 'croptypes') {
                    toInsert.push(value);
                } else {
                    toInsert.push({name: value});
                }
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
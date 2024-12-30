function initConnection() {
    const mongo = require('mongodb');

    const client = mongo.MongoClient;
    const url = "mongodb://localhost:27017/travel";

    client.connect(url, function(err, db) {
        if(err) {
            throw err;
        }

        console.log('Connection to MongoDB successful!');
        db.close();
    })
}

module.exports = initConnection;
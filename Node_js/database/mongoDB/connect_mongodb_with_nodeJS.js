const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// simple function to connect with database
async function dbConnectAndData() {
    let result = await client.connect();
    let databaseName = result.db('E-commerce-web');
    let collectionName = databaseName.collection('products');

    // see the database collections from mongodb to this terminal
    let response = await collectionName.find().toArray();
    console.log(response);
}
dbConnectAndData();// function invoked/called


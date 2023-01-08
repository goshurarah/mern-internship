const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
 
// here is the the data connection code
async function dbConnect() {
    let result = await client.connect();
    let databaseName = result.db('E-commerce-web');
    return collectionName = databaseName.collection('products');
}
module.exports=dbConnect
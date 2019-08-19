const { MongoClient } = require("mongodb");
const config = require('../config/Parameters');

(async function () {
    try {
        console.log('Start...');
        const client = await MongoClient.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        const dbName = client.s.options.dbName;
        console.log(`Create/Connected to Database --> ${dbName}`);
        client.close();
    } catch (e) {
        console.error(e)
    }
})()
const mongoose = require('mongoose');
const mongoURI = 'mongodb://raha:19301028@ac-obnhuyx-shard-00-00.eohpjty.mongodb.net:27017,ac-obnhuyx-shard-00-01.eohpjty.mongodb.net:27017,ac-obnhuyx-shard-00-02.eohpjty.mongodb.net:27017/mediexpress?ssl=true&replicaSet=atlas-13nfom-shard-0&authSource=admin&retryWrites=true&w=majority'
//'mongodb+srv://raha:19301028@cluster0.eohpjty.mongodb.net/mediexpress?retryWrites=true&w=majority';

async function connectToDb() {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB successfully");

        // Fetching data from collections after successful connection
        const mediCollection = await mongoose.connection.db.collection("medi_items");
        const data = await mediCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("medi_items_Category");
        const Catdata = await categoryCollection.find({}).toArray();

        return { data, Catdata };

    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        return null;
    }
}

module.exports = connectToDb;

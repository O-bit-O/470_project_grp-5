const connectToDb = require('./db');

// Use the new asynchronous function to connect and fetch the data
(async function () {
    const { data, Catdata } = await connectToDb();
    global.mediData = data;
    global.mediCategory = Catdata;
})();

const express = require('express');
const app = express();
const port = 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', require('./routes/Auth'));

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
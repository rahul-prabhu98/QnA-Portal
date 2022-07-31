const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb+srv://mongo-db-user:Asd1234@mongocluster-2bbjv.mongodb.net/mongoCloudDB?retryWrites=true&w=majority';

mongoose.connect(mongoDBUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
req.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "*");
next();
});

let initApp = require('./api/app');
initApp(app);
app.listen(port);
console.log("AskHusky server listening on port: " + port);

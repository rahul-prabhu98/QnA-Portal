const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mongo-db-user:Asd1234@mongocluster-2bbjv.mongodb.net/mongoCloudDB?retryWrites=true&w=majority', {

    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "*");
next();
});

let initApp = require('./api/app');
initApp(app);
app.listen(port);
console.log("Server for ToDo List listening on port: " + port);

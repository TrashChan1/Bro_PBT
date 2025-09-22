require('dotenv').config();
require("./sentry");
require('./src/database/dbconfig/DBConnection');
const mongoose = require('mongoose');
const Utilities = require('./src/Utilities');
const bodyParser = require('body-parser');
const Sentry = require("@sentry/node");
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const { MongoClient } = require("mongodb");

const CrudController = require("./src/controllers/CrudController");

process.env.APP_DEBUG === 'true' && app.use(logger('dev'));
app.use(cors(Utilities.corsOriginOptions));
app.use(Utilities.corsError);
app.use(Utilities.setRateLimit);
app.use(bodyParser.json({ limit: process.env.BODYPARSER_LIMIT, extended: true }));
app.use(bodyParser.urlencoded({ limit: process.env.BODYPARSER_LIMIT, extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(require(`./src/Routes`));
app.use(express.json());
app.use(cors());
//app.use((req, res) => Utilities.apiResponse(res, 404, '404 API Not Found'));
// TODO: Set up API so that we do not unsafely bypass 404 API not found
Sentry.setupExpressErrorHandler(app);

//appcrasher;

/*
mongoose.connect(config.mongoURI, {useNewUrlParser:true,
                                   useUnifiedTopology: true })
                .then(() => console.log('MongoDB Connected'))
                .catch(err => console.log(err));
                */
/*
async function myRead() {
    const uri = "mongodb://127.0.0.1:27017/";
    const client = new MongoClient(uri);
    const db = client.db("test3");

    const read_result = await db.collection("Users").findOne({
        name: "Harry"
    });
    return read_result;
}
*/
/*
app.get('/test1',
    async function (req, res) {
        const harry_user = await myRead();
        //res.send("Hello World!");
        //res.send(`Harry's age is: ${harry_user.age}`);
        res.send(harry_user);
    })
*/
app.get(('/test2',
    CrudController.getUsers));

const server = app.listen(process.env.PORT, () => {
	console.log(`********** Server is running on  http://localhost:${server.address().port}  **********`);
}).on('error', (error) => {
	console.error('********** Port ' + error.port + ' is already in use **********');
});

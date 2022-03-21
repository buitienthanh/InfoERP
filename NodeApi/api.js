const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoute = require('./routes/users/index');
const mailRoute = require('./routes/mail/index');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', userRoute);
app.use('/api', mailRoute);

var port = process.env.PORT || config.portWebsite;
app.listen(port);

console.log('InfoERP API is runnning at ' + port);




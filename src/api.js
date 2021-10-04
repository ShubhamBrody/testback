const express = require('express');
const serverless = require('serverless-http');


const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({'HOLA' : 'BOLA'});
});


const newsRoute = require(__dirname+'/../routes/newsData');

router.use('/admin', adminRoute);

app.use('/.netlify/functions/api', router);


module.exports.handler = serverless(app);
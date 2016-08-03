/**
 * Created by lambo on 8/3/16.
 */
'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/header',function (req,res) {
    console.log('start');
    res.send(req.body);
});

app.listen(3000);

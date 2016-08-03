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
    console.log('awdawd');
    res.send(req.get('abc'));
});

app.listen(3000);
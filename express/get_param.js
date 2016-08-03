/**
 * Created by lambo on 8/3/16.
 */
'use strict';
let express = require('express');
let app = express();

app.get('/name',function (req,res) {
    let result = req.param('name');
    res.send(result);
})

let server = app.listen(3000,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s,%s',host,port);
});
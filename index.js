/**
 * Created by lambo on 8/2/16.
 */
'use strict';

let express = require('express');
let app = express();
const BarcodeToCode = require('./src/barcodeToCode');
const CodeToBarcode = require('./src/codeToBarcode');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/barcodeToCode',function (req,res) {
    //let input = req.query.barcode;
    let input = req.body.barcode;
    console.log(input);
    let result = new BarcodeToCode().changeBarcodeToCode(input);
    res.send(result);
});

app.post('/codeToBarcode',function (req,res) {
    //let input = req.query.code;
    let input = req.body.code;
    console.log(input);
    let result = new CodeToBarcode().changCodeToBarcode(input);
    res.send(result);
});

let server = app.listen(3000,function () {
    let host = server.address().address;
    let port = server.address().port;
    
    console.log('Example app listening at http://%s,%s',host,port);
});
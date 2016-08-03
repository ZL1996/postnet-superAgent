/**
 * Created by lambo on 8/2/16.
 */
'use strict';

const barcodeToCode = require('../src/barcodeToCode');
const codeToBarcode = require('../src/codeToBarcode');
let express = require('express');
let app = experss();

app.get('/getBarcodeToCode',function (req,res) {
    let input = req.query.barcode;
    let result = new barcodeToCode().changeBarcodeToCode(input);
    res.send(result);
});

app.get('/getCodeToBarcode',function (req,res) {
    let input = req.query.code;
    let result = new codeToBarcode().changCodeToBarcode(input);
    res.send(result);
});

let server = app.listen(3000,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s,%s',host,port);
});

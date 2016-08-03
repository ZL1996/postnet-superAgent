/**
 * Created by lambo on 8/2/16.
 */

var rq = require('superagent');
rq
    .get('/localhost:3000/getCodeToBarcode')
    .type('form')
    .query({code:12345})
    .end(function (err,res) {
    if(res.ok){
        console.log('result is ' + res.text);
    } else {
        console.log('result is ' + res.text);
    }
});
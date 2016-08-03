/**
 * Created by lambo on 8/2/16.
 */
var request = require('superagent');
request
    .post('localhost:3000/codeToBarcode')
    .type('form')         //以表单的形式发送
    .send({'code': '12345'})    //相当于一个请求
    //.set('X-API-Key', 'foobar')
    //.set('Accept', 'application/json')
    .end(function (err,res) {
        if (res.ok) {
            console.log('yay got ' + res.text);
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });

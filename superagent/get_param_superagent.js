/**
 * Created by lambo on 8/3/16.
 */
var request = require('superagent');

request
    .get('/localhost:3000/name')
    .type('form')
    .query({name : 'name'})
    .end(function (err,res) {
        console.log('ya got ' + res.text);
    });
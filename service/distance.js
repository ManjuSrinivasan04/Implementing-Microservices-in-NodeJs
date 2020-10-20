let request = require('request');

const apiKey = "4A4WU2PYw7hCaPrX3CbgdkuoYlkCtTbcnUxy5gDNYMCTvLUv9R1c5AvonG5ZE0uq";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

let distance = {
   find: function(req, res, next) {
       request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: -1});
           }
       });

   }
};

module.exports = distance;
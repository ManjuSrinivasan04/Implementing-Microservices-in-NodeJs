let request = require('request');

//this key frequently expires during the day

const apiKey = "4uQw0R1Phi5hLm30bJhmQkGl73rvf3esNkpqf7oR1ENMdU8IisXfPcjxtUsmMrFO";
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
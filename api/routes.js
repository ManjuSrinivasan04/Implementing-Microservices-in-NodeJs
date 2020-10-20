//defining the routes for the microservices
//then assign each to a target in the controller object (that will control the flow of data in the application)
//One endpoint called “about” that returns information about the application.
// And a “distance” endpoint that includes two path parameters, both Zip Codes of the Lego store. 
//This endpoint returns the distance, in miles, between these two Zip Codes.

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/distance/:zipcode1/:zipcode2')
       .get(controller.getDistance);
};
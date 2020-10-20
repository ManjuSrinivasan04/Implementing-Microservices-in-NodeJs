//This file is creating our server and assigns routes to process all requests.

const express = require('express')
const app = express();
const port =  3000;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
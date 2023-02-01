require('dotenv').config();
const ApiInitializerService = require('./services/ApiInitializerService');

this.apiInitializer = new ApiInitializerService();

 _initializeServer = () => {
  console.log("w")
  this.apiInitializer.setApiSettings();
  this.apiInitializer.connectToDBAndControlConnection().then(async result => {
    this.apiInitializer.setMiddlewares();
    this.apiInitializer.setRoutes();
  }).catch(err => {
  });  
}

_initializeServer();

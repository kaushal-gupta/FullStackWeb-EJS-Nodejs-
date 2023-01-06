const express= require('express');

const routes = express.Router();

const userController = require('../controllers/user_controller');

routes.use('/profile',userController.profile);


module.exports=routes;
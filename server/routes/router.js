const express = require('express');
const route = express.Router();

const servicesRoute = require('../services/render');
const controller = require('../controller/controller');
/*
@description Root Route
@method GET/
*/
route.get("/",servicesRoute.homeRoutes);

/*
@description add Route
@method GET/Add Ueser
*/
route.get('/add-user',servicesRoute.add_user);

/*
@description Update Route
@method GET/Update - user
*/
route.get('/update-user',servicesRoute.update_user);

//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete)


module.exports =route
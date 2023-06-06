const express = require('express');
const usersController = require('../controller/users.js');

const route = express();

route.get("/", usersController.getAllUsers);
route.post("/", usersController.createNewUsers);
route.patch("/:userID", usersController.userUpdate);
route.delete("/:userID", usersController.userDelete);


module.exports = route;
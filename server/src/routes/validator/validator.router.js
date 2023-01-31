const express = require('express');

const { getAllSchemas } = require('./validator.controller');

const validatorRouter = express.Router();

validatorRouter.get('/validator', getAllSchemas)

module.exports = validatorRouter;
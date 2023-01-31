const express = require('express');
const { httpGetAllLaunches } = require('../launches/launches.controller');
const { httpAddNewLaunch } = require('./launches.controller');

const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);
launchRouter.post('/', httpAddNewLaunch);

module.exports = launchRouter;

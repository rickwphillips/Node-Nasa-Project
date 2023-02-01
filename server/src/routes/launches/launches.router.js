const express = require('express');
const { httpAddNewLaunch, httpAbortLaunch, httpGetAllLaunches } = require('./launches.controller');

const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);
launchRouter.post('/', httpAddNewLaunch);
launchRouter.delete('/:id', httpAbortLaunch);


module.exports = launchRouter;

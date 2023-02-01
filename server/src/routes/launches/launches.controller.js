const { getAllLaunches, addNewLaunch, existsWithLaunchId, abortLaunchById } = require('../../models/launches.model');

const validateLaunchProperties = (launch) => {
  let errors = [];

  if (!launch.launchDate || isNaN(new Date(launch.launchDate).getDate())) {
    errors.push('Invalid or missing date property');
  }

  if (!launch.mission) errors.push('Missing mission property');
  if (!launch.rocket) errors.push('Missing rocket property');
  if (!launch.launchDate) errors.push('Missing launchDate property');
  if (!launch.target) errors.push('Missing target property');

  return errors.length ? errors : false;
}
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = { ...req.body, launchDate: new Date(req.body.launchDate) };

  const validationErrors = validateLaunchProperties(launch);

  if (validationErrors) {
    return res.status(400).json({
      error: validationErrors.join(", ")
    })
  }

  addNewLaunch(launch);

  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = parseInt(req.params.id);

  if(!existsWithLaunchId(launchId)) {
    return res.status(404).json({
      error: 'Launch not found'
    });
  }

  const aborted = abortLaunchById(launchId);

  return res.status(200).json(aborted);






}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};
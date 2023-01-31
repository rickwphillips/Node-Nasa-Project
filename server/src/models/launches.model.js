const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  console.log(launch, latestFlightNumber);
  launches.set(++latestFlightNumber, Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customers: ['Rick Phillips'],
    upcoming: true,
    success: true
  }));
  console.log(latestFlightNumber);
}

module.exports = {
  getAllLaunches, addNewLaunch
};
const launches = new Map();

const launch = {
  flightNumber: launchDoc['flight_number'],
  mission: launchDoc['name'],
  rocket: launchDoc['rocket']['name'],
  launchDate: launchDoc['date_local'],
  upcoming: launchDoc['upcoming'],
  success: launchDoc['success'],
  customers,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};

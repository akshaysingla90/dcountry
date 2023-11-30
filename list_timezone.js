const moment = require('moment-timezone');

// Get a list of all available timezones
const timezones = moment.tz.names();

// Create an object to store timezone data
const timezoneData = {};

// Iterate through the timezones and retrieve their offsets and abbreviations
timezones.forEach((timezone) => {
  const offset = moment.tz(timezone).format('Z'); // Get the offset in the format "+HH:mm" or "-HH:mm"
  const abbreviation = moment.tz(timezone).format('z'); // Get the timezone abbreviation
  
  timezoneData[timezone] = { offset, abbreviation };
});

console.log(timezoneData);

const moment = require('moment-timezone');

// Get a list of all available timezones
// const allTimezones = moment.tz.names();

// // Create an array to store timezone data
// const timezoneList = [];

// // Iterate through each timezone
// allTimezones.forEach((zoneName) => {
//   // Get the current DateTime in the timezone
//   const now = moment.tz(zoneName);

//   // Check if the timezone is currently observing DST
//   const isDST = now.isDST();

//   // Get the offset, abbreviation, and DST status for the current DateTime
//   const offset = now.utcOffset() / 60; // Convert offset to hours
//   const abbreviation = now.format('z');
//   const validTimezoneAbbreviation = /^[A-Za-z]{3,5}$/;
//   if (!validTimezoneAbbreviation.test(abbreviation)) {
//        // Add timezone data to the list
//       timezoneList.push({
//         name: zoneName,
//         // offset,
//         abbreviation,
//         // isDST,
//       });
//   } 
// });

// Sort the list alphabetically by timezone name
// timezoneList.sort((a, b) => a.name.localeCompare(b.name));

// Output the list of timezones with DST information
// console.log(JSON.stringify(timezoneList, null, 2));



function test(){
  const zoneName = 'Europe/Astrakhan'
  const now = moment.tz(zoneName);
  const offset = now.utcOffset() / 60; // Convert offset to hours
  const abbreviation = now.format('z');
  console.log({
    name: zoneName,
    offset,
    abbreviation
  })
}


test()
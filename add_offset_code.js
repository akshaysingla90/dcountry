const fs = require('fs');
const moment = require('moment-timezone');

/*
// Read the input CSV file
const inputFileName = 'timezones_data.csv';
const outputFileName = 'timezones_data_result.csv';

fs.readFile(inputFileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the CSV data into rows
  const rows = data.split('\n');

  // Create an output array for the modified rows
  const outputRows = [];
  const timezone_without_dst= []
  // Iterate through the rows in the input CSV and add new data
  rows.forEach((row) => {
    // Split the row into columns
    let  [country_id, timezone_name, id_pk] = row.split(',');
    id_pk = id_pk.replace(/\r$/, '')
    // Use moment-timezone to get timezone offset and abbreviation
    const timeZone = moment.tz(timezone_name);
    const offsetMinutes = timeZone.utcOffset();
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMinutesAbs = Math.abs(offsetMinutes) % 60;
    const offsetSign = offsetMinutes >= 0 ? '+' : '-';
    const offsetString = `UTC${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutesAbs.toString().padStart(2, '0')}`;
    let abbreviation = timeZone.format('z');
    // if(moment().tz(timezone_name).isDST()){
    //   console.log(timezone_name)
    //   timezone_without_dst.push(timezone_name)
    // }
    if(!isNaN(parseInt(abbreviation))){
      console.log(abbreviation)
        // const date = new Date();
        // const options = { timeZone: timezone_name, timeZoneName: 'short' };
        // abbreviation = new Intl.DateTimeFormat('en-US', options).format(date);
        // console.log(abbreviation);
    }
    // Construct the new row
    const newRow = [country_id, timezone_name, id_pk, offsetString, abbreviation].join(',');

    // Push the modified row to the output array
    outputRows.push(newRow);
  });

  // // Join the output rows and write them to the output CSV file
  // const outputData = outputRows.join('\n');
  // fs.writeFile(outputFileName, outputData, 'utf8', (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(`Output saved to ${outputFileName}`);
  // });


  // const timezone_without_dsta = timezone_without_dst.join('\n');
  // fs.writeFile('timezone_without_dst', timezone_without_dsta, 'utf8', (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(`Output saved to ${'timezone_without_dst'}`);
  // });
});
*/

function getOffsetAndAbbreviation(timezone_name){
  const timeZone = moment.tz(timezone_name);
  const offsetMinutes = timeZone.utcOffset();
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetMinutesAbs = Math.abs(offsetMinutes) % 60;
  const offsetSign = offsetMinutes >= 0 ? '+' : '-';
  const offsetString = `UTC${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutesAbs.toString().padStart(2, '0')}`;
  let abbreviation = timeZone.format('z');

  console.log('offsetString : ',offsetString)
  console.log('abbreviation : ',abbreviation)
}

getOffsetAndAbbreviation('Australia/ACT')
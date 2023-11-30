const fs = require('fs');
const moment = require('moment-timezone');

// Read the input CSV file
const inputFileName = 'timezones_data.csv';
const outputFileName = 'timezones_data_with_minoffset.csv';

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
    let  [id,name,country_id,offset,timezone_code] = row.split(',');
    let offset_minutes = offset[0] +''+( parseInt(offset.slice(1,3)) * 60 + parseInt(offset.slice(4,6)))
    // Construct the new row
    offset_minutes = offset_minutes ? offset_minutes : 'offset_minutes'
    const newRow = [id,name,country_id,offset,offset_minutes,timezone_code].join(',');

    // Push the modified row to the output array
    outputRows.push(newRow);
  });

  // // Join the output rows and write them to the output CSV file
  const outputData = outputRows.join('\n');
  fs.writeFile(outputFileName, outputData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Output saved to ${outputFileName}`);
  });


  // const timezone_without_dsta = timezone_without_dst.join('\n');
  // fs.writeFile('timezone_without_dst', timezone_without_dsta, 'utf8', (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(`Output saved to ${'timezone_without_dst'}`);
  // });
});

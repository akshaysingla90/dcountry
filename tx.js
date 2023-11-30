const axios = require('axios');
const fs = require('fs');
const path = require('path');

// URL of the file you want to download
const fileUrl = 'https://example-files.online-convert.com/document/txt/example.txt';

// Define the path where you want to save the downloaded file
const downloadPath = path.join(__dirname, 'sample-file.txt');

// Create a write stream to save the file
const writer = fs.createWriteStream(downloadPath);

// Axios GET request to download the file
axios({
  method: 'get',
  url: fileUrl,
//   responseType: 'stream', // This tells Axios to treat the response as a stream
})
  .then((response) => {
    console.log(response)

  })
  .catch((error) => {
    console.error('Error fetching file:', error);
  });

const pkg = require('country-list-js');
const fs = require('fs');
const currencyAPIjson = require('./mockExchange');
let availableCurrencyList = Object.keys(currencyAPIjson)
const {data: oldCountries} = require('./dbCountries');
let oldCountryCodesList = oldCountries.map((c)=>{
    return c.country_alpha_code.trim()
})
const countries = pkg.names()
console.log(countries.length)
// /country_alpha_code
//{ "country_code": "AF", "currency_code": "AFN", "calling_code": "+93" },
const data = []
//missing currency in API
const missingCurrencyInAPI = [];
//new country in pkg
const newCountryInAPI = [];
//extra country in pkg
const missingCountryinPkg = [];
const countrycodesinpkg  =[]
const allCountries = []
const usdCountry = ['AS',
'AI',
'BY',
'IO',
'DO',
'TP',
'EC',
'SV',
'GU',
'MH',
'FM',
'AN',
'MP',
'PW',
'PR',
'SS',
'TC',
'US',
'VI',
'YU']
'VI',

usdCountryCurrency = []
countries.forEach(c=>{
    var {name,currency, dialing_code, code} = pkg.findByName(c);
    if(usdCountry.includes(code.iso2))usdCountryCurrency.push({code:code.iso2, currency:currency.code })
    countrycodesinpkg.push(code.iso2)
    // var c1= pkg.findByName(c);
    // console.log(c1)
    //not present
    if(!availableCurrencyList.includes(currency.code)){
        missingCurrencyInAPI.push({
            name,
            country_code: code?.iso2,
            currency_code: currency.code,
            calling_code: dialing_code,
        })
    }
    if(!oldCountryCodesList.includes(code?.iso2)){
        newCountryInAPI.push({
            name,
            country_code: code?.iso2,
            currency_code: currency.code,
            calling_code: dialing_code,
        })
    }
    data.push({
        name,
        country_code: code?.iso2,
        currency_code: currency.code,
        calling_code: dialing_code,
        flag: "https://eduployment-prod.s3.me-south-1.amazonaws.com/Flags/" + code?.iso2 + ".png"
    })
    // console.log({
    //      name,
    //      country_code: code?.iso2,
    //     currency_code: currency.code,
    //     calling_code: dialing_code,
    //     flag: "https://eduployment-prod.s3.me-south-1.amazonaws.com/Flags/" + code?.iso2 + ".png"
    // })
})

data.sort(function(a,b){
    // here a , b is whole object, you can access its property
    //convert both to lowercase
       let x = a.name.toLowerCase();
       let y = b.name.toLowerCase();
 
    //compare the word which is comes first
       if(x>y){return 1;} 
       if(x<y){return -1;}
       return 0;
     })



function jsonToCsv(jsonData) {
  if (!Array.isArray(jsonData)) {
    throw new Error('Input data should be an array of objects.');
  }

  if (jsonData.length === 0) {
    return ''; // Return an empty string if there's no data.
  }

  const headers = Object.keys(jsonData[0]);
  const csvData = [];

  // Add headers to CSV
  csvData.push(headers.join(','));

  // Convert each JSON object to CSV row
  jsonData.forEach((obj) => {
    const row = headers.map((header) => {
      if (typeof obj[header] === 'string' && obj[header].includes(',')) {
        // Wrap values containing commas in double quotes
        return `"${obj[header]}"`;
      }
      return obj[header];
    });
    csvData.push(row.join(','));
  });

  // Join all CSV rows with newline character
  return csvData.join('\n');
}

// Example usage:
const jsonData = [
  { Name: 'John', Age: 30, City: 'New York' },
  { Name: 'Alice', Age: 25, City: 'San Francisco' },
  { Name: 'Bob', Age: 35, City: 'Los Angeles' },
];

const csvContent = jsonToCsv(data);
// console.log(csvContent);

// console.log(missingCurrencyInAPI)
console.log(newCountryInAPI)

oldCountryCodesList.forEach(cc=>{
    if(!countrycodesinpkg.includes(cc)){
        missingCountryinPkg.push(cc)
    }
})

console.log(missingCountryinPkg)

// fs.writeFileSync("fileToWrite.csv", JSON.stringify(csvContent));
// fs.writeFileSync("fileToWrite.json", JSON.stringify(data));

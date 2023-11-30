const moment = require('moment-timezone');

let data = {
Honduras: [`${moment().tz('America/Tegucigalpa').format('Z')}`, `${moment().tz('America/Tegucigalpa').zoneAbbr('')}`],
Mexico: [`${moment().tz('America/Mexico_City').format('Z')}`, `${moment().tz('America/Mexico_City').zoneAbbr('')}`],
Andorra:  [`${moment().tz('Europe/Andorra').format('Z')}`, `${moment().tz('Europe/Andorra').zoneAbbr('')}`],
'America/Araguaina': [`${moment().tz('America/Araguaina').format('Z')}`, `${moment().tz('America/Araguaina').zoneAbbr('')}`]
}

let data2 = {
    Andorra:[
        `${moment().tz('Europe/Andorra').format('Z')}`,
         `${moment().tz('Europe/Andorra').zoneAbbr('')}`,
      `DST: ${moment().tz('Europe/Andorra').isDST()}`
    ],
    India:  [`${moment().tz('Asia/Kolkata').format('Z')}`, 
    `${moment().tz('Asia/Kolkata').zoneAbbr('')}`,
     `DST: ${moment().tz('Asia/Kolkata').isDST()}`
    ]}


console.log(data)
console.log(data2)
'use strict';
const moment = require('moment-timezone');

function getLatestOffsetAndAbbreviation(timezone_name) {
    const timeZone = moment.tz(timezone_name);
    const offsetMinutes = timeZone.utcOffset();
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMinutesAbs = Math.abs(offsetMinutes) % 60;
    const offsetSign = offsetMinutes >= 0 ? '+' : '-';
    const offset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutesAbs.toString().padStart(2, '0')}`;
    const abbreviation = timeZone.format('z');
    console.log({name:timezone_name,offset,abbreviation})
    return { latestOffset: offset, latestAbbreviation: abbreviation };
}
// getLatestOffsetAndAbbreviation('Europe/Dublin')
console.log(getLatestOffsetAndAbbreviation('Africa/Cairo'))
console.log(getLatestOffsetAndAbbreviation('Egypt'))
console.log(moment().tz('Africa/Cairo'))
console.log(moment().tz('Egypt'))
// abbreviations 
// single country name 
// Need to delete the above timeones but before deleteing 
// we need to  check if any user has selected those timezones
// if yes then change those user's timezone_id any other timezone_id of that country_living_in 

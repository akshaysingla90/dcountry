// const moment = require('moment-timezone');
const moment = require('moment');
const momentTimezone = require('moment-timezone');

const parsedTime = moment(new Date())



console.log(parsedTime)
var candidate_interview_start_date = momentTimezone(parsedTime)
.tz('Asia/Kabul')
.format("dddd, DD-MM-YYYY [,] hh:mm a ([GMT]Z)");

console.log(candidate_interview_start_date);
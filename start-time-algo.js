var datetime =
  typeof datetime !== "undefined" ? datetime : "2021-09-02T04:15:00.367Z";

console.log("Start Time:", datetime);
var datetime = new Date(datetime).getTime();

var now = new Date().getTime();
var nowDate = "2021-09-02T03:14:00.367Z";
// var now = new Date(nowDate).getTime();
console.log("Check In Time:", new Date(now));

if (isNaN(datetime)) {
  return "";
}

if (datetime <= now) {
  var milisec_diff = now - datetime;
  // console.log("1");
} else if (datetime > now) {
  var milisec_diff = datetime - now;
  // console.log("2");
}

var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

var date_diff = new Date(milisec_diff);
console.log("Date Time Difference:", date_diff);

let DifferenceInHours = date_diff.getHours() - 5;
let DifferenceInMinutes = date_diff.getMinutes();
let DifferenceInSeconds = date_diff.getSeconds();

console.log("Difference In Hours:", DifferenceInHours);
console.log("Difference In Minutes:", DifferenceInMinutes);
console.log("Difference In Seconds:", DifferenceInSeconds);

let checkInHour = new Date(nowDate).getHours();
let checkInMinute = new Date(nowDate).getMinutes();

checkInHourAndMinute = () => {
  console.log("Check In Hour:", checkInHour);
  console.log("Check In Minute:", checkInMinute);
};

if (checkInHour <= 9) {
  if (checkInMinute <= 15) {
    checkInHourAndMinute();
    console.log("Employee arrived on time.");
    console.log(`Late time is 0 hours and 0 minutes`);
  } else {
    checkInHourAndMinute();
    console.log("Employee don't arrived on time.");
    console.log(
      `Late time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
    );
  }
} else {
  checkInHourAndMinute();
  console.log("Employee don't arrived on time.");
  console.log(
    `Late time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
  );
}

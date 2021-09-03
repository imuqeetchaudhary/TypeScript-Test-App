var datetime =
  typeof datetime !== "undefined" ? datetime : "2021-09-02T04:15:00.367Z";

console.log("Start Time:", datetime);
var datetime = new Date(datetime).getTime();

var now = new Date().getTime();
// var nowDate = "2021-09-02T04:14:00.367Z"
// var now = new Date(nowDate).getTime();
console.log("Check In Time:", new Date(now));

if (isNaN(datetime)) {
  return "";
}

if (datetime <= now) {
  var milisec_diff = now - datetime;
  console.log("1")
} else if (datetime >= now) {
  var milisec_diff = datetime - now;
  console.log("2")
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

checkInHourAndMinute = () => {
  let checkInHour = new Date(now).getHours();
  let checkInMinute = new Date(now).getMinutes();
  console.log("Check In Hour:", checkInHour);
  console.log("Check In Minute:", checkInMinute);

  console.log("Late Hour:", DifferenceInHours);
  console.log("Late Minute:", DifferenceInMinutes);
};

if (DifferenceInHours <= 0) {
  if (DifferenceInMinutes <= 15) {
    checkInHourAndMinute();
  } else {
    checkInHourAndMinute();
  }
} else {
  checkInHourAndMinute();
}

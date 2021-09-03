var datetime =
  typeof datetime !== "undefined" ? datetime : "2021-09-02T12:45:00.367Z";

console.log("Start Time:", datetime);
var datetime = new Date(datetime).getTime();

// var now = new Date().getTime();
var nowDate = "2021-09-02T12:46:00.367Z";
var now = new Date(nowDate).getTime();
console.log("Check In Time:", new Date(now));

if (isNaN(datetime)) {
  return "";
}

if (datetime <= now) {
  // var milisec_diff = datetime - now;
  var milisec_diff = now - datetime;
  console.log("1");
} else if (datetime > now) {
  // var milisec_diff = now - datetime;
  var milisec_diff = datetime - now;
  console.log("2");
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

checkOutHourAndMinute = () => {
  let checkOutHour = new Date(now).getHours();
  let checkOutMinute = new Date(now).getMinutes();
  console.log("Check Out Hour:", checkOutHour);
  console.log("Check Out Minute:", checkOutMinute);
};

if (DifferenceInHours <= 0) {
  if (DifferenceInMinutes <= 15) {
    checkOutHourAndMinute();
  } else {
    checkOutHourAndMinute();
  }
} else {
  checkOutHourAndMinute();
}

//
//
//
//
//
//

// if (checkOut >= 17.55 && checkOut <= 18.0) {
//   checkOut = 18.0;
//   workHours = checkOut - checkIn - 1;
//   overTime = 0;

//   console.log("check Out:", checkOut);
//   console.log("Total Work Hours", workHours);
//   console.log("Over Time", overTime);
// } else {
//   checkOut = checkOut;
//   workHours = checkOut - checkIn - 1;
//   overTime = checkOut - 18;
//   if (overTime < 0) {
//     overTime = 0;
//   }

//   console.log("check Out:", checkOut);
//   console.log("Total Work Hours", workHours);
//   console.log("Over Time", overTime);
// }

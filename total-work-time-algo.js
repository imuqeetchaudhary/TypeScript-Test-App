let checkInHour;
let checkInMinute;
let checkOutHour;
let checkOutMinute;
let totalWorkHour;
let totalWorkMinutes;

employeeCheckIn = () => {
  var datetime =
    typeof datetime !== "undefined" ? datetime : "2021-09-02T04:15:00.367Z";

  console.log("Start Time:", datetime);
  var datetime = new Date(datetime).getTime();

  var now = new Date().getTime();
  var nowDate = "2021-09-02T05:15:00.367Z";
  var now = new Date(nowDate).getTime();
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

  checkInHour = new Date(nowDate).getHours();
  checkInMinute = new Date(nowDate).getMinutes();

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
};

employeeCheckOut = () => {
  var datetime =
    typeof datetime !== "undefined" ? datetime : "2021-09-02T12:45:00.367Z";

  console.log("End Time:", datetime);
  var datetime = new Date(datetime).getTime();

  // var now = new Date().getTime();
  var nowDate = "2021-09-02T13:45:00.367Z";
  var now = new Date(nowDate).getTime();
  console.log("Check Out Time:", new Date(now));

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

  checkOutHour = new Date(now).getHours();
  checkOutMinute = new Date(now).getMinutes();

  checkOutHourAndMinute = () => {
    console.log("Check Out Hour:", checkOutHour);
    console.log("Check Out Minute:", checkOutMinute);
  };

  if (DifferenceInHours <= 0 && checkOutHour <= 18) {
    if (DifferenceInMinutes <= 15) {
      if (checkOutHour >= 17 && checkOutHour <= 18) {
        if (checkOutMinute >= 45 && checkOutMinute <= 59) {
          checkOutHourAndMinute();
          console.log("Employee goes on time.");
          console.log("Over time work:", 0);
        } else if (checkOutMinute < 45) {
          checkOutHourAndMinute();
          console.log("Employee goes before time.");
          console.log(
            `Before time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
          );
        } else {
          checkOutHourAndMinute();
          console.log("Employee goes before time.");
          console.log(
            `Before time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
          );
        }
      }
    } else if (checkOutHour <= 17) {
      if (checkOutMinute <= 45) {
        checkOutHourAndMinute();
        console.log("Employee goes before time.");
        console.log(
          `Before time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
        );
      } else {
        checkOutHourAndMinute();
        console.log("Employee goes before time.");
        console.log(
          `Before time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
        );
      }
    } else {
      checkOutHourAndMinute();
      console.log("Employee goes after time.");
      console.log(
        `Total over time is ${DifferenceInHours} hour and ${DifferenceInMinutes} minutes`
      );
    }
  } else {
    if (checkOutHour > 16) {
      checkOutHourAndMinute();
      console.log("Employee goes after time.");
      console.log(
        `Total over time is ${DifferenceInHours} hour and ${DifferenceInMinutes} minutes`
      );
    } else {
      checkOutHourAndMinute();
      console.log("Employee goes before time.");
      console.log(
        `Before time is ${DifferenceInHours} hours and ${DifferenceInMinutes} minutes`
      );
    }
  }
};

employeeWorkDuration = () => {
  totalWorkHour = checkOutHour - checkInHour;
  totalWorkMinutes = checkOutMinute - checkInMinute;

  console.log(
    `Total work duration including break is ${totalWorkHour - 1} hours and ${totalWorkMinutes} minutes`
  );

    console.log(
      `Total work duration excluding break is ${totalWorkHour} hours and ${totalWorkMinutes} minutes`
    );
};

employeeCheckIn();

console.log();
console.log("===============================================================");
console.log();

employeeCheckOut();

console.log();
console.log("===============================================================");
console.log();

employeeWorkDuration();

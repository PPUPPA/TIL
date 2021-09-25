let day_number = 5;
let day = "";

switch (day_number){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Error";
    break;
}

console.log(day);

let browser = "Chrome";

switch(browser){
  case "Explorer":
    msg = "ActiveX installation required!"
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browsers!";
    break;
  default:
    msg = "Unsupported browsers!";
    break;
}

console.log(msg);
let date_now = new Date();
let date_str = Date();

console.log(typeof date_now);
console.log(date_str);

let date_ms_1 = new Date(0);
console.log(date_ms_1);
let date_ms_2 = new Date(1000*3600*24);
console.log(date_ms_2);

let date_string = new Date("2020-01-01");
console.log(date_string);

// month : 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
date_params_1 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);

let date = new Date(Date.UTC(2021,0,1));

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
// 0-6(일-월)
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(date.getTimezoneOffset());

let ms_year = date.setFullYear(2020, 3, 15);
date.setDate(1);
console.log(date);
date.setDate(0);
console.log(ms_year);

let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse);
console.log(new Date(ms_parse));

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));

// 벤치마크
function dateSub(old_date, new_date){
  return new_date - old_date;
}

function getTimeSub(old_date, new_date){
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func){
  let date_1 = new Date("2020-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for(let i=0;i<100000;i++){
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: "+benchmark(dateSub)+"ms");
console.log("getTimeSub: "+benchmark(getTimeSub)+"ms");

console.log("line\nfeed");
console.log("line\rfeed");
console.log("line\\feed");
console.log("line\tfeed");
console.log("line\u{1F60D}feed");

let str = "hello\nworld\n!!"

console.log(str.length); // 14
console.log(str.charAt(1)); // e
console.log(str.charCodeAt(1)); // 101
console.log(str[0]); // h

console.log(str.indexOf("l"));
console.log(str.indexOf("l",4)); // 찾는 위치 지정
console.log(str.lastIndexOf("l"));

console.log(str.includes("hello"));
console.log(str.includes("HelLo")); // 대소문자 구분
console.log(str.includes("ello"));
console.log(str.startsWith("ello")); // 시작 단어 확인
console.log(str.endsWith("world")); // 마지막 단어 확인

let str2 = "HelLo!!";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

let text = "helLo, world!!";
let change_text = "";

change_text = text.replace("world", "earth");
console.log(change_text);

console.log(text.replace("!","?"));
console.log(text.replace("l","i"));

console.log(text.replace(/l/g,"i"));
console.log(text.replace(/l/gi,"i"));

console.log(text.slice(0, 5));
console.log(text.slice(4, 5));
console.log(text.slice(4));
console.log(text.slice(-4));
console.log(text.slice(6,2)); // 안됨!

console.log(text.substring(6,2));
console.log(text.substring(2,6));

console.log(text.substr(2,6));
console.log(text.substr(-5,3));

let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let hello = "hello";

result = hello.split("");
result2 = hello.split("", 3);
console.log(result);
console.log(result2);
console.log(result2.length);
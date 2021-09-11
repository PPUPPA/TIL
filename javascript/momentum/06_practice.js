// document.title = "Hello! From JS!"

const title = document.getElementById("title");
console.dir(title);
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");

const title = document.getElementsByTagName("h1");

const hellos = document.querySelector(".hello");

document.querySelectorAll(".hello");

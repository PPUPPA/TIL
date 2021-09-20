const h1 = document.querySelector("h1");

function handleTitleClick(){
  console.log("h1 was clicked!");
  h1.style.color = "blue";
}
function handleMouseEnter(){
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("Copier!");
}
function handleWindowOffline(){
  alert("SOS no WIFI");
}
function handleWindowOnline(){
  alert("ALL GOOD!");
}

// h1.style.color = blue;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
console.dir(h1) // 사용 가능한 이벤트 확인 가능, on~ 이벤트로, 이벤트로 사용시 on을 제외하고 넣는다.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

// wifi offline - wifi online check
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
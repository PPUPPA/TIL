const h1 = document.querySelector("h1");

// only javascript
// function handleTitleClick(){
//   const currentColor = h1.style.color;
//   let newColor;
//   if(currentColor === "blue"){
//     newColor = "tomato";
//   }else{
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// with css
// function handleTitleClick(){
//   const clickedClass = "clicked";
//   if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   }else{
//     h1.classList.add(clickedClass);
//   }
// }

// with css more simply
function handleTitleClick(){
  h1.classList.toggle("clicked");
}

// h1.style.color = blue;
h1.addEventListener("click", handleTitleClick);

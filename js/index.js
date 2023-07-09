//Creating the variable

let blank = "";
let solve = document.getElementsByClassName("button");
let solve1 = document.getElementsByClassName("btn");
let solve2 = document.getElementById("btn1");
let solve3 = document.getElementById("btn2");
let solve4 = document.getElementById("btn3");
// let solve2 = document.getElementsByClassName("btn1");
// let solve3 = document.getElementsByClassName("btn2");
// let solve4 = document.getElementsByClassName("btn3");

//Using Arrays formation method for same class buttons
Array.from(solve).forEach((button) => {
  button.addEventListener("click", (e) => {
    blank = blank + e.target.innerText;
    document.querySelector("input").value = blank;
  });
});
Array.from(solve1).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    blank = blank + e.target.innerText;
    document.querySelector("input").value = blank;
  });
});

// using normal click  method as id's are given
solve2.addEventListener("click", ()=>{
  blank = eval(blank);
  document.querySelector("input").value = blank;
})

solve3.addEventListener("click",()=>{
  blank = "";
  document.querySelector("input").value = blank;
})

solve4.addEventListener("click",()=>{
  blank = blank.toString().slice(0,-1);
  document.querySelector("input").value = blank;
})
// Long Method to solve this part

// Array.from(solve2).forEach((btn1) => {
//   btn1.addEventListener("click", () => {
//     blank = eval(blank);
//     document.querySelector("input").value = blank;
//   });
// });
// Array.from(solve3).forEach((btn2) => {
//   btn2.addEventListener("click", () => {
//     blank = "";
//     document.querySelector("input").value = blank;
//   });
// });
// Array.from(solve4).forEach((btn3) => {
//   btn3.addEventListener("click", () => {
//     blank = blank.toString().slice(0, -1);
//     document.querySelector("input").value = blank;
//   });
// });

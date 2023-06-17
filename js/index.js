let blank = "";
let solve = document.getElementsByClassName("button");
let solve1 = document.getElementsByClassName("btn");
let solve2 = document.getElementsByClassName("btn1");
let solve3 = document.getElementsByClassName("btn2");
let solve4 = document.getElementsByClassName("btn3");
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
Array.from(solve2).forEach((btn1) => {
  btn1.addEventListener("click", (e) => {
    blank = eval(blank);
    document.querySelector("input").value = blank;
  });
});
Array.from(solve3).forEach((btn2) => {
  btn2.addEventListener("click", (e) => {
    blank = "";
    document.querySelector("input").value = blank;
  });
});
Array.from(solve4).forEach((btn3) => {
  btn3.addEventListener("click", (e) => {
    blank = blank.toString().slice(0, -1);
    document.querySelector("input").value = blank;
  });
});

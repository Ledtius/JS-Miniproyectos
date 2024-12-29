const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

/* Arrays que permitiran operar */
let count = [];
let arrayA = [];
let arrayB = [];

// $numbers.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log(element.textContent.trim());
//   });
// });

$entry.forEach((element) => {
  element.addEventListener("click", () => {
    arrayA.push(element.textContent.trim())
    console.log(arrayA);
  });
});

// $dot.addEventListener("click", () => {
//   count.push($dot.textContent.trim());

//   console.log(count);
//   if (count.length > 3) {
//     return;
//   }
//   console.log(`Number of press 'dot': ${count.length}`);
// });

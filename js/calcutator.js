const $calculator = document.querySelector(".calculator");

const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

$calculator.addEventListener("click", (event) => {
  let arrayValue = [];
  let count = 0;
  const targetNumber = event.target.classList.contains(
    "calculator__btn--number"
  );

  const numbersText = event.target.textContent.trim();

//   arrayValue.push(numbersText);




  arrayValue[0].push(numbersText);

//   while (targetNumber) {
//     count++;
//     console.log(count);
//   }

  const targetSymbol = event.target.classList.contains(
    "calculator__btn--symbol"
  );

  const targetSpecial = event.target.classList.contains(
    "calculator__btn--special"
  );

  console.log(targetSymbol);

  if (targetNumber) {
    count += 1;

    // console.log(count);

    // console.log(inputString * 2);
    console.log(numbersText);
  }
});

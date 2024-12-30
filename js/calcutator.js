const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

/* Arrays que permitiran operar */
let count = [];
let arrayA = [];
let arrayB = [];
let arrayC = [];

// $numbers.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log(element.textContent.trim());
//   });
// });

$entry.forEach((element) => {
  element.addEventListener("click", () => {
    let entryValue = element.textContent.trim();

    arrayA.push(entryValue);
    // console.log(arrayA);

    // arrayAText = arrayA.join("");

    // console.log(arrayAText);

    const indexArrayAPlus = arrayA.findIndex((element) => element === "+");

    const indexArrayAMinus = arrayA.findIndex((element) => element === "-");

    const indexArrayAMult = arrayA.findIndex((element) => element === "*");

    const indexArrayADivi = arrayA.findIndex((element) => element === "/");

    const indexArrayAAllSymbols = arrayA.findIndex(
      (element) =>
        element === "+" || element === "-" || element === "*" || element === "/"
    );

    const divideArray = arrayA.slice(indexArrayAAllSymbols + 1, arrayA.length);

    const divideArray2 = arrayA.slice(0, indexArrayAAllSymbols);

    const divideArray2Text = divideArray2.join("");

    console.log(divideArray2);
    console.log(divideArray2Text);

    const operations = () => {
      const arrayAText = Number(arrayA.join(""));
      const divideArrayText = divideArray.join("");

      console.log(arrayAText);
      const resultArrayASymbol = arrayA.slice(
        indexArrayAAllSymbols,
        indexArrayAAllSymbols + 1
      );

      const resultArrayASymbolText = resultArrayASymbol.join("");

      if (resultArrayASymbolText !== "") {
        switch (resultArrayASymbolText) {
          case "+":
            console.log;
            break;

          default:
            break;
        }
      }

      // console.log(resultArrayASymbol);
      console.log(resultArrayASymbolText);
      // console.log(arrayAText);
      // console.log(divideArrayText);
    };

    operations();
    // const indexDivideArrayOtherSymbols = divideArray.indexOf(element => element === "");

    // console.log(indexArrayAllSymbols);
    // console.log(divideArray);

    // if(indexArrayPlus || indexArrayMinus || indexArrayMult || indexArrayDivi == -1){
    //   console.log("Find it!");
    // }
  });
});

$equals.addEventListener("click", () => {
  event.preventDefault;
});
// $dot.addEventListener("click", () => {
//   count.push($dot.textContent.trim());

//   console.log(count);
//   if (count.length > 3) {
//     return;
//   }
//   console.log(`Number of press 'dot': ${count.length}`);
// });

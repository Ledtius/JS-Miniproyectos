const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

/* Arrays que permitiran operar */
let count = [];
let arrayMain = [];
let arrayB = [];
let arrayC = [];

// $numbers.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log(element.textContent.trim());
//   });
// });

let prove = $entry.forEach((element) => {
  element.addEventListener("click", () => {
    let entryValue = element.textContent.trim();

    arrayMain.push(entryValue);
    /* AM = arrayMain */

    const arrayMainText = arrayMain.join("");

    const indexAMPlus = arrayMain.findIndex((element) => element === "+");

    const indexAMMinus = arrayMain.findIndex((element) => element === "-");

    const indexAMMult = arrayMain.findIndex((element) => element === "*");

    const indexAMDivi = arrayMain.findIndex((element) => element === "/");

    const indexAMAllSymbols = arrayMain.findIndex(
      (element) =>
        element === "+" || element === "-" || element === "*" || element === "/"
    );

  
      
      const divideAM = arrayMain.slice(0, indexAMAllSymbols);

      const divideAMText = divideAM.join("");

      const divideAM2 = arrayMain.slice(
        indexAMAllSymbols + 1,
        arrayMain.length
      );

      const divideAM2Text = divideAM2.join("");

      const valueAMAllSymbol = arrayMain.slice(
        indexAMAllSymbols,
        indexAMAllSymbols + 1
      );

      const valueAMAllSymbolText = valueAMAllSymbol.join("");

      // console.log(divideAM2);
      // console.log(`Array A: ${arrayMain}`);
      console.log(`Array N°1: ${divideAMText}`);
      console.log(`Array N°2: ${divideAM2Text}`);
      console.log(`Symbol choise: ${valueAMAllSymbolText}`);
    
    const operations = () => {
      event.preventDefault;

      if (valueAMAllSymbolText !== "") {
        switch (valueAMAllSymbolText) {
          case "+":
            console.log(
              `${divideAMText} + ${divideAM2Text} = ${
                Number(divideAMText) + Number(divideAM2Text)
              }`
            );
            break;
          case "-":
            console.log(
              `${divideAMText} - ${divideAM2Text} = ${Number(
                divideAMText - divideAM2Text
              )}`
            );
            break;
          case "*":
            console.log(
              `${divideAMText} * ${divideAM2Text} = ${Number(
                divideAMText * divideAM2Text
              )}`
            );
            break;
          case "/":
            console.log(
              `${divideAMText} / ${divideAM2Text} = ${Number(
                divideAMText / divideAM2Text
              )}`
            );
            break;

          default:
            break;
        }
      }

      // console.log(valueAMAllSymbol);
      // console.log(valueAMAllSymbolText);
      // console.log(arrayMainText);
      // console.log(divideAMText);
    };

    operations();
    // const indexDivideArrayOtherSymbols = divideAM.indexOf(element => element === "");

    // console.log(indexArrayAllSymbols);
    // console.log(divideAM);

    // if(indexArrayPlus || indexArrayMinus || indexArrayMult || indexArrayDivi == -1){
    //   console.log("Find it!");
    // }
  });
});

console.log(prove);

// $equals.addEventListener("click", () => {
// });
// $dot.addEventListener("click", () => {
//   count.push($dot.textContent.trim());

//   console.log(count);
//   if (count.length > 3) {
//     return;
//   }
//   console.log(`Number of press 'dot': ${count.length}`);
// });

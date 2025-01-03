const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

/* 
Llamar las variables numericas
Recorrerlas en el forEach{

necesito que retorne el valor del array cuando se precione el simbolo

}


*/

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

$entry.forEach((element) => {
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

    const divideAM2 = arrayMain.slice(indexAMAllSymbols + 1, arrayMain.length);

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

    $equals.addEventListener(
      "click",
      (equals = () => {
        event.preventDefault;
        let value;
        if (valueAMAllSymbolText !== "") {
          switch (valueAMAllSymbolText) {
            case "+":
              console.log(
                `${divideAMText} + ${divideAM2Text} = ${
                  Number(divideAMText) + Number(divideAM2Text)
                }`
              );
              return (value = divideAMText + divideAM2Text);
            case "-":
              console.log(
                `${divideAMText} - ${divideAM2Text} = ${Number(
                  divideAMText - divideAM2Text
                )}`
              );
              return (value = divideAMText - divideAM2Text);
            case "*":
              console.log(
                `${divideAMText} * ${divideAM2Text} = ${Number(
                  divideAMText * divideAM2Text
                )}`
              );
              return (value = divideAMText * divideAM2Text);
            case "/":
              console.log(
                `${divideAMText} / ${divideAM2Text} = ${Number(
                  divideAMText / divideAM2Text
                )}`
              );
              return (value = divideAMText / divideAM2Text);

            default:
              return (value = 0);
          }
        }
      })
    );

    // console.log(valueAMAllSymbol);
    // console.log(valueAMAllSymbolText);
    // console.log(arrayMainText);
    // console.log(divideAMText);

    operations();
    // const indexDivideArrayOtherSymbols = divideAM.indexOf(element => element === "");

    // console.log(indexArrayAllSymbols);
    // console.log(divideAM);

    // if(indexArrayPlus || indexArrayMinus || indexArrayMult || indexArrayDivi == -1){
    //   console.log("Find it!");
    // }
  });
});

console.log(equals);
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

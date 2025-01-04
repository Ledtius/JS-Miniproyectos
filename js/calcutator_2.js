const $numbers = document.querySelectorAll(".calculator__btn--number");

const $symbols = document.querySelectorAll(".calculator__btn--symbol");

const $dot = document.querySelector(".calculator__btn--dot");

const $equals = document.querySelector(".calculator__btn--equals");

const $entry = document.querySelectorAll(".calculator__btn--entry");

/* Creamos los arrays que van a almacenar los respectios valores */
let arrayMix = [];
let arrayValueN1 = [];
let arrayValueN2 = [];

$entry.forEach((element) => {
  element.addEventListener(
    "click",
    (please = () => {
      console.log(element.textContent.trim());

      arrayMix.push(element.textContent.trim());
      let cut = arrayMix.findIndex((element) => element === "+");

      console.log(cut);

      arrayValueN1 = arrayMix.slice(0, cut);
      console.log(arrayValueN1);

      if (cut !== -1) {
        console.log("Different");
        return arrayValueN1;
      }
    })
  );

  let pleaseValue = please();

  console.log(pleaseValue);
});

/* 
Llamar las variables numericas
Recorrerlas en el forEach{

necesito que retorne el valor del array cuando se precione el simbolo

}

*/

/*
1) Pedir un valor numerico
2) Validar que sea correcto
2.1) No permitir que pueda escribir como primer caracter los operadores matimaticos como: "+", "*" y "/".
3) Pedir la operacion a realiar
4) Pedir otro valor numerico










*/

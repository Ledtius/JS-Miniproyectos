const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

const $btns = document.querySelectorAll(".calculator__btn");

const sound = new Audio("/calculator/sound/botton.mp3");

const $history = document.querySelector(".history__box");

let variable = "";

$calculator.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target.classList.contains("calculator__btn");

  const targetNumber = event.target.classList.contains(
    "calculator__btn--number"
  );

  const targetOperator = event.target.classList.contains(
    "calculator__btn--symbol"
  );

  const targetEquals = event.target.classList.contains(
    "calculator__btn--equals"
  );

  const targetDot = event.target.classList.contains("calculator__btn--dot");

  const targetDelete = event.target.classList.contains(
    "calculator__btn--delete"
  );

  const targetReset = event.target.classList.contains("calculator__btn--reset");

  let valueTarget = event.target.textContent.trim();

  let operation = () => {
    if (
      targetNumber ||
      targetDot ||
      targetOperator ||
      targetEquals ||
      targetReset ||
      targetDelete
    ) {
      $display.style.color = "black ";
      sound.play();
      if (targetNumber || targetDot || targetOperator) {
        variable += valueTarget;
        $display.innerText = variable;
      }
      if (targetEquals) {
        let historyOperation = `          <div class="history__element">
            <strong class="history__operation">
              ${variable} = ${eval(variable)} 
            </strong>
            <div class="history__btns">
              <button class="history__btn history__btn--copy">
                <svg
                  class="history__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
                  />
                </svg>
              </button>
              <button class="history__btn history__btn--delete">
                <svg
                  class="history__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                  />
                </svg>
              </button>
            </div>
          </div>`;

        $history.innerHTML += historyOperation;
        try {
          variable = eval(variable);
          $display.innerText = variable;
        } catch (error) {
          variable = "Syntax Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "Infinity") {
          console.log("Entro");
          variable = "Math Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "NaN") {
          variable = "Math Error";
          console.log("Entro1");
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "undefined") {
          variable = "Math Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
      }

      if (targetDelete) {
        variable = "";
        $display.innerText = variable;
      }

      if (targetReset) {
        if (variable.length < 1) {
          variable = "";
        }

        variable = variable.slice(0, variable.length - 1);
        $display.innerText = variable;
      }
    }
  };
  operation();
});

const $calculator = document.querySelector(".calculator");

const $entries = document.querySelectorAll(".calculator__btn--entry");

$calculator.addEventListener("click", (e) => {
  e.preventDefault();
  const entries = e.target.classList.contains("calculator__btn--entry");

  extractValue($entries);
});

function extractValue($HTMLElements) {
  $HTMLElements.forEach(($element, index) => {
    $element.addEventListener("click", (e) => {
      e.stopPropagation();

      console.log($element.value);
    });
  });
}

// array.forEach((element) => {});

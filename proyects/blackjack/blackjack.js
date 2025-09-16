const $deskPlayer = document.querySelectorAll(".card-content__cards")[0];

const $deskPc = document.querySelectorAll(".card-content__cards")[1];

const $newGameBtn = document.querySelector(".btn--new");

const $askCardBtn = document.querySelector(".btn--draw");

const $stopBtn = document.querySelector(".btn--stop");

const $pointsPlayer = document.querySelectorAll(".card-content__pts-value")[0];

const $pointsPc = document.querySelectorAll(".card-content__pts-value")[1];

const $pointsContent = document.querySelector(".card-content__pts");

const $pointsTitle = document.querySelector(".card-content__pts-title");

const $pointsValue = document.querySelector(".card-content__pts-value");

let deck = [];
let lastPoint = 0;

const createDeck = () => {
  const types = ["C", "D", "H", "S"];
  const specials = ["A", "J", "K", "Q"];

  for (let index = 2; index <= 10; index++) {
    for (const type of types) {
      deck.push(index + type);
    }
  }

  for (const special of specials) {
    for (const type of types) {
      deck.push(special + type);
    }
  }

  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

createDeck();

const askCard = () => {
  if (deck.length === 0) {
    throw "No cards in the desk";
  }

  const card = deck.shift();

  return card;
};

const cardValue = (card) => {
  let value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

console.log(cardValue(askCard()));

const handleAskCard = () => {
  const $card = document.createElement("img");
  $card.className = "card-content__card";
  const card = askCard();
  console.log(card);
  $card.src = `assets/cards/${card}.png`;
  $deskPlayer.append($card);

  pointsOperation($pointsPlayer, cardValue(card));
};

$askCardBtn.addEventListener("click", handleAskCard);

function pointsOperation($points, points) {
  lastPoint += points;

  const $spanMessage = document.createElement("span");
  $spanMessage.className = "card-content__messague";
  $spanMessage.innerText = "!Has perdido¡";

  if (lastPoint > 21) {
    $pointsTitle.remove();
    $pointsValue.remove();

    $askCardBtn.removeEventListener("click", handleAskCard);

    $pointsContent.append($spanMessage);

    $points.innerText = "sss";
    // $deskPlayer.append($spanMessage)
  }

  $points.innerText = lastPoint;
}

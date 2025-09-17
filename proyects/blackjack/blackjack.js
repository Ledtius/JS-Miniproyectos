const $deckPlayer = document.querySelectorAll(".card-content__cards")[0];

const $deckPc = document.querySelectorAll(".card-content__cards")[1];

const $newGameBtn = document.querySelector(".btn--new");

const $askCardBtn = document.querySelector(".btn--draw");

const $stopBtn = document.querySelector(".btn--stop");

const $pointsPlayer = document.querySelectorAll(".card-content__pts-value")[0];

const $pointsPc = document.querySelectorAll(".card-content__pts-value")[1];

const $pointsContentMessage = document.querySelector(
  ".card-content__pts-content-message"
);
const $pointsContentMessageAll = document.querySelectorAll(
  ".card-content__pts-content-message"
);

let deck = [];
let lastPointValuePlayer = 0;
let lastPointValuePc = 0;

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
    throw "No cards in the deck";
  }

  const card = deck.shift();

  return card;
};

const cardValue = (card) => {
  let value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

const createCard = () => {
  const $card = document.createElement("img");
  $card.className = "card-content__card";

  const card = askCard();

  $card.src = `assets/cards/${card}.png`;

  const pointValue = cardValue(card);

  return { $card, card, pointValue };
};

const handleAskCardPlayer = () => {
  const { $card, card, pointValue } = createCard();

  $deckPlayer.append($card);

  // pointsOperation($pointsPlayer, cardValue(card));

  console.log(card, pointValue);
  // console.table([].push(lastPointValuePlayer, card));

  lastPointValuePlayer += pointValue;

  $pointsPlayer.innerText = lastPointValuePlayer;

  if (lastPointValuePlayer >= 21) {
    $askCardBtn.removeEventListener("click", handleAskCardPlayer);
    createPcDeck();

    if (lastPointValuePlayer === 21 && lastPointValuePc !== 21) {
      createMessage("¡Has ganado¡", "#27ae60", 0);
      createMessage("¡Has perdido¡", "red", 1);
    } else if (lastPointValuePlayer !== 21 && lastPointValuePc === 21) {
      createMessage("¡Has perdido¡", "red", 0);
      createMessage("¡Has ganado¡", "#27ae60", 1);
    } else if (lastPointValuePlayer !== 21 && lastPointValuePc !== 21) {
      createMessage("¡Has perdido¡", "red", 0);
      createMessage("¡Has perdido¡", "red", 1);
    }
  }

  if (lastPointValuePc === 21 && lastPointValuePlayer === 21) {
    createMessage("¡Empate¡", "orange", 0);
    createMessage("¡Empate¡", "orange", 1);
  }
};

const handleStopAskCardPlayer = () => {
  $askCardBtn.removeEventListener("click", handleAskCardPlayer);

  createPcDeck();

  console.log({ lastPointValuePc, lastPointValuePlayer });

  if (lastPointValuePc > 21) {
    createMessage("¡Has ganado¡", "#27ae60", 0);
    createMessage("¡Has perdido¡", "red", 1);
  } else if (lastPointValuePc === 21 && lastPointValuePlayer !== 21) {
    createMessage("¡Has ganado¡", "#27ae60", 1);
    createMessage("¡Has perdido¡", "red", 0);
  }
};

function createMessage(text, color, index) {
  const $spanMessage = document.createElement("span");
  $spanMessage.className = "card-content__message";
  $spanMessage.style.color = color;
  $spanMessage.innerText = text;
  $pointsContentMessageAll[index].append($spanMessage);
}

function newGame() {
  lastPointValuePlayer = 0;
  lastPointValuePc = 0;

  $pointsPlayer.innerText = lastPointValuePlayer;
  $pointsPc.innerText = lastPointValuePc;

  if ($pointsContentMessageAll[0].children.length > 0) {
    $pointsContentMessageAll[0].children[0].remove();
    $pointsContentMessageAll[1].children[0].remove();
  }

  const $arrayCardsPc = $deckPc.children;
  const $arrayCardsPlayer = $deckPlayer.children;

  const oldLentPc = $arrayCardsPc.length;
  const oldLentPlayer = $arrayCardsPlayer.length;

  for (let i = 0; i < oldLentPc; i++) {
    $arrayCardsPc[0].remove();
  }

  for (let i = 0; i < oldLentPlayer; i++) {
    $arrayCardsPlayer[0].remove();
  }

  deck = [];

  deck = createDeck();

  $askCardBtn.addEventListener("click", handleAskCardPlayer);
}

$newGameBtn.addEventListener("click", newGame);

function createPcDeck() {
  while (lastPointValuePc < 21) {
    const { $card, card, pointValue } = createCard();
    $deckPc.append($card);

    console.log(card, pointValue);

    lastPointValuePc += pointValue;

    $pointsPc.innerText = lastPointValuePc;
  }
}

$askCardBtn.addEventListener("click", handleAskCardPlayer);

$stopBtn.addEventListener("click", handleStopAskCardPlayer);

function pointsOperation($points, pointValue) {
  lastPointValuePlayer += pointValue;

  const $spanMessage = document.createElement("span");
  $spanMessage.className = "card-content__message";
  $spanMessage.innerText = "¡Has perdido!";

  if (lastPointValuePlayer > 21) {
    $askCardBtn.removeEventListener("click", handleAskCardPlayer);

    $pointsContentMessage.append($spanMessage);
  } else if (lastPointValuePlayer === 21) {
    $askCardBtn.removeEventListener("click", handleAskCardPlayer);
    $spanMessage.style.color = "#27ae60";
    $spanMessage.innerText = "¡Has ganado!";
    $pointsContentMessage.append($spanMessage);
  }

  $points.innerText = lastPointValuePlayer;
}

$newGameBtn.addEventListener("click", handleNewGame);

function handleNewGame() {
  if ($pointsContentMessage.children.length > 0) {
    $pointsContentMessage.children[0].remove();
  }
  lastPointValuePlayer = 0;
  $pointsPlayer.innerText = lastPointValuePlayer;
}

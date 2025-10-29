// import "/src/projects/blackjack/assets/cards/10C.png";
// import "/src/projects/blackjack/assets/cards/10D.png";
// import "/src/projects/blackjack/assets/cards/10H.png";
// import "/src/projects/blackjack/assets/cards/10S.png";
// import "/src/projects/blackjack/assets/cards/2C.png";
// import "/src/projects/blackjack/assets/cards/2D.png";
// import "/src/projects/blackjack/assets/cards/2H.png";
// import "/src/projects/blackjack/assets/cards/2S.png";
// import "/src/projects/blackjack/assets/cards/3C.png";
// import "/src/projects/blackjack/assets/cards/3D.png";
// import "/src/projects/blackjack/assets/cards/3H.png";
// import "/src/projects/blackjack/assets/cards/3S.png";
// import "/src/projects/blackjack/assets/cards/4C.png";
// import "/src/projects/blackjack/assets/cards/4D.png";
// import "/src/projects/blackjack/assets/cards/4H.png";
// import "/src/projects/blackjack/assets/cards/4S.png";
// import "/src/projects/blackjack/assets/cards/5C.png";
// import "/src/projects/blackjack/assets/cards/5D.png";
// import "/src/projects/blackjack/assets/cards/5H.png";
// import "/src/projects/blackjack/assets/cards/5S.png";
// import "/src/projects/blackjack/assets/cards/6C.png";
// import "/src/projects/blackjack/assets/cards/6D.png";
// import "/src/projects/blackjack/assets/cards/6H.png";
// import "/src/projects/blackjack/assets/cards/6S.png";
// import "/src/projects/blackjack/assets/cards/7C.png";
// import "/src/projects/blackjack/assets/cards/7D.png";
// import "/src/projects/blackjack/assets/cards/7H.png";
// import "/src/projects/blackjack/assets/cards/7S.png";
// import "/src/projects/blackjack/assets/cards/8C.png";
// import "/src/projects/blackjack/assets/cards/8D.png";
// import "/src/projects/blackjack/assets/cards/8H.png";
// import "/src/projects/blackjack/assets/cards/8S.png";
// import "/src/projects/blackjack/assets/cards/9C.png";
// import "/src/projects/blackjack/assets/cards/9D.png";
// import "/src/projects/blackjack/assets/cards/9H.png";
// import "/src/projects/blackjack/assets/cards/9S.png";
// import "/src/projects/blackjack/assets/cards/AC.png";
// import "/src/projects/blackjack/assets/cards/AD.png";
// import "/src/projects/blackjack/assets/cards/AH.png";
// import "/src/projects/blackjack/assets/cards/AS.png";
// // import "/src/projects/blackjack/assets/cards/grey_back.png";
// import "/src/projects/blackjack/assets/cards/JC.png";
// import "/src/projects/blackjack/assets/cards/JD.png";
// import "/src/projects/blackjack/assets/cards/JH.png";
// import "/src/projects/blackjack/assets/cards/JS.png";
// import "/src/projects/blackjack/assets/cards/KC.png";
// import "/src/projects/blackjack/assets/cards/KD.png";
// import "/src/projects/blackjack/assets/cards/KH.png";
// import "/src/projects/blackjack/assets/cards/KS.png";
// import "/src/projects/blackjack/assets/cards/QC.png";
// import "/src/projects/blackjack/assets/cards/QD.png";
// import "/src/projects/blackjack/assets/cards/QH.png";
// import "/src/projects/blackjack/assets/cards/QS.png";
// import "/src/projects/blackjack/assets/cards/red_back.png";

const images = import.meta.glob("./assets/cards/*.png", {
  eager: true,
  as: "url",
});

// import _ from "underscore";

const $decks = document.querySelectorAll(".card-content__cards");

const $deckPlayer = document.querySelectorAll(".card-content__cards")[0];

const $deckPc = document.querySelectorAll(".card-content__cards")[1];

const $newGameBtn = document.querySelector(".btn--new");

const $askCardBtn = document.querySelector(".btn--draw");

const $stopBtn = document.querySelector(".btn--stop");

// const $pointsAllPlayers = document.querySelectorAll(
//   ".card-content__pts-value"
// );

const $pointsPlayer = document.querySelectorAll(".card-content__pts-value")[0];

const $pointsPc = document.querySelectorAll(".card-content__pts-value")[1];

// const $pointsContentMessage = document.querySelector(
//   ".card-content__pts-content-message"
// );
const $pointsContentMessageAll = document.querySelectorAll(
  ".card-content__pts-content-message"
);

let deck = [];

let pointPlayers = [];

const gameMessages = [
  { message: "¡Has ganado¡", color: "#27ae60" },
  { message: "¡Has perdido¡", color: "red" },
  { message: "¡Empate¡", color: "orange" },
];

const winMessage = gameMessages[0].message;

const winColor = gameMessages[0].color;

const lostMessage = gameMessages[1].message;

const lostColor = gameMessages[1].color;

const drawMessage = gameMessages[2].message;

const drawColor = gameMessages[2].color;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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

  return shuffleArray(deck);
};

const numberOfPlayers = (playerNumber) => {
  for (let index = 0; index < playerNumber; index++) {
    pointPlayers.push(0);
  }
};

const initializedGame = (playerNumber) => {
  deck = createDeck();
  numberOfPlayers(playerNumber);

  console.log(deck);
};

initializedGame(2);

const askCard = () => {
  if (deck.length === 0) {
    throw "No cards in the deck";
  }

  return deck.shift();
};

const extractPointCard = (card) => {
  let value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

/* Production Mapper */
const cardMap = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const file = path.split("/").pop(); // "AS.png"
    const name = file.replace(/\.[^/.]+$/, ""); // "AS"
    return [name, url];
  })
);

const createCard = () => {
  const $card = document.createElement("img");
  $card.className = "card-content__card";

  const cardName = askCard();

  const resolved = cardMap[cardName] || `/cards/${cardName}.png`;

  // $card.src = `/src/projects/blackjack/assets/cards/${cardName}.png`;

  $card.src = resolved;

  const pointCard = extractPointCard(cardName);

  return { $card, cardName, pointCard };
};

const countPoints = (playerXTurn, pointCard, $pointPlayerX) => {
  const points = (pointPlayers[playerXTurn] += pointCard);

  $pointPlayerX.innerText = points;
  return points;
};

const handleAskCardPlayer = () => {
  let pointCardPlayer;
  const { $card, pointCard } = createCard();

  $deckPlayer.append($card);

  pointCardPlayer = countPoints(0, pointCard, $pointsPlayer);

  if (pointCardPlayer >= 21) {
    createPcDeck(pointCardPlayer);
  }
};

function createPcDeck(pointCardPlayer) {
  let pointCardPc;
  console.log(pointCardPlayer);

  do {
    const { $card, pointCard } = createCard();

    pointCardPc = countPoints(pointPlayers.length - 1, pointCard, $pointsPc);

    $deckPc.append($card);

    console.log({ pointCardPc, pointCardPlayer });
  } while (pointCardPc < pointCardPlayer && pointCardPlayer <= 21);

  if (pointCardPlayer > 21) {
    createMessage(lostMessage, lostColor, 0);
    createMessage(winMessage, winColor, pointPlayers.length - 1);
  } else if (pointCardPlayer > pointCardPc) {
    createMessage(winMessage, winColor, 0);
    createMessage(lostMessage, lostColor, pointPlayers.length - 1);
  } else if (pointCardPlayer < pointCardPc && pointCardPc <= 21) {
    createMessage(lostMessage, lostColor, 0);
    createMessage(winMessage, winColor, pointPlayers.length - 1);
  } else if (pointCardPlayer < pointCardPc && pointCardPc > 21) {
    createMessage(winMessage, winColor, 0);
    createMessage(lostMessage, lostColor, pointPlayers.length - 1);
  } else if (pointCardPlayer === pointCardPc) {
    createMessage(drawMessage, drawColor, pointPlayers.length - 1);
    createMessage(drawMessage, drawColor, 0);
  } else if (pointCardPlayer === 21 && pointCardPc !== 21) {
    createMessage(winMessage, winColor, 0);
    createMessage(lostMessage, lostColor, pointPlayers.length - 1);
  }

  $askCardBtn.disabled = true;
  $stopBtn.disabled = true;
}

function handleStopAskCardPlayer() {
  const lengthArrayCardsOfPlayer = $deckPlayer.children.length;

  const pointCardPlayer = pointPlayers[0];

  if (lengthArrayCardsOfPlayer !== 0) {
    $askCardBtn.disabled = true;

    createPcDeck(pointCardPlayer);
  }
}

function createMessage(text, color, index) {
  const $spanMessage = document.createElement("span");

  $spanMessage.className = "card-content__message";

  $spanMessage.style.color = color;

  $spanMessage.innerText = text;

  $pointsContentMessageAll[index].append($spanMessage);
}

function newGame() {
  deck = [];

  pointPlayers = [];

  initializedGame(2);

  $pointsPlayer.innerText = pointPlayers[0];

  $pointsPc.innerText = pointPlayers[pointPlayers.length - 1];

  deleteMessage();

  deleteCards($decks, 0);
  deleteCards($decks, 1);

  $askCardBtn.disabled = false;
  $stopBtn.disabled = false;
}

function deleteMessage() {
  if ($pointsContentMessageAll[0].children.length !== 0) {
    $pointsContentMessageAll[0].children[0].remove();
    $pointsContentMessageAll[1].children[0].remove();
  }
}

function deleteCards($deckOfPlayers, index) {
  const $arrayCardsOfPlayerX = $deckOfPlayers[index].children;

  const lengthOfDesk = $arrayCardsOfPlayerX.length;

  for (let i = 0; i < lengthOfDesk; i++) {
    $arrayCardsOfPlayerX[0].remove();
  }
}

$newGameBtn.addEventListener("click", newGame);

$askCardBtn.addEventListener("click", handleAskCardPlayer);

$stopBtn.addEventListener("click", handleStopAskCardPlayer);

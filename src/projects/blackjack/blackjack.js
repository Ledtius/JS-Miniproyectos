import _ from "underscore";

window.bjModule = (() => {
  const $decks = document.querySelectorAll(".card-content__cards");

  const $deckPlayer = document.querySelectorAll(".card-content__cards")[0];

  const $deckPc = document.querySelectorAll(".card-content__cards")[1];

  const $newGameBtn = document.querySelector(".btn--new");

  const $askCardBtn = document.querySelector(".btn--draw");

  const $stopBtn = document.querySelector(".btn--stop");

  const $pointsAllPlayers = document.querySelectorAll(
    ".card-content__pts-value"
  );

  const $pointsPlayer = document.querySelectorAll(
    ".card-content__pts-value"
  )[0];

  const $pointsPc = document.querySelectorAll(".card-content__pts-value")[1];

  const $pointsContentMessage = document.querySelector(
    ".card-content__pts-content-message"
  );
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

    return _.shuffle(deck);
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

  const createCard = () => {
    const $card = document.createElement("img");
    $card.className = "card-content__card";

    const cardName = askCard();

    $card.src = `assets/cards/${cardName}.png`;

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

  return {
    initializedGame,
  };
})();

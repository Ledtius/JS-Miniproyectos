(() => {
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
  let pointCardPlayer = 0;
  let pointCardPc = 0;

  let pointPlayers = [];

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

  const countPoints = (playerTurn, pointCard) => {
    return (pointPlayers[playerTurn] += pointCard);
  };

  const handleAskCardPlayer = () => {
    const { $card, pointCard } = createCard();

    $deckPlayer.append($card);

    pointCardPlayer = countPoints(0, pointCard);

    $pointsPlayer.innerText = pointCardPlayer;

    // if (pointCardPlayer >= 21) {
    //   $askCardBtn.removeEventListener("click", handleAskCardPlayer);
    //   createPcDeck();

    //   if (pointCardPlayer > 21)
    //     if (pointCardPlayer === 21 && pointCardPc !== 21) {
    //       createMessage("¡Has ganado¡", "#27ae60", 0);
    //       createMessage("¡Has perdido¡", "red", 1);
    //     } else if (pointCardPlayer !== 21 && pointCardPc === 21) {
    //       createMessage("¡Has perdido¡", "red", 0);
    //       createMessage("¡Has ganado¡", "#27ae60", 1);
    //     } else if (pointCardPlayer !== 21 && pointCardPc !== 21) {
    //       createMessage("¡Has perdido¡", "red", 0);
    //       createMessage("¡Has perdido¡", "red", 1);
    //     }
    // }

    // if (pointCardPc === 21 && pointCardPlayer === 21) {
    //   createMessage("¡Empate¡", "orange", 0);
    //   createMessage("¡Empate¡", "orange", 1);
    // }

    if (pointCardPlayer > 21) {
      createPcDeck();
    }
  };

  function createPcDeck() {
    do {
      const { $card, cardName, pointCard } = createCard();

      pointCardPc = countPoints(pointPlayers.length - 1, pointCard);

      $deckPc.append($card);

      console.log(cardName, pointCard);

      // pointCardPc += pointCard;

      $pointsPc.innerText = pointCardPc;
    } while (pointCardPc <= pointCardPlayer && pointCardPc <= 21);
  }

  function handleStopAskCardPlayer() {
    $askCardBtn.removeEventListener("click", handleAskCardPlayer);

    createPcDeck();

    console.log({ pointCardPc, pointCardPlayer });

    // if ($pointsContentMessageAll[0].children.length === 0) {
    //   if (pointCardPc > 21) {
    //     createMessage("¡Has ganado¡", "#27ae60", 0);
    //     createMessage("¡Has perdido¡", "red", 1);
    //   } else if (pointCardPc === 21 && pointCardPlayer !== 21) {
    //     createMessage("¡Has ganado¡", "#27ae60", 1);
    //     createMessage("¡Has perdido¡", "red", 0);
    //   } else if (
    //     pointCardPc < 21 &&
    //     pointCardPc > pointCardPlayer
    //   ) {
    //     createMessage("¡Has ganado¡", "#27ae60", 1);
    //     createMessage("¡Has perdido¡", "red", 0);
    //   } else if (
    //     pointCardPc < 21 &&
    //     pointCardPlayer < 21 &&
    //     pointCardPc === pointCardPlayer
    //   ) {
    //     createMessage("¡Empate¡", "orange", 0);
    //     createMessage("¡Empate¡", "orange", 1);
    //   }
    // }
  }

  function createMessage(text, color, index) {
    const $spanMessage = document.createElement("span");
    $spanMessage.className = "card-content__message";
    $spanMessage.style.color = color;
    $spanMessage.innerText = text;
    $pointsContentMessageAll[index].append($spanMessage);
  }

  function newGame() {
    pointCardPlayer = 0;
    pointCardPc = 0;
    deck = [];

    pointPlayers = [];

    initializedGame(2);

    $pointsPlayer.innerText = pointCardPlayer;

    $pointsPc.innerText = pointCardPc;

    deleteMessage(0);
    deleteMessage(1);
 
    deleteCards($decks, 0);
    deleteCards($decks, 1);

    $askCardBtn.disabled = false;
  }

  function deleteMessage(index) {
    if ($pointsContentMessageAll[0].children.length > 0) {
      $pointsContentMessageAll[index].children[0].remove();
    }
  }

  function deleteCards($deckOfPlayers, index) {
    const $arrayCardsOfPlayer = $deckOfPlayers[index].children;

    const lengthOfDesk = $arrayCardsOfPlayer.length;

    for (let i = 0; i < lengthOfDesk; i++) {
      $arrayCardsOfPlayer[0].remove();
    }
  }

  $newGameBtn.addEventListener("click", newGame);

  $askCardBtn.addEventListener("click", handleAskCardPlayer);

  $stopBtn.addEventListener("click", handleStopAskCardPlayer);

  // $newGameBtn.addEventListener("click", handleNewGame);

  // function handleNewGame() {
  //   if ($pointsContentMessage.children.length > 0) {
  //     $pointsContentMessage.children[0].remove();
  //   }
  //   pointCardPlayer = 0;
  //   $pointsPlayer.innerText = pointCardPlayer;
  // }
})();

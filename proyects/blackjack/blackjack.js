let deck = [];

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

  console.table(deck);
  deck = _.shuffle(deck);
  

  console.log(deck);
};

createDeck();

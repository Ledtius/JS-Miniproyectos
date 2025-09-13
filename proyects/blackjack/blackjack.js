let deck = [];

const createDeck = () => {
  const letters = ["C", "D", "H", "S"];
  let count = 0;

  for (let index = 2; index <= 10; index++) {
    if (index <= 9) deck.push(`${index}${letters[count]}`);
    else {
      count++;
      if (count !== letters.length) index = 1;
    }
  }

  /* ssss */
  /* 
      deck.push(`${index}S`);
    deck.push(`${index}C`);
    deck.push(`${index}D`);
    deck.push(`${index}H`);


*/

  console.table(deck);
};

createDeck();

let deck = [];

const createDeck = () => {
  let count = 0;
  const letters = ["C", "D", "H", "S"];
  for (let index = 2; index <= 9; index++) {
    deck.push(`${index}${letters[count]}`);
    count++;
    if (count === letters.length) count = 0;
  }

  /* ssss */
  /* 
    deck.push(`${index}C`);
    deck.push(`${index}D`);
    deck.push(`${index}H`);
    deck.push(`${index}S`);
*/

  console.table(deck);
};

createDeck();

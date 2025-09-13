let deck = [];

const createDeck = () => {
  const letters = ["C", "D", "H", "S"];
  const letters2 = ["J", "K", "Q"];
  let count = 0;
  let count2 = 0;

  for (let index = 2; index <= 11; index++) {
    if (index <= 10) deck.push(`${index}${letters[count]}`);
    else {
      count++;
      if (count !== letters.length) index = 1;
    }
  }

  for (let index = 0; index <= letters.length; index++) {
    if (index <= letters.length - 1)
      deck.push(`${letters2[count2]}${letters[index]}`);
    else {
      count2++;
      console.log(index);
      if (count2 !== letters2.length) index = -1;
    }
    console.log(index);
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

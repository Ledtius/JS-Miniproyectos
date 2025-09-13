let deck = [];

const createDeck = () => {
  const types = ["C", "D", "H", "S"];
  const specials = ["A", "J", "K", "Q"];

  /* Equivalent */
  // let count = 0;
  // let count2 = 0;

  // for (let index = 2; index <= 11; index++) {
  //   if (index <= 10) deck.push(`${index}${types[count]}`);
  //   else {
  //     count++;
  //     if (count !== types.length) index = 1;
  //   }
  // }

  // for (let index = 0; index <= types.length; index++) {
  //   if (index <= types.length - 1)
  //     deck.push(`${specials[count2]}${types[index]}`);
  //   else {
  //     count2++;
  //     if (count2 !== specials.length) index = -1;
  //   }
  // }

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
};

createDeck();

function shuffleCards(cardNum) {
  class Card {
    flip() {
      this.state === "back" ? (this.state = "front") : (this.state = "back");
      return this;
    }
    out() {
      return this.state;
    }
    static create(num) {
      return new Card(num);
    }
    constructor(cardId) {
      this.id = cardId;
      this.state = "back";
    }
  }
  const makeDeck = (num) => {
    return Array.from({ length: num + 1 }, (_, i) => {
      if (i == 0) return "deck";
      else return Card.create(i);
    });
  };
  const flipDeckBy = (aCard) => {
    const flip = (deck) => {
      if (!Array.isArray(deck)) {
        return deck.flip();
      } else if (Array.isArray(deck)) {
        return deck.forEach((card) =>
          card.id % aCard.id == 0 ? flip(card) : card
        );
      }
    };
    return flip;
  };
  const aDeck = makeDeck(cardNum);
  aDeck
    .map((card) => {
      if (typeof card === "string") return card;
      else return flipDeckBy(card);
    })
    .forEach((flipper) => {
      if (typeof flipper === "string") return;
      else flipper(aDeck);
    });
  return aDeck;
}

function runQ03() {
  const shuffledDeck = shuffleCards(100);
  shuffledDeck.forEach((card) => {
    if (typeof card === "string") console.log(card);
    else console.log(`${card.id}: ${card.out()}`);
  });
}

runQ03();

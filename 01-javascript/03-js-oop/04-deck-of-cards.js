class Card {
  constructor () {
    this.suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
    this.value = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    this.numericalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}

  show () {
    console.log(`Suit: ${this.suit} Value: ${this.value} Numerical Value: 
        ${this.numericalValue}`);
  }
}

class Deck extends Card {
  constructor (suit, value, numericalValue) {
    super(suit, value, numericalValue);
    this.deck = [];
  }

  resetDeck () {
    this.deck = []
    const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
    const cards = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

    for (const suit of suits) {
      for (const card of cards) {
        this.deck.push(`${card} of ${suit}`);
      }
    }
    return this;
}

  shuffle () {
    var m = this.deck.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    console.log(this.deck);
    return this;
  }

  deal () {
    return this.deck.pop();
  }
}

class Player {
  constructor (name) {
    this.name = name;
    this.hand = [];
  }

  draw (deck) {
    this.hand.push(deck.deal());
    return this;
  }

  discard () {
    this.hand.pop();
    return this;
  }
}

const deck = new Deck();
deck.resetDeck();
deck.shuffle();
deck.deal();
deck.show()


const player = new Player('Chris');
player.draw(deck).draw(deck);
player.discard(deck);
console.log(player);

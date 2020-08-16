function Card() {
  this.suit = suit;
  this.value = value;
}
Card.prototype.show = function () {
  console.log(`${this.value} of ${this.suit}`);
};

function Deck() {
  this.cards = [];
  this.build = function () {};
}

Deck.prototype.build = function () {
  const cards = ["Spades", "Diamonds", "Clubs", "Hearts"];
  for (var card in cards) {
    for (var number in _.range(0, 13, 1)) {
      this.cards.append(Card(card, number));
    }
  }
};

Deck.prototype.show = function () {
  for (var card in this.cards) {
    card.show();
  }
};

Deck.prototype.shuffle = function () {
  for (var i in _.range(this.cards.length() - 1, 0, -1)) {
    let ran = Math.floor(Math.random() * 3);
    this.cards[i], (this.cards[r] = this.cards[r]), this.cards[i];
  }
};
Deck.prototype.drawCard = function () {
  return this.cards.pop();
};

function Player() {
  this.name = name;
  this.hand = [];
}

Player.prototype.draw = function (deck) {
  this.hand.append(Deck.drawCard());
};

Player.prototype.showHand = function () {
  for (var card in this.hand) {
    card.show();
  }
};

Player.prototype.discard = function () {
  return this.hand.pop();
};

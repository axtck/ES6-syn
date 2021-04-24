const createDeck = (nDecks) => {
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const names = ["Ace", "Deuce", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    if (nDecks !== parseInt(nDecks, 10)) return "nDecks should be integer value";
    if (nDecks > 10 || nDecks < 0) return "nDecks should be a value 0 <> 10";

    const numDecks = nDecks || 1; // create at least 1 deck

    const deck = [];

    for (let i = 0; i < numDecks; i++) {
        suits.forEach(suit => {
            values.forEach((value, i) => {
                deck.push({
                    suit: suit,
                    value: value,
                    name: names[i],
                    deck: i + 1,
                });
            });
        });
    }

    return deck;
}

const shuffleCards = (deck) => {
    if (!Array.isArray(deck)) return "Pass deck";

    return deck.map((a) => {
        return {
            sort: Math.random(),
            value: a
        }
    }).sort((a, b) => {
        return a.sort - b.sort;
    }).map((a) => {
        return a.value;
    });
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    get score() {
        return this.calcScore();
    }

    calcScore() {
        return this.hand.reduce((a, b) => a + b.value, 0);
    }

    showHand() {
        let handString = `${this.name}:`;
        this.hand.forEach((card) => {
            handString = handString.concat(` ${card.name} of ${card.suit} (${card.value}p) ---`);
        });

        console.log(`${handString.slice(0, -4)}, ${this.score}.`);
    }
}

class Table {
    constructor(name, players, deck) {
        this.name = name;
        this.players = players;
        this.deck = deck;

        // dealer is last player
        this.dealer = this.players[this.players.length - 1];
        this.dealer = this.players.slice(-1);
    }

    deal() {
        this.players.forEach((player) => {
            for (let i = 0; i < 2; i++) {
                player.hand.push(this.deck.pop());
            }
        });
    }

    hit() {

    }

    play() {
        this.deal();

    }

    showHands() {
        this.players.forEach((p) => p.showHand());
    }
}

const player1 = new Player("Player1");
const player2 = new Player("Player2");
const dealer = new Player("Dealer");

const players = [player1, player2, dealer];

const table1 = new Table("Table1", players, shuffleCards(createDeck(1)));

table1.play();

table1.showHands();

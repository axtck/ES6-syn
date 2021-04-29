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

        console.log(`${handString.slice(0, -4)}, ${this.score}p.`);
    }
}

class Table {
    constructor(name, players, dealer, deck) {
        this.name = name;
        this.players = players;
        this.dealer = dealer;
        this.deck = deck;
        this.turn = 0;
    }

    deal() {
        for (let i = 0; i < 2; i++) {
            this.players.forEach((player) => {
                player.hand.push(this.deck.pop());
            });
            this.dealer.hand.push(this.deck.pop());
        }
    }

    play() {
        this.deal();
        // this.players.forEach((player) => {
        //     while (player.score < 11) {

        //         player.hand.push(this.deck.pop());

        //         if (player.score > 21) break;
        //     }
        // })
    }

    showHands() {
        this.players.forEach((p) => p.showHand());
        dealer.showHand();
    }
}

const player1 = new Player("Player1");
const player2 = new Player("Player2");
const dealer = new Player("Dealer");

const players = [player1, player2];

const table1 = new Table("Table1", players, dealer, shuffleCards(createDeck(1)));

table1.play();

table1.showHands();

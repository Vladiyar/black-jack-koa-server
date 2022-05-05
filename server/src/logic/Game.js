const Deck = require("./Deck");
const Player = require("./Player");

module.exports = class Game {
    isGameStarted = false;
    gameTurn = 0;
    players = [];
    card;
    winner;

    constructor (playersArray) {
        this.card = new Deck();
        for (const singlePlayer of playersArray) {
            this.players.push(new Player(singlePlayer))
        }
        for (let i = 0; i < this.players.length; i++) {
            const arrayOfCards = [];
            this.players[i].playerName += i;
            arrayOfCards.push(this.card.addCard())
            arrayOfCards.push(this.card.addCard())
            this.players[i].cardsArray = arrayOfCards;

        }
        this.isGameStarted = true;

    }

    nextPlayer() {
        this.gameTurn !== this.players.length - 1 ? this.gameTurn++ : this.gameTurn = 0;

        if (this.isGameStarted) {
            if (this.gameTurn === 0) {
                const winner = {
                    highestHand: 0,
                    winnerName: '',
                }
                for (let i = 0; i < this.players.length; i++) {
                    (winner['highestHand'] < this.players[i].handValue && this.players[i].handValue <= 21) ? (winner['highestHand'] = this.players[i].handValue, winner['winnerName'] = this.players[i].playerRealName) : null;
                }
                this.winner = winner;
                return winner;
            }
        }
    }
}

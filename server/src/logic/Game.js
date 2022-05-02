const Deck = require("./Deck");

module.exports = class Game {
    isGameStarted = false;
    gameTurn = 0;
    players;
    card;
    winner;

    constructor (...args) {
        this.card = new Deck();
        this.players = args;
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].playerName += i;
        }
        // for (let i = 0; i < this.players.length; i++) {
        //     addCard();
        //     addCard();
        //     nextPlayer();
        // }
        // this.isGameStarted = true;

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
                    (winner['highestHand'] < this.players[i].handValue  && this.players[i].handValue <= 21) ? (winner['highestHand'] = this.players[i].handValue, winner['winnerName'] = 'player ' + i) : null;
                }
                this.winner = winner;
                return winner;
            }
        }
    }
}

const Game = require("./Game");
const Player = require("./Player");


const arrayCreator = exports.arrayCreator = (g, result) => {
    const responseArray = [
        {
            'players': [],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': result
        }]
    for (let i = 0; i < g.players.length; i++) {
        responseArray[0].players.push({
            'player': g.players[i].playerName,
            'playerName': g.players[i].playerRealName,
            'isCanDraw': g.players[i].isCanDraw,
            'cards': g.players[i].cardsArray,
            'currentPlayer': g.gameTurn
        })
    }
    return responseArray;
}
const state = exports.state = (g) => {
    return arrayCreator(g, g.winner);
}

const addCard = exports.addCard = (g) => {
    g.players[g.gameTurn].drawCard(g.card.addCard()) > 21 ? g.players[g.gameTurn].isCanDraw = false : null;

    if (!g.players[g.gameTurn].isCanDraw) {
        g.players[g.gameTurn].isPlayerDraw = false;
        return nextPlayer();
    }
    return arrayCreator(g, g.winner);
}

const nextPlayer = exports.nextPlayer = (g) => {
    const winner = g.nextPlayer();

    if (winner && winner['highestHand'] === 0) {
        return arrayCreator(g, "It's a draw")
    }
    if (winner) {
        return arrayCreator(g, 'Won ' +winner['winnerName'] + ' with ' + winner['highestHand'])
    }
    return arrayCreator(g, g.winner);
}


const restart = exports.restart = (g) => {
    return arrayCreator(g, g.winner);
}

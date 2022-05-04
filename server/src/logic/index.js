const Game = require("./Game");
const Player = require("./Player");


// let g = new Game(new Player, new Player);
const state = exports.state = (g) => {
    return [
        {
            'players': [
                {
                    'player': g.players[0].playerName,
                    'playerName': g.players[0].playerRealName,
                    'isCanDraw': g.players[0].isCanDraw,
                    'cards': g.players[0].cardsArray,
                    'currentPlayer': g.gameTurn
                },
                {
                    'player': g.players[1].playerName,
                    'isCanDraw': g.players[1].isCanDraw,
                    'cards': g.players[1].cardsArray,
                    'currentPlayer': g.gameTurn
                }
            ],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': g.winner
        }
    ];
}




const addCard = exports.addCard = (g) => {
    g.players[g.gameTurn].drawCard(g.card.addCard()) > 21 ? g.players[g.gameTurn].isCanDraw = false : null;

    if (!g.players[g.gameTurn].isCanDraw) {
        g.players[g.gameTurn].isPlayerDraw = false;
        return nextPlayer();
    }
    return [
        {
            'players': [
                {
                    'player': g.players[0].playerName,
                    'isCanDraw': g.players[0].isCanDraw,
                    'cards': g.players[0].cardsArray,
                    'currentPlayer': g.gameTurn
                },
                {
                    'player': g.players[1].playerName,
                    'isCanDraw': g.players[1].isCanDraw,
                    'cards': g.players[1].cardsArray,
                    'currentPlayer': g.gameTurn
                }
            ],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': null
        }
    ];
}

const nextPlayer = exports.nextPlayer = (g) => {
    const winner = g.nextPlayer();

    if (winner && winner['highestHand'] === 0) {
        return [
            {
                'players': [
                    {
                        'player': g.players[0].playerName,
                        'isCanDraw': g.players[0].isCanDraw,
                        'cards': g.players[0].cardsArray,
                        'currentPlayer': g.gameTurn
                    },
                    {
                        'player': g.players[1].playerName,
                        'isCanDraw': g.players[1].isCanDraw,
                        'cards': g.players[1].cardsArray,
                        'currentPlayer': g.gameTurn
                    }
                ],
            },
            {
                'currentPlayer': g.gameTurn
            },
            {
                result: "It's a draw"
        }
        ];
    }
    if (winner) {
        return [
            {
                'players': [
                    {
                        'player': g.players[0].playerName,
                        'isCanDraw': g.players[0].isCanDraw,
                        'cards': g.players[0].cardsArray,
                        'currentPlayer': g.gameTurn
                    },
                    {
                        'player': g.players[1].playerName,
                        'isCanDraw': g.players[1].isCanDraw,
                        'cards': g.players[1].cardsArray,
                        'currentPlayer': g.gameTurn
                    }
                ],
            },
            {
                'currentPlayer': g.gameTurn
            },
            {
                result : 'Won ' +winner['winnerName'] + ' with ' + winner['highestHand']
            }
        ];
    }
    return [
        {
            'players': [
                {
                    'player': g.players[0].playerName,
                    'isCanDraw': g.players[0].isCanDraw,
                    'cards': g.players[0].cardsArray,
                    'currentPlayer': g.gameTurn
                },
                {
                    'player': g.players[1].playerName,
                    'isCanDraw': g.players[1].isCanDraw,
                    'cards': g.players[1].cardsArray,
                    'currentPlayer': g.gameTurn
                }
            ],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': null
        }
    ];
}


const restart = exports.restart = (g) => {
    g = new Game(['o', 'a']);

    return [
        {
            'players': [
                {
                    'player': g.players[0].playerName,
                    'isCanDraw': g.players[0].isCanDraw,
                    'cards': g.players[0].cardsArray,
                    'currentPlayer': g.gameTurn
                },
                {
                    'player': g.players[1].playerName,
                    'isCanDraw': g.players[1].isCanDraw,
                    'cards': g.players[1].cardsArray,
                    'currentPlayer': g.gameTurn
                }
            ],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': null
        }
    ];
}

const Game = require("../logic/Game");
const Player = require("../logic/Player");
const jwt = require("jsonwebtoken");
const {v4: uuidv4} = require("uuid");

const games = {}


const newLogin = exports.newLogin = (players) => {
    const jwt = require('jsonwebtoken');
    const { v4: uuidv4 } = require('uuid');
    let token = jwt.sign({ foo: uuidv4() },'shhhhh');

    console.log(players.players)
    games[token] = new Game(players.players);
    console.log(games)

}




let g = new Game(new Player, new Player);
const state = exports.state = () => {
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




const addCard = exports.addCard = () => {
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

const nextPlayer = exports.nextPlayer = () => {
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


for (let i = 0; i < g.players.length; i++) {
    addCard();
    addCard();
    nextPlayer();
}
g.isGameStarted = true;

const restart = exports.restart = () => {
    g = new Game(new Player(), new Player());
    for (let i = 0; i < g.players.length; i++) {
        addCard();
        addCard();
        nextPlayer();
    }
    g.isGameStarted = true;

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

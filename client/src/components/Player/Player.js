import React from 'react';
import Name from "./Name";
import Hand from "./Hand";
import Score from "./Score";

const Player = (props) => {
    let scoreValue = 0;
    let playerClass = '';
    for (let i = 0; i < props.playerData.cards.length; i++) {
        let tmpValue = 0;
        if (props.playerData.cards[i][1] === 11) {
            if ((scoreValue + 11) > 21) {
                tmpValue = 1
            } else {
                tmpValue = 11
            }
        }
        tmpValue = props.playerData.cards[i][1];
        scoreValue += tmpValue;
    }

    if (props.playerData.player === props.playerData.currentPlayer + '') {
        playerClass = 'active';
    }

    return (
        <div className={scoreValue > 21 ? "player lost" : "player " + playerClass}>
            <Name nameData = {props.playerData.player} />
            <Hand cardsData = {props.playerData.cards} />
            <Score scoreData = {scoreValue}/>
        </div>
    );
};

export default Player;
module.exports = class Player {
    playerName = '';
    playerRealName = '';
    isCanDraw = true;
    isPlayerDraw = false;
    handValue = 0;
    cardsArray = [];

    constructor(name) {
        this.playerRealName = name;
    }
    drawCard(cardDescription) {
        if (this.isCanDraw) {
            this.cardsArray.push(cardDescription);
            let tmpValue = 0;
            if (cardDescription[1] === 11) {
                if ((this.handValue + 11) > 21) {
                    tmpValue = 1
                } else {
                    tmpValue = 11
                }
            }
            // cardDescription[1] === 11 ? (this.handValue + 11 > 21 ? tmpValue = 1 : tmpValue + 11) : tmpValue = cardDescription[1];
            tmpValue = cardDescription[1];
            return this.handValue += tmpValue;
        }
    }

}



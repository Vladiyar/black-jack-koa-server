const {Validator} = require("node-input-validator");


const {newLogin} = require("./index");


exports.login = (players) => new Promise(async (resolve, reject) => {
    let v = new Validator(
        players,
        {
            'players': 'required|array',
            'players.*': 'required|string'
        },
    );

    let matched = await v.check();

    if (matched) {
        newLogin(players);
    }

    try {
        resolve({
            success: 'true'
        });
    }
    catch(err) {
        reject(err);
    }
});
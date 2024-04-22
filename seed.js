require('dotenv').config();
require('./config/database');

const Game = require('./models/game');
const Tag = require('./models/tag');

const data = require('./data');

(async function() {
    const p1 = Game.deleteMany({});
    const p2 = Tag.deleteMany({});

    // use one line to delete multiple data resouces at the same time
    let results = await Promise.all([p1, p2]);
    console.log(results);

    // create game and tag list based on data entered in data.js file
    results = await Promise.all([
        Game.create(data.games),
        Tag.create(data.tags),
    ]);
    console.log('Created games:', results[0]);
    console.log('Created tags:', results[1]);
    
    // test tag and game association
    results = await Promise.all([
        Game.findOne({ name: /[tT]erraria/ }),
        Tag.findOne({ name: /2[dD]/ })
    ]);
    // add 2d tag we found in previous promise and add to terraria which we also found and saved
    const terraria = results[0];
    const _2d = results[1];
    terraria.tags.push(_2d);
    await terraria.save();
    console.log('Terraria with 2D tag', terraria);

    process.exit();
})();


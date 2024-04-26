require('dotenv').config();
require('./config/database');

const Game = require('./models/game');
const Tag = require('./models/tag');
const Review = require('./models/review');

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
        Game.findOne({ name: /[Ss]tardew/ }),
        Review.findOne({ gameName: /[Ss]tardew/ }),
        Game.findOne({ name: /[Oo]uter/ }),
        Review.findOne({ gameName: /[Oo]uter/ })
    ]);
    // add 2d tag we found in previous promise and add to terraria which we also found and saved
    const stardew = results[0];
    const rev1 = results[1];
    const outer = results[2];
    const rev2 = results[3];
    rev1.game = stardew._id;
    rev2.game = outer._id;

    await stardew.save();
    await outer.save();
    await rev1.save();
    await rev2.save();

    console.log(`1 | Review: ${rev1.game}, Game: ${stardew._id}`, `2 | Review: ${rev2.game}, Game: ${outer._id}`);

    process.exit();
})();


"use strict";
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
    };
    const captainAmerica = {
        name: "Capitán América",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name);
        console.log(avenger.weapon);
    }
})();
//# sourceMappingURL=main.js.map
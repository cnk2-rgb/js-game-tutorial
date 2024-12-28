//grab reference to canvas tag in DOM
//troubleshooting: run http-server on local host (not network)
// command shift refresh to clear cache

import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d") //getting context for canvas

//only define these sprite once
const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320, 180)
})
//only define these sprite once
const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320, 180)
})

const hero = new Sprite({
    resource: resources.images.hero, //reference to hero spreadsheet
    frameSize: new Vector2(32, 32),
    hFrames: 3, 
    vFrames: 8,
    frames: 1, // 0 indexing, second element of first row
})

const heroPos = new Vector2(16 * 5, 16 * 5);

const draw = () => {
    skySprite.drawImage(ctx, 0, 0);
    groundSprite.drawImage(ctx, 0, 0);
    
    hero.drawImage(ctx, heroPos.x, heroPos.y);
}


// try to redraw every 300 ms; will get replaced w game loop
setInterval(() => {
    console.log("draw")
    draw()
}, 300)


/**
 * Created by Luis on 6/21/2016.
 */
window.onload = () =>
{
    let testgame = new TestGame();
    testgame.greeter();
};

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload : preload, create: create, update: update});
let cursors;

function preload(){
    game.load.atlasJSONHash("spritesheet", "assets/spritesheet.png", "assets/spritesheet.json");
}

function create(){
    game.add.sprite(50, 50, "spritesheet", "sun.png");

    //cursors = game.input.keyboard.createCursorKeys();
}

function update(){
    //if(cursors.le)
}

console.log("end init");
/**
 * Created by Luis on 6/22/2016.
 */
class WinState extends Phaser.State
{
    create(){
        let winLabel = game.add.text(80, 80, "You won!", {font: "50px Arial", fill: "#00FF00"});
        let startLabel = game.add.text(80, game.world.height - 80, "press the 'W' key to restart", {font: "25px Arial", fill: "#ffffff"});
        let wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.restart, this);
    }

    restart(){
        game.state.start("menu");
    }
}



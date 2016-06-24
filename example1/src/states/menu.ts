/**
 * Created by Luis on 6/22/2016.
 */
class MenuState extends Phaser.State
{
    create(){
        let nameLabel = this.game.add.text(80, 80, "My First Game", {font: "50px Arial", fill: "#ffffff"});
        let startLabel = this.game.add.text(80, this.game.world.height - 80, "press the 'w' key to start", {font: "25px Arial", fill: "#ffffff"});
        let wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.start, this);

        
    }
        
    start(){
        this.game.state.start("play");
    }
}


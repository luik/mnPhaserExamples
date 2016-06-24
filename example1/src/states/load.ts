/**
 * Created by Luis on 6/22/2016.
 */
class LoadState extends Phaser.State
{
    preload(){
        let loadingLabel = this.game.add.text(80, 150, "loading...", {font: "30px Courier", fill: "#ffffff"});
        this.game.load.image("player", "assets/player.png");
        this.game.load.image("win", "assets/chatPlaceholder.png");
        
    }

    create(){
        this.game.state.start("menu");
    }
}


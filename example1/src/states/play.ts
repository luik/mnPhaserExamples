/**
 * Created by Luis on 6/22/2016.
 */
class PlayState extends Phaser.State
{
    player;
    win;
    keyboard;
    input;

    create(){
        this.keyboard = this.game.input.keyboard;
        this.player = this.game.add.sprite(16, 16, "player");
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.win = this.game.add.sprite(256, 256, "win");
        this.game.physics.enable(this.win, Phaser.Physics.ARCADE);

        let container:Phaser.Sprite = this.game.add.sprite(10, 90, "container");
        this.input = this.game.add["inputField"](10, 90);
        container.addChild(this.input);
        console.log(this.input, container);
    }

    update(){
        this.game.physics.arcade.overlap(this.player, this.win, this.onWin, null, this);
        
        if(this.keyboard.isDown(Phaser.Keyboard.A)){
            this.player.body.velocity.x = -175;
        }
        else if(this.keyboard.isDown(Phaser.Keyboard.D))
        {
            this.player.body.velocity.x = 175;
        }
        else
        {
            this.player.body.velocity.x = 0;
        }

        if(this.keyboard.isDown(Phaser.Keyboard.W)){
            this.player.body.velocity.y = -175;
        }
        else if(this.keyboard.isDown(Phaser.Keyboard.S))
        {
            this.player.body.velocity.y = 175;
        }
        else
        {
            this.player.body.velocity.y = 0;
        }

        this.input.update();
    }
    
    onWin(){
        this.game.state.start("win");    
    }
}


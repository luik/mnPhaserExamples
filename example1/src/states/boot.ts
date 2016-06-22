/**
 * Created by Luis on 6/22/2016.
 */

class BootState extends Phaser.State
{
    create(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start("load");
    }
}




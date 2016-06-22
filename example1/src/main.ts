/**
 * Created by Luis on 6/21/2016.
 */
window.onload = () =>
{
    let testgame = new TestGame();
    testgame.greeter();

    let game = new Phaser.Game(800, 600, Phaser.AUTO, "");

    game.state.add("boot", BootState);
    game.state.add("load", LoadState);
    game.state.add("menu", MenuState);
    game.state.add("play", PlayState);
    game.state.add("win", WinState);

    game.state.start("boot");
};

/**
 * Created by Luis on 6/21/2016.
 */
window.onload = () =>
{
    let testgame = new TestGame();
    testgame.greeter();

    let game = new Phaser.Game(800, 600, Phaser.AUTO, "");
    game.plugins = new Phaser.PluginManager(game);
    game.plugins.add(Fabrique.Plugins.InputField);

    game.state.add("boot", new BootState());
    game.state.add("load", new LoadState());
    game.state.add("menu", new MenuState());
    game.state.add("play", new PlayState());
    game.state.add("win", new WinState());

    game.state.start("boot");

    console.log(game);
};

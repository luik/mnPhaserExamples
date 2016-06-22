/**
 * Created by Luis on 6/21/2016.
 */

export class TestGame
{
    constructor()
    {

    }

    greeter():void
    {
      console.log("hello + 1");
    }
}

console.log("test");

window.onload = () =>
{
    var game = new TestGame();
    game.greeter();
};
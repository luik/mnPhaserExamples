
window.onload = () =>
{
    let testgame = new TestGame();
    testgame.greeter();

    let game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

    let initialPoint = new Phaser.Point(100, 100);
    let finalPoint = new Phaser.Point(600, 400);

    let middlePoint = new Phaser.Point(initialPoint.x + (finalPoint.x - initialPoint.x)/2, initialPoint.y + (finalPoint.y - initialPoint.y)/2);
    let perpendicularPoint1 = new Phaser.Point(middlePoint.x + 0.4*(finalPoint.y - middlePoint.y ), middlePoint.y + 0.4*( -finalPoint.x + middlePoint.x));
    let perpendicularPoint2 = new Phaser.Point(middlePoint.x + 0.4*(- finalPoint.y + middlePoint.y ), middlePoint.y + 0.4*( finalPoint.x - middlePoint.x));

    let refPoints = {
        x : [initialPoint.x, middlePoint.x, perpendicularPoint1.x, perpendicularPoint2.x, finalPoint.x],
        y : [initialPoint.y, middlePoint.y, perpendicularPoint1.y, perpendicularPoint2.y, finalPoint.y]
    };
    
    let points = {
        x : [initialPoint.x, perpendicularPoint2.x, finalPoint.x],
        y : [initialPoint.y, perpendicularPoint2.y, finalPoint.y]
    };
    
    let t = 0.0;
    let dt = 0.005;
    let sun:Phaser.Sprite;

    function preload() {
        game.load.atlasJSONHash("spritesheet", "assets/spritesheet.png", "assets/spritesheet.json");
    }

    function create() {
        sun = game.add.sprite(100, 0, "spritesheet", "sun.png");
        sun.anchor.set(0.5);

        for(let i = 0; i < refPoints.x.length; i++)
        {
            game.add.sprite(refPoints.x[i], refPoints.y[i], "spritesheet", "cross.png");
        }
    }

    function update() {
        sun.x = Phaser.Math.bezierInterpolation(points.x, t);
        sun.y = Phaser.Math.bezierInterpolation(points.y, t);

        t += dt;
        if(t > 1)
        {
            t = 0;
        }
    }
};

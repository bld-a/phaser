//namespace
var MyGame = MyGame || new Object;

window.onload = function () {

    //	Create your Phaser game and inject it into the gameContainer div.
    //	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    MyGame.game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'game');

    //	Add the States your game has.
    //	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
    MyGame.game.state.add('Boot', State.Boot);
    //game.state.add('Preloader', BasicGame.Preloader);
    MyGame.game.state.add('MainMenu', State.MainMenu);
    MyGame.game.state.add('Game', State.Game);

    //	Now start the Boot state.
    MyGame.game.state.start('Boot');

};

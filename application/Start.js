//namespace
var MyGame = MyGame || {};

window.onload = function () {

    //	Create your Phaser game and inject it into the gameContainer div.
    //	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    MyGame.game = new Phaser.Game(400, 400, Phaser.AUTO, 'game');

    //	Add the States your game has.
    //	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.

    Each(Config.State, function(StateCfg){
        MyGame.game.state.add(StateCfg.Name, State[StateCfg.Name]);
    });

    //	Now start the Boot state.
    MyGame.game.state.start('Boot');

};

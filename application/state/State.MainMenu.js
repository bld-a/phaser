var State = State || {};

State.MainMenu = function (game) {
    this.Welcome = "Welcome to \n ECS \n Press any key...";
};

State.MainMenu.prototype = {

    create: function (){

        var welcome = this.game.add.text(this.world.centerX, this.world.centerY, this.Welcome, Config.Text.BaseText.Style);
        welcome.anchor.setTo(0.5,1);
        this.game.input.keyboard.onDownCallback = this.startGame;

    },

    startGame: function(){
        this.game.input.keyboard.onDownCallback = null;
        this.game.state.start('Game');
    }

};
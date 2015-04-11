var State = State || new Object;

State.MainMenu = function (game) {
    this.Welcome = "Welcome to \n ROGUE \n Press any key...";
};

State.MainMenu.prototype = {

    create: function (){

        this.game.add.text(this.world.centerX/2, this.world.centerY/2, this.Welcome, Config.Text.BaseText.Style);
        this.game.input.keyboard.onDownCallback = this.startGame;

    },

    startGame: function(){
        this.game.state.start('Game');
    }

};
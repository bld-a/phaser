var State = State || new Object;

State.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    this.map = new Array;
    this.floor = new GameObject.Fixed.Floor;
    this.wall = new GameObject.Fixed.Wall;

};

State.Game.prototype = {

    init: function(){

        this.initMap();

    },

    create: function () {

        MyGame.game.add.text(this.world.centerX, this.world.centerY, "TestText", Config.Text.BaseText.Style);

        MyGame.Controls.left.onDown.add(this.movePlayer, this);
        MyGame.Controls.right.onDown.add(this.movePlayer, this);
        MyGame.Controls.up.onDown.add(this.movePlayer, this);
        MyGame.Controls.down.onDown.add(this.movePlayer, this);

    },

    initMap: function(){
        for (var y = 0; y < ROWS; y++) {
            var newRow = [];
            for (var x = 0; x < COLS; x++) {
                if (Math.random() > 0.8)
                    newRow.push(this.wall.getSymbol());
                else
                    newRow.push(this.floor.getSymbol());
            }
            this.map.push(newRow);
        }
    },

    movePlayer: function(key){

        switch (key.keyCode) {
            case Phaser.Keyboard.LEFT:
                console.log('l');
            break;
            case Phaser.Keyboard.RIGHT:
                console.log('r');
            break;
            case Phaser.Keyboard.DOWN:
                console.log('d');
            break;
            case Phaser.Keyboard.UP:
                console.log('u');
            break;
            default: return false;
        }

    },

    quitGame: function (pointer) {



        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        //this.state.start('MainMenu');

    }

};
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
    this.mapDisplay = new Array;
    this.actorMap = new Array;
    this.actorList = new Array;

};

State.Game.prototype = {

    init: function(){

        this.initMap();
        this.initActor();
        this.initDisplay();

    },

    create: function () {

        MyGame.Controls.left.onDown.add(this.movePlayer, this);
        MyGame.Controls.right.onDown.add(this.movePlayer, this);
        MyGame.Controls.up.onDown.add(this.movePlayer, this);
        MyGame.Controls.down.onDown.add(this.movePlayer, this);

        console.log(this.mapDisplay);
        //this.drawDisplay();
    },

    initMap: function(){
        for (var y = 0; y < ROWS; y++) {
            this.mapDisplay[y] = [];
            var newRow = [];
            for (var x = 0; x < COLS; x++) {
                this.mapDisplay[y][x] = []
                var GameObj = {};
                if (Math.random() > 0.8){
                    GameObj = new GameObject.Fixed.Wall;
                    newRow.push(GameObj);
                } else {
                    GameObj = new GameObject.Fixed.Floor;
                    newRow.push(GameObj);
                }
                GameObj.x = x;
                GameObj.y = y;
            }
            this.map.push(newRow);
        }
    },

    initActor: function(){

        // create actors at random locations
        for (var e=0; e<ACTORS; e++) {
            //player
            if (e==0){
                var actor = new GameObject.Actor.Player;
                this.player = actor;
            } else {//enemy
                var actor = new GameObject.Actor.Enemy;
            }
            do {
                // pick a random position that is both a floor and not occupied
                actor.y=this.rnd.between(1, ROWS-1);
                actor.x=this.rnd.between(1, COLS-1);
            } while ( this.map[actor.y][actor.x].Type == 'Wall' || this.actorMap[actor.y + "_" + actor.x] != null );

            // add references to the actor to the actors list & map
            this.actorMap[actor.y + "_" + actor.x]= actor;
            this.actorList.push(actor);
        }

        this.livingEnemies = ACTORS-1;

    },

    initDisplay: function(){

        var self = this;
        console.log(self.actorMap);

        Each(this.map, function(row, y){
            self.mapDisplay[y] = new Array;
            Each(row, function(column, x){

                var cell = {};

                if (self.actorMap[y + "_" + x]){
                    cell = self.actorMap[y + "_" + x];
                } else {
                    cell = column;
                }

                self.mapDisplay[y][x] = self.drawCell(cell);

            });
        });

    },

    drawDisplay: function(){

        var self = this;

        Each(this.mapDisplay, function(row, y){
            Each(row, function(column, x){

            });
        });

        this.mapDisplay = blocks;

    },

    drawCell: function(column){
        var style = {font: FONT + 'px monospaced', fill: column.color};
        return MyGame.game.add.text(FONT*0.6*column.x, FONT*column.y, column.symbol, style);
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
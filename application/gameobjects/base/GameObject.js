var GameObject = GameObject || new Object;

GameObject.Base = Class.extend({

    x: 0,
    y: 0,

    //shit, Config.js and class declaration conflicts
    init: function(){
        this.Config = Config.GameObject[this.Category][this.Type];
    }

});
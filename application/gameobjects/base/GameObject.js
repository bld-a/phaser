var GameObject = GameObject || new Object;

GameObject.Base = Class.extend({

    getSymbol: function(){
        return Config.GameObject[this.Category][this.Type].Symbol;
    }

});
var GameObject = GameObject || new Object;

GameObject.Base = Class.extend({

    //shit, Config.js and class declaration conflicts
    getObj: function(){
        var ret = {};
        ret['Category'] = this.Category;
        ret['Type'] = this.Type;
        ret['Config'] = Config.GameObject[this.Category][this.Type];
        return ret;
    }

});
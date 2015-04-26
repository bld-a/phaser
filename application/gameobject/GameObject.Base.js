var GameObject = GameObject || {};

GameObject.Base = Class.extend({

    x: 0,
    y: 0,

    //shit, Config.js and class declaration conflicts
    init: function(){
        var config = Config.GameObject[this.Category][this.Type];
        this.buildProperties(config);
    },

    //todo: refakt to ConfigItemLoader?
    buildProperties: function(config){
        var self = this;
        Each(config, function(v, k){
            self[k] = v;
        });
    }

});
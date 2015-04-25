var Component = Component || new Object;

Component.Base = Class.extend({

    init: function(){
        var config = Config.Component[this.Category][this.Type];
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
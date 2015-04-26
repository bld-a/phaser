var GameObject = GameObject || {};

GameObject.Base = Class.extend({

    _count: 0,
    Components: {},

    init: function(){
        this.Id = this.makeId();
        this.fetchComponents();
        this._count++;
        GameObject.Collection[this.Id] = this;
    },

    makeId: function(){

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        var Id = this.Name+'_'+text;

        return Id;

    },

    fetchComponents: function(){
        var self = this;
        Each(Config.GameObject[this.Name].Components, function(Value){
            self.addComponent(Value);
        });
    },

    addComponent: function(componentName){
        this.Components[componentName] = new Component[componentName];
    },

    removeComponent: function(componentName){
        delete this.Components[componentName];
    }

});
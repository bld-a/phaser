var GameObject = GameObject || {};

GameObject.Base = Class.extend({

    init: function(){
        this.Id = this.makeId();
    },

    makeId: function(){

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        var Id = this.Name+'_'+text;

        return Id;

    }

});
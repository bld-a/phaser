var Component = Component || {};

Component.Base = Class.extend({

    get: function(property){
        return this[property];
    },

    set: function(property, value){
        this[property] = value;
    }

});
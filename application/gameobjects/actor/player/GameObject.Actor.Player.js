var GameObject = GameObject || new Object;

GameObject.Actor.Player = GameObject.Actor.extend({
    testproperty: 'player testprop',

    testfunction: function(){
        console.log('player test()')
    }
});

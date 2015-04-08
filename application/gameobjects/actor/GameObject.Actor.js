var GameObject = GameObject || new Object;

GameObject.Actor = GameObject.Base.extend({
    testproperty: 'actor testprop',

    testfunction: function(){
        console.log('actor test()')
    }
});
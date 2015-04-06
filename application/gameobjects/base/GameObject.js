var GameObject = GameObject || new Object;

GameObject.Base = function(){
    this.testprop = 'testprop';
};

GameObject.Base.prototype = {
    test: function(){
        console.log('test');
    }
};
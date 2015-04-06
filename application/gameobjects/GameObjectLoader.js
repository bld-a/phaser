var GameObject = GameObject || new Object;

GameObject.ObjectLoader = function(ConfigItem){

    var fileref = document.createElement('script');
    var filename = 'application/gameobjects/'+ConfigItem.name+'/GameObject.'+ConfigItem.name+'.js';
    fileref.setAttribute("src", filename);

    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
};

Config.GameObject.forEach(function(ConfigItem){
    GameObject.ObjectLoader(ConfigItem);
});
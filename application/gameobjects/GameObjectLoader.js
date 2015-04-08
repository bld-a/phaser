var GameObject = GameObject || new Object;

GameObject.ObjectLoader = function(ConfigItem){

    var fileref = document.createElement('script');
    var filename = 'application/gameobjects/'+ConfigItem.Type.toLowerCase()+'/'+ConfigItem.Name.toLowerCase()+'/GameObject.'+ConfigItem.Type+'.'+ConfigItem.Name+'.js';
    fileref.setAttribute("src", filename);

    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
};

Config.GameObject.forEach(function(Type){
    Type.forEach(function(ConfigItem){
        GameObject.ObjectLoader(ConfigItem);
    });
});
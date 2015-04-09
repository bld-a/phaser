var GameObject = GameObject || new Object;

GameObject.ObjectLoader = function(ConfigItem){

    var fileref = document.createElement('script');
    var filename = 'application/gameobjects/'+ConfigItem.Category.toLowerCase()+'/'+ConfigItem.Type.toLowerCase()+'/GameObject.'+ConfigItem.Category+'.'+ConfigItem.Type+'.js';
    fileref.setAttribute("src", filename);

    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
};

Each(Config.GameObject, function(Type, Category){
    var ConfigItem = {Category: Category};
    Each(Type, function(Value, Type){
        ConfigItem['Type'] = Type;
        GameObject.ObjectLoader(ConfigItem);
    });
});
var Config = Config || {};

Config.ConfigItemLoader = {

    Load: function(Category){
        var self = this;

        Each(Config[Category], function(Value){
            var ConfigItem = [];
            ConfigItem['Category'] = Category;
            ConfigItem['Name'] = Value.Name;
            self.Insert(ConfigItem);
        });
    },

    Insert: function(ConfigItem){

        var fileref = document.createElement('script');
        var filename = 'application/'+ConfigItem.Category.toLowerCase()+'/'+ConfigItem.Category+'.'+ConfigItem.Name+'.js';
        fileref.setAttribute("src", filename);

        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

Config.ConfigItemLoader.Load('Component');
Config.ConfigItemLoader.Load('GameObject');
Config.ConfigItemLoader.Load('State');
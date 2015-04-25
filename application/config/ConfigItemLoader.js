var Config = Config || new Object;

Config.ConfigItemLoader = {

    Load: function(Category){
        var self = this;

        Each(Config[Category], function(Value){
            var ConfigItem = [];
            ConfigItem['Category'] = Category;
            ConfigItem['Value'] = Value;
            self.Insert(ConfigItem);
        });
    },

    Insert: function(ConfigItem){

        var fileref = document.createElement('script');
        var filename = 'application/'+ConfigItem.Category.toLowerCase()+'/'+ConfigItem.Category+'.'+ConfigItem.Value+'.js';
        fileref.setAttribute("src", filename);

        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

Config.ConfigItemLoader.Load('GameObject');
Config.ConfigItemLoader.Load('State');
Config.ConfigItemLoader.Load('Component');
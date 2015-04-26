var Config = Config || {};

Config.State = {
    Boot: {Name: 'Boot'},
    Preloader: {Name: 'Preloader'},
    MainMenu: {Name: 'MainMenu'},
    Game: {Name: 'Game'},
    EndGame: {Name: 'EndGame'}
};

Config.Component = {
    Position: {Name: 'Position'}
};

Config.GameObject = {
    Tree: {
        Name: 'Tree',
        Components: ['Position']
    }
};

Config.Controls = {};

Config.Text = {
    BaseText: {
        Style: {font: '22px monospace', fill: '#fff', align: 'center'}
    }
}



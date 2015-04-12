var Config = Config || new Object;

Config.GameObject = {
    Fixed: {
        Wall: {Symbol: '▓', fill: '#3D3D3D'},
        Floor: {Symbol: '░', fill: '#1F1F1F'}
    },
    Actor: {
        Player: {},
        Enemy: {}
    }
}

Config.Controls = {

}

Config.Text = {
    BaseText: {
        Style: {font: '22px monospaced', fill: '#fff', align: 'center'}
    },
    Map: {
        Style: {font: FONT + 'px monospaced', fill: '#fff'}
    }
}
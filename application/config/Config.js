var Config = Config || new Object;

Config.GameObject = {
    Fixed: {
        Wall: {symbol: '▓', color: '#8A4500'},
        Floor: {symbol: '░', color: '#4D4D4D'}
    },
    Actor: {
        Player: {symbol: '@', color: '#FFE75E'},
        Enemy: {symbol: 'g', color: '#1EB500'}
    }
}

Config.Controls = {

}

Config.Text = {
    BaseText: {
        Style: {font: '22px monospaced', fill: '#fff', align: 'center'}
    },
    Map: {
        Style: {font: FONT + 'px monospaced'}
    }
}
var Config = Config || new Object;

Config.GameObject = {
    Fixed: {
        Wall: {symbol: '#', color: '#8A4500'},
        Floor: {symbol: '.', color: '#4D4D4D'}
    },
    Actor: {
        Player: {symbol: '@', color: '#FFE75E', hp: 3, side: 'f'},
        Enemy: {symbol: 'g', color: '#1EB500', hp: 1, side: 'h'}
    }
}

Config.Controls = {

}

Config.Text = {
    BaseText: {
        Style: {font: '22px monospace', fill: '#fff', align: 'center'}
    },
    Map: {
        Style: {font: FONT + 'px monospace'}
    }
}
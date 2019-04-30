var Guerrero = require('./Guerrero')

class Infanteria extends Guerrero {
    constructor(){
        super();
        this.DanioInicial = 10;
    }

    calcularDanio(){
        return this.DanioInicial;
    }
}

module.exports = Infanteria;
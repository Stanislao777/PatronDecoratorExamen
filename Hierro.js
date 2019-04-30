var DecoratorArma = require('./Decorator_Arma');

class Hierro extends DecoratorArma {
    constructor(guerrero) {
        super();
        this.guerrero = guerrero;
        this.danio = 10;
    }

    calcularDanio(){
        return this.guerrero.calcularDanio() + this.danio;
    }
}

module.exports = Hierro;
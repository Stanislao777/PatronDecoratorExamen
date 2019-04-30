var DecoratorArma = require('./Decorator_Arma');

class Madera extends DecoratorArma {
    constructor(guerrero) {
        super();
        this.guerrero = guerrero;
        this.danio = 5;
    }

    calcularDanio(){
        return this.guerrero.calcularDanio() + this.danio;
    }
}

module.exports = Madera;
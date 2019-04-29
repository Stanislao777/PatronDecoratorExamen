var DecoratorArma = require('./Decorator_Arma');

class Madera extends DecoratorArma {
    constructor(guerrero) {
        super();
        this.guerrero = guerrero;
    }

    calcularDanio(){
        return this.guerrero.calcularDanio() + 5;
    }
}

module.exports = Madera;
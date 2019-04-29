var Decorator = requier('./Decorator_Arma');

class Hierro extends DecoratorArma {
    constructor(guerrero) {
        super();
        this.guerrero = guerrero;
    }

    calcularDanio(){
        return this.guerrero.calcularDanio() + 10;
    }
}

module.exports = Hierro;
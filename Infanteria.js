var Guerrero = requiere('./Guerrero')

class Infanteria extends Guerrero {
    constructor(){
        super();
    }

    calcularDanio(){
        return 10;
    }
}

module.exports = Infanteria;
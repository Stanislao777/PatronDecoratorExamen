var DecoratorArma = require('./Decorator_Arma');

class Fuego extends DecoratorArma {
  constructor(guerrero) {
    super();
    this.guerrero = guerrero;
    this.danio = 30;
  }

  calcularDanio() {
    return this.guerrero.calcularDanio() + this.danio ;
  }
}

module.exports = Fuego;
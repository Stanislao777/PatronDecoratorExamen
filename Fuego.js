var DecoratorArma = require('./Decorator_Arma');

class Fuego extends DecoratorArma {
  constructor(guerrero) {
    super();
    this.guerrero = guerrero;
  }

  calcularDanio() {
    return this.guerrero.calcularDanio() + 30;
  }
}

module.exports = Fuego;
var Guerrero = require('./guerrero');

class Arquero extends Guerrero {
  constructor() {
    super();
  }

  calcularDanio() {
    return 5;
  }
}

module.exports = Arquero;
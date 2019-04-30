var Guerrero = require('./guerrero');

class Arquero extends Guerrero {
  constructor() {
    super();
    this.DanioInicial = 5;
  }

  calcularDanio() {
    return this.DanioInicial;
  }
}

module.exports = Arquero;
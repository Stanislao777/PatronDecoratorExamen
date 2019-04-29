var Infanteria = require('./Infanteria');
var Madera = require('./Madera');
var Hierro = require('./Hierro');
var Fuego = require('./Fuego');

let guerrero = new Infanteria();
console.log(guerrero.calcularDanio());

guerrero = new Madera(guerrero);
console.log(guerrero.calcularDanio());

guerrero = new Hierro(guerrero);
console.log(guerrero.calcularDanio());

guerrero = new Fuego(guerrero);
console.log(guerrero.calcularDanio());

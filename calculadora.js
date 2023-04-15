const { sumar } = require("./sumar");
const { restar } = require("./restar");
const { multiplicar } = require("./multiplicar");
const { dividir } = require("./dividir");

const suma = sumar(2, 3);
const resta = restar(5, 6);
const multiplicacion = multiplicar(3, 3);
const division = dividir(8, 3);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

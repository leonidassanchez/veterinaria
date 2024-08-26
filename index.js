const { registrar, leer } = require("./operaciones");

// Obtener los argumentos pasados por consola
const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  // Ejecutar la función registrar si la operación es 'registrar'
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  // Ejecutar la función leer si la operación es 'leer'
  leer();
} else {
  console.log('Operación no reconocida. Usa "registrar" o "leer".');
}

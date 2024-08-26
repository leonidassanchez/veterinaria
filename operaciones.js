const fs = require("fs");

//Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  //Leer el contenido actual del archivo citas.json
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  //Crear un nuevo objeto para la cita
  const nuevaCita = { nombre, edad, animal, color, enfermedad };

  //Agregar la nueva cita al arreglo de citas
  citas.push(nuevaCita);

  //Escribir el arreglo actualizado de citas en el archivo citas.json
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito!");
};

//Función para leer todas las citas registradas
const leer = () => {
  //Leer el contenido del archivo citas.json
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  //Mostrar cada cita en la consola
  citas.forEach((cita, index) => {
    console.log(`Cita ${index + 1}:`);
    console.log(`  Nombre: ${cita.nombre}`);
    console.log(`  Edad: ${cita.edad}`);
    console.log(`  Animal: ${cita.animal}`);
    console.log(`  Color: ${cita.color}`);
    console.log(`  Enfermedad: ${cita.enfermedad}`);
    console.log("---");
  });
};

//Exportar las funciones para que puedan ser utilizadas en otros archivos
module.exports = { registrar, leer };

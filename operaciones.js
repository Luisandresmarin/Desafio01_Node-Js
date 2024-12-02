const fs = require("fs");
// Archivo donde se guardarán las citas
const archivo = "citas.json"; 

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad }; 
    let citas = []; 

 
    if (fs.existsSync(archivo)) {
        const data = fs.readFileSync(archivo, "utf-8");
        citas = JSON.parse(data); 
    }

    citas.push(cita); // Agregar la nueva cita
    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2)); // Guardar en el archivo
    console.log(`Cita de ${nombre} registrada exitosamente.`);
};

// Función para leer y mostrar todas las citas
const leer = () => {
    if (!fs.existsSync(archivo)) {
        console.log("No hay citas registradas (archivo no encontrado).");
        return;
    }

    const data = fs.readFileSync(archivo, "utf-8");
    const citas = JSON.parse(data); // Convertir el contenido a un arreglo

    if (citas.length === 0) {
        console.log("No hay citas registradas.");
    } else {
        console.log("Citas registradas:");
        citas.forEach(({ nombre, edad, animal, color, enfermedad }, i) => {
            console.log(`${i + 1}. ${nombre}, ${edad}, ${animal}, ${color}, ${enfermedad}`);
        });
    }
};

// Exportar las funciones para ser utilizadas en `index.js`
module.exports = { registrar, leer };


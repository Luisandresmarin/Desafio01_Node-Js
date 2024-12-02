// Importar las funciones
const { registrar, leer } = require("./operaciones"); 
// Extraer operación y argumentos
const [operacion, ...argumentos] = process.argv.slice(2); 

if (operacion === "registrar") {
    if (argumentos.length < 5) {
        console.error("Error:-> registrar <nombre> <edad> <animal> <color> <enfermedad>");
        process.exit(1);
    }
    registrar(...argumentos); // Pasar argumentos directamente a la función
} else if (operacion === "leer") {
    leer();
} else {
    console.error("Operación no válida. Usa 'registrar' o 'leer'.");
}


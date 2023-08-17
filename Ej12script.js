

const obtenerTipoDeDato = (dato) => {
    if (!isNaN(dato)) {
        return "number";
    } else {
        return "string";
    }
};

const valorUsuario = prompt("Por favor, ingresa un valor:");
const tipoDeDato = obtenerTipoDeDato(valorUsuario);

console.log("El tipo de dato es: " + tipoDeDato);

document.write("El tipo de dato es: " + tipoDeDato);
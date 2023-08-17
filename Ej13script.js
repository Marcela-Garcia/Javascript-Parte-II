
// objetos de personas
const persona1 = {
    nombre: "Benja mi chiqui",
    edad: 5,
    sexo: "H",
    peso: 37,
    altura: 127
};

const persona2 = {
    nombre: "Joa mi rey",
    edad: 14,
    sexo: "H",
    peso: 70,
    altura: 170
};

const numeroPersona = prompt("Ingrese el número de persona (1 o 2):");

if (numeroPersona === "1") {
    console.log("Persona 1:");
    console.log("Nombre:", persona1.nombre);
    console.log("Edad:", persona1.edad);
    console.log("Sexo:", persona1.sexo);
    console.log("Peso:", persona1.peso);
    console.log("Altura:", persona1.altura);
} else if (numeroPersona === "2") {
    console.log("Persona 2:");
    console.log("Nombre:", persona2.nombre);
    console.log("Edad:", persona2.edad);
    console.log("Sexo:", persona2.sexo);
    console.log("Peso:", persona2.peso);
    console.log("Altura:", persona2.altura);
} else {
    console.log("Número de persona no válido.");
}

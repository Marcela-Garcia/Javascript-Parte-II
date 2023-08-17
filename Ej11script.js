

const cadenaUsuario = prompt("Por favor, ingresa una cadena de texto:");

function palabraMasLarga(cadena) {
        const palabras = cadena.split(" ");

        let palabraMasLarga = "";
  
    for (let i = 0; i < palabras.length; i++) {
        const palabraActual = palabras[i];

        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }
     return palabraMasLarga;
}
const resultado = palabraMasLarga(cadenaUsuario);
console.log("La palabra más larga es: " + resultado);
document.write("La palabra más larga es: " + resultado);
//const cadenaEjemplo = "Guia de javascript";
//const resultado= palabraMasLarga(cadenaEjemplo);
//console.log(resultado);
//document.write(resultado);
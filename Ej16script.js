
function generarValorAleatorio() {
    return Math.floor(Math.random() * 100); 
}

function mostrarVector(vector) {
    console.log("[ " + vector.join(", ") + " ]"); //[]
}

const vector1 = Array.from({ length: 5 }, generarValorAleatorio);
const vector2 = Array.from({ length: 5 }, generarValorAleatorio);

console.log("Primer vector:");
mostrarVector(vector1);

console.log("Segundo vector:");
mostrarVector(vector2);

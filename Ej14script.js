

const libro = {
    ISBN: "",
    Título: "",
    Autor: "",
    "Número de páginas": 0,
    
    cargarLibro: function() {
        this.ISBN = prompt("Ingrese el ISBN del libro:");
        this.Título = prompt("Ingrese el título del libro:");
        this.Autor = prompt("Ingrese el autor del libro:");
        this["Número de páginas"] = parseInt(prompt("Ingrese el número de páginas del libro:"));
    },
    mostrarInformacion: function() {
        console.log("ISBN:", this.ISBN);
        console.log("Título:", this.Título);
        console.log("Autor:", this.Autor);
        console.log("Número de páginas:", this["Número de páginas"]);
    }
};

libro.cargarLibro();

console.log("Información del libro:");
libro.mostrarInformacion();




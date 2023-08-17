

function calcularArea(radio) {
        const area = Math.PI * Math.pow(radio, 2);
    return area;
  }
  
  function calcularPerimetro(radio) {
     const perimetro =  2 * Math.PI * radio;
    return perimetro;
  }
  
  const radio = parseFloat(prompt("Ingrese el valor del radio del círculo:"));

  
    const areaCirculo = calcularArea(radio);
    const perimetroCirculo = calcularPerimetro(radio);
   
    console.log("El area del circulo es " + areaCirculo );
    document.write("El area del circulo es " + areaCirculo );
    console.log("El perímetro del círculo es: " + perimetroCirculo);
    document.write("<br>El perímetro del círculo es: " + perimetroCirculo);
    

    
//codigo del cuadrado 

console.group("Cuadrados"); //utilidad de la consola para agruparr 

function perimetroCuadrado(lado) { //perimetro cuadrado
   return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd(); // termina el consolo cuadrados  

/////////////////////////////////////////////////////////////////////////////
//codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base)  {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd(); 

////////////////////////////////////////////////////////////////////
//codigo circulo
console.group("Circulos");

//diametro
function diametroCirculo (radio){
    return radio *2
}

//PI
const PI = Math.PI; //math es una herramienta que tiene varias funciones
console.log("PI es:" + PI);


//Circunferencia  
function perimetroCirculo(radio){
    const diametroCirculo = diametroCirculo(radio); //funciones dentro de funciones
    return diametroCirculo * PI;

}

//Area
function areaCirculo (radio) {
    return (radio * radio) * PI; 
}

console.groupEnd();

//intereactuar con el HTML con funciones: 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //permite obtener ese input, ese elemnto js
    const value = input.value; //se obtiene el valor qeu escribieron los usuarios desde el imput del html 

    const perimetro = perimetroCuadrado(value);  //creamos varible y llamamos la funcion que y creamos y resive la value que es el resultado
    alert(perimetro);
}

//document.elementById: dentro del html estamos buscando el elemento que tenga el id 
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); //permite obtener ese input, ese elemnto js
    const value = input.value; //se obtiene el valor qeu escribieron los usuarios desde el imput del html 

    const perimetro = areaCuadrado(value);  //creamos varible y llamamos la funcion que y creamos y resive la value que es el resultado
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
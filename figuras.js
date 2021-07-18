// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCiruclo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value


    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const base1 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, base1);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase1 = document.getElementById("inputTriangulo4");
    const inputBase2 = document.getElementById("inputTriangulo5");

    const valueBase1 = inputBase1.value;
    const altura = inputBase2.value;

    const area = areaTriangulo(valueBase1, altura);
    alert(area);
}

function calcularDiametro() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCiruclo(value);
    alert(area);
}
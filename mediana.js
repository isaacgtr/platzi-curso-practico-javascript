let mediana;
function CalcularMedianaYPromedio(value) {

    const input = document.getElementById("Lista");
    const valueInput = Number(input.value)

    const mitadLista = parseInt(value.length / 2);

    if (esPar(value.length)) {
        const elemento1 = value[mitadLista - 1];
        const elemento2 = value[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);

        mediana = promedioElemento1y2;

        return mediana

    } else {
        return mediana = value[mitadLista]
    }
}

function esPar(numerito) {
    // % se llama modulo y es el reciduo de la division
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}







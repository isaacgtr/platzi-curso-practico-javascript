// Helpers (Son funciones a parte que se inlcluyen en la logica)

function esPar(numerito) {
    return (numerito % 2 === 0);
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

// Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

// Mediana General
const salariosVen = venezuela.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosVenSorted = salariosVen.sort(
    function (salaryA, salaryB) {
        // para ordenar de mayor a menor
        return salaryA - salaryB;
    }
);

const medianaGeneralVen = medianaSalarios(salariosVenSorted);

// Mediana del top 10%
// Metodo splice para cortar cierta parte de los valores de los arrays

const spliceStart = (salariosVenSorted.length * 90) / 100;
const spliceCount = salariosVenSorted.length - spliceStart;

const salarios10VenTop10 = salariosVenSorted.splice(spliceStart, spliceCount);

const medianaTop10Ven = medianaSalarios(salarios10VenTop10);

console.log({
    medianaGeneralVen,
    medianaTop10Ven,
})
let operacion = '';
let resultadoMostrado = false;

function agregarNumero(num) { 
    if (resultadoMostrado) {
        operacion = '';
        resultadoMostrado = false;
    }
    operacion += num;
    document.getElementById('resultado').value = operacion;
}

function agregarOperacion(op) {
    if (operacion === '') return;
    // Evita dos operadores seguidos
    if (/[+\-*/]$/.test(operacion)) {
        operacion = operacion.slice(0, -1);
    }
    operacion += op;
    document.getElementById('resultado').value = operacion;
}

function calcular() {
    try {
        // Evalúa la operación de forma segura
        let res = eval(operacion);
        document.getElementById('resultado').value = res;
        operacion = res.toString();
        resultadoMostrado = true;
    } catch {
        document.getElementById('resultado').value = 'Error';
        operacion = '';
        resultadoMostrado = false;
    }
}

function limpiar() {
    operacion = '';
    document.getElementById('resultado').value = '';
    resultadoMostrado = false;
}
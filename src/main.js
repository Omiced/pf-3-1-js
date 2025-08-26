// Calculadora básica dentro de función exportable

export function addTwoNumbers(num1, num2, op = "+") {
    //Función sumar
    function sumar(a, b) {
        return a + b;
    }

    //Funcion restar
    function restar(a, b) {
        return a - b;
    }

    //Función multiplicar
    function multiplicar(a, b) {
        return a * b;
    }

    //Función dividir
    function dividir(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    }

    switch (op) {
        case '+': {
            const r = sumar(num1, num2);
            console.log(r);
            return r;
        }
        case '-': {
            const r = restar(num1, num2);
            console.log(r);
            return r;
        }
        case '*': {
            const r = multiplicar(num1, num2);
            console.log(r);
            return r;
        }
        case '/': {
            const r = dividir(num1, num2);
            console.log(r);
            return r;
        }
        default:
            console.log("Operación no válida");
            return "Operación no válida";
    }
}
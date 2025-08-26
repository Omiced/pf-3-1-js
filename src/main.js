// Calculadora básica dentro de función exportable

export function addTwoNumbers(num1, num2, op) {
    
    // Función sumar
    function sumar(a, b) {
        return a + b;
    }

    // Función restar
    function restar(a, b) {
        return a - b;
    }

    // Función multiplicar
    function multiplicar(a, b) {
        return a * b;
    }

    // Función dividir
    function dividir(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    }

    // Lógica de la calculadora
    switch (op) {
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividir(num1, num2);
        default:
            return "Operación no válida";
    }
}

// Ejemplos de uso:
console.log(addTwoNumbers(2, 3, '+')); // 5
console.log(addTwoNumbers(-2, -3, '-')); // -5
console.log(addTwoNumbers(10, 7, '*')); // 70
console.log(addTwoNumbers(10, 5, '/')); // 2
console.log(addTwoNumbers(10, 0, '/')); // Error: División por cero
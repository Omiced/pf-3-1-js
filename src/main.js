
export function addTwoNumbers(a, b) {
  console.log("El resultado de la suma es: " + (a + b));
}
export function restarDosNumeros(a, b) {
  console.log("El resultado de la resta es: " + (a - b));
}
export function multiDosNumeros(a,b) {
  console.log("El resultado de la multiplicación es: " + (a * b));
}
export function dividirDosNumeros(a,b) {
  console.log("El resultado de la divison es: " + (a / b));
}

const option = +prompt(`Elige un numero de opción: \n 1.- SUmar \n 2.- Restar \n 3.- Multiplicar \n 4.- Dividir`);

switch (option) {
    case 1:
        const num1 = +prompt("Ingresa el primer numero a sumar");
         const num2 = +prompt("Ingresa el segundo numero a sumar");
        addTwoNumbers(num1, num2);
        break;
        break;
    case 2:
        const num1r = +prompt("Ingresa el primer numero a restar");
        const num2r = +prompt("Ingresa el segundo numero a restar");
        restarDosNumeros(num1r, num2r);
        break;
    case 3:
         const num1m = +prompt("Ingresa el primer numero a multiplicar");
        const num2m = +prompt("Ingresa el segundo numero a multiplicar");
        multiDosNumeros(num1m, num2m);
        break;
    case 4:
         const num1d = +prompt("Ingresa el primer numero a dividir");
        const num2d = +prompt("Ingresa el segundo numero a dividir");
        dividirDosNumeros(num1d, num2d);
        break;
    default:
        console.log("Opción no válida");
}


// ========= Arturo Ramirez ==============

// Función para que sume dos números y muestre en consola
export function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// =========== Tiempo Extra ===================

// Función que resta dos números
export function resta(num1, num2) {
  console.log(num1 - num2);
}

// Función que divide dos números
export function division(num1, num2) {
  if (num2 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("Error: No se puede dividir entre 0");
  }
}

// Función que recibe 3 números y los sume
export function sumaDeTres(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

// Función que permite encadenar operaciones con 3 datos de entrada Ejemplo 1+2-3
export function encadenar(x, z, y) {
  console.log((x + z) - y);
}

addTwoNumbers(2, 3);
addTwoNumbers(-2, -3);  
addTwoNumbers(13, 26); 
addTwoNumbers(-10, 30); 

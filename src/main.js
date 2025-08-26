// ========= Arturo Ramirez ==============

// Funcion para que sume dos numeros
export function addTwoNumbers(num1, num2) {
  return num1 + num2;
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


console.log(addTwoNumbers(5, 7));
resta(10, 4);
division(10, 2);
sumaDeTres(1, 2, 3);
encadenar(1, 2, 3);
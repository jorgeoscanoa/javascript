// asisgnamos la variable "input"
let input = prompt("Ingresa un número:");
//asigna la variable input a Numero
let numero = Number(input);
// isNaN = valida si es numero / Es decir si la variable no es un numero.
if (isNaN(numero)) {
  console.log("No es un número válido");
} else {
  if (numero > 0) {
  console.log(`${numero} es positivo`);
} else if (numero < 0) {
  console.log(`${numero} es negativo`);
} else {
  console.log("El número es cero");
}
}

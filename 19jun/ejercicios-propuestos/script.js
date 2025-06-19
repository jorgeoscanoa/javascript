// 1. Factorial de un número
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0) return 1; 
    let resultado = 1; 
    for (let i = 1; i <= n; i++) { 
        // resultado = resultado * i
        resultado *= i;
     } 
    return resultado;
 }

console.log('factorial(0) =', factorial(0)); // 1
console.log('factorial(5) =', factorial(5)); // 120
console.log('factorial(7) =', factorial(7)); // 5040

// 2. Contar vocales
function contarVocales(cadena) { 
    const vocales = 'aeiouAEIOU'; 
    let contador = 0; 
    for (let char of cadena) { 
        if (vocales.includes(char)) contador++;
     } 
        return contador; }
     console.log("contarVocales('¡Hola Mundo!') =", contarVocales('¡Hola Mundo!')); // 4

// 3. Convertir grados Celsius a Fahrenheit
function celsiusAFahrenheit(c) {
  return c * 9 / 5 + 32;
}
console.log('celsiusAFahrenheit(0) =', celsiusAFahrenheit(0));   // 32
console.log('celsiusAFahrenheit(100) =', celsiusAFahrenheit(100)); // 212

// 4. Sumar 1
function incrementar(n) {
  return n + 1;
}
console.log('incrementar(7) =', incrementar(7)); // 8

// 5. Multiplicar por 2
function doble(x) {
  return x * 2;
}
console.log('doble(7) =', doble(7)); // 14

// 6. Restar 1
function decrementar(n) {
  return n - 1;
}
console.log('decrementar(7) =', decrementar(7)); // 6

// 7. Booleano inverso
function invertir(b) {
  return !b;
}
console.log('invertir(true) =', invertir(true));   // false
console.log('invertir(false) =', invertir(false)); // true

// 8. Concatenar con espacio
function unir(a, b) {
  return a + ' ' + b;
}
console.log("unir('Hola', 'Mundo') =", unir('Hola', 'Mundo')); // "Hola Mundo"

// 9. Elevar al cuadrado
function cuadrado(x) {
  return x * x;
}
console.log('cuadrado(5) =', cuadrado(5)); // 25

// 10. Saludo genérico
function saludo() {
  return '¡Hola Mundo!';
}
console.log('saludo() =', saludo()); // "¡Hola Mundo!"

// 1. Definir el numero cuenta
let numeroCuenta = "12345"
let dinero = 200; // Monto que queremos dempositar

// 2. Definimos un saldo inicial
let saldo = 1000; // Saldo previo
// 3. Definimos la cuenta
const cuentaValida ="12345";
// 4 Comparamos
if(numeroCuenta === cuentaValida){
    saldo = saldo + dinero;
    console.log("Deposito exitoso. Nuevo saldo es : ", saldo);
} else{
    console.log("Cuenta no valida. Regrese dinero :(", dinero);
}


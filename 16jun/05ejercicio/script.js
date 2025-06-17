//Lea : Pedido -> simulamos la variable
let pedido = "Pedido #1";
//Lea: Ficha de Cliente ->Simulamos la variable con variante activo
let estadoCliente = "Activo"; //Probamos luego con Inactivo

// Comprobamos la condicion de estado de cliente

if(estadoCliente === "Activo"){
    //Acepta pedido
    console.log("Pedido aceptado");
} else {
    //Rechace pedido
    console.log("Pedido Rechazado");
}
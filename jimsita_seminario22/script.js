let carrito=[];
function mostrar(id){
let secciones=document.querySelectorAll("section");
secciones.forEach(s=>s.classList.add("oculto"));
document.getElementById(id).classList.remove("oculto");
}
function agregar(producto){
carrito.push(producto);
document.getElementById("lista").innerHTML=
carrito.join("<br>");
alert(producto+" agregado al carrito");
}
function finalizar(){
alert("Tu pedido ha sido realizado correctamente.\nGracias por comprar en FoodExpress.");

}
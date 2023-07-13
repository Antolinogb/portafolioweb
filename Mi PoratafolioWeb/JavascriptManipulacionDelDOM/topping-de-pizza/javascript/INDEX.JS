/*const contenedor=document.getElementById("contenedor");
console.log( contenedor.tagName);

const titulo=document.getElementById("titulo");
console.log( titulo.tagName);
const toppings=document.getElementsByTagName("li");
 console.log(toppings)

 const fondoMarron=document.getElementsByClassName(" fondo-marron ");
 console.log(fondoMarron)*/

/*const  aceituna=document.querySelector("ul li:not(.fondo-marron)");
console.log(aceituna)*/
  
 

 /* const enlaces=document.getElementsByTagName("a")
  console.log(enlaces[0].getAttribute("href"))*/

//obtener las clases de este elemento y agregar una  clase y eliminarla
  /*const primerTopping=document.querySelector(".topping");
  primerTopping.classList.add("fondo-azul")
  console.log(primerTopping.classList)*/

//crear elemento

/*const listaDeTopping=document.getElementById("lista-topping");
const toppingNuevo=document.createElement("li");

toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText="Quseo Extra";
 listaDeTopping.append(toppingNuevo );*/
 //elemento padre
 //const listaDeTopping=document.getElementById("lista-topping")
 //console.log(listaDeTopping.parentElement)
 
/*const albahaca=document.getElementById("albahaca");
 function mostrarClick(e){
  console.log(e.target.innerText);
 }
albahaca.addEventListener('click',mostrarClick);*/

//Seleccionar las clase y luego asignarle un eventos
const toppings=document.getElementsByClassName("topping");
 function mostrarClick(e){
  console.log(e.target.innerText);
 }
 for( const topping of toppings){
   topping.addEventListener('click',mostrarClick)
 }


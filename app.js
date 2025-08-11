const input = document.getElementById("amigo");
const botonAgregar = document.querySelector(".button-add");
const sortear = document.querySelector(".button-draw");
const lista = document.getElementById("listaAmigos");
amigos = [];
function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    }

//Se debe aplicar funciones llamadas el agrergar amigo y sortear amigo
//Debo agregar amigos con el ul e il eso estara en el HTMl
function agregarAmigo() {
    asignarTextoElemento("#resultado", "");
    if (input.value != "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = input.value;
        lista.appendChild(nuevoLi);
        amigos.push(input.value); // Agregar el amigo al array
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else{
        posicion = getRandomInt(amigos.length);
        while (lista.firstChild) {
        lista.removeChild(lista.firstChild);}
        asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${amigos[posicion]}`);
        amigos = []; 
    }
}



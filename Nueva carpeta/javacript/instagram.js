"use strict"

let btnMostrar = document.querySelector("#mostrar");
btnMostrar.addEventListener("click", mostrar);

let contenido = document.querySelector("#contenido");

let resultado= document.querySelector("#resultado");

 function mostrar(){
    resultado.innerHTML = contenido.value;
 }
 
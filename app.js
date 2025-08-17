let listaAmigos = []

// ----------------- Funciones -----------------
// Limpiar inputs
function limpiarCaja(elemento){
    return document.getElementById(elemento).value = ''
}

function condicionesIniciales(){
    // Limpiar texto de amigo secreto
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    // Limpiar el elemento ul
    let listaImpresa = document.getElementById('listaAmigos');
    listaImpresa.innerHTML = '';
    // Limpiar inputs
    limpiarCaja('amigo');
    listaAmigos = []
}

function indexAmigoSecreto(numAmigos){
    // Generar el indice de la lista
    return Math.floor(Math.random(numAmigos)*numAmigos);
}

function actualizarLista(amigo){
    // Extraer elemento ul
    let listaHtml = document.getElementById("listaAmigos");
    // Crear elemento li
    let nuevoItem = document.createElement('li');
    // Escribir el nombre y añadirlo a la lista
    nuevoItem.innerHTML = amigo
    listaHtml.append(nuevoItem)
}

function limpiarLista(){
    let listaCompleta = document.getElementById('listaAmigos');
    listaCompleta.innerHTML = ''
}

function mostrarResultado(amigoSeleccionado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}

//----------------- Botones -----------------
// Añadir
function agregarAmigo(){
    // Limpiar texto de amigo secreto
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    let amigoInput = document.getElementById('amigo').value
    
    // Si no es una cadena vacia
    if (amigoInput.trim() !== ""){
        // Agregar nombre a la lista
        listaAmigos.push(amigoInput);
        limpiarCaja('amigo');
        actualizarLista(amigoInput);
    } else {
        //Enviar una alerta
        alert('Ingresa el nombre de tu amigo secreto');
        limpiarCaja('amigo');
    }
    console.log(listaAmigos);
}

// Sortear amigo
function sortearAmigo(){
    // Salir de la función si no hay amigos
    if (listaAmigos.length == 0){
        alert('Añade amigos a la lista');
        return; 
    }
    
    if (listaAmigos.length == 1){
        alert('Necesitas al menos 2 amigos para hacer un sorteo');
        return;
    }

    // Generar índice aleatorio
    let indiceAmigoSecreto = indexAmigoSecreto(listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAmigoSecreto];
    
    
    // Limpiar la lista visual de amigos
    limpiarLista();
    
    // Mostrar el resultado (corregido: sin .value y con elemento correcto)
    mostrarResultado(amigoSeleccionado);
    
    // Reiniciar la lista
    listaAmigos = [];
}




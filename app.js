let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = ""; 
    mostrarLista(); 
}


function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (listaAmigos.length < 5) {
        alert("Debes ingresar al menos 5 amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}
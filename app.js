let amigos = [];

//Funcion que sirve para agregar amigos
function agregarAmigo() {
    let amigosInput = document.getElementById("amigo").value;
    if (amigosInput === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigosInput);
        console.log(amigos);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}
//Funcion que nos ayuda a mostrar los amigos ingresados
function mostrarAmigos() {
    let listaInput = document.getElementById("listaAmigos");
    listaInput.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaInput.innerHTML += `<li>${amigos[i]}</li>`;
        console.log(amigos[i]);
    }
}
//Funcion que ayuda a elegir un amigo y lo muestra
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No hay amigos agregados o no hay suficientes amigos para sortear.");
        return;
    } else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let sorteo = amigos[aleatorio];
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${sorteo}`;
        document.getElementById("listaAmigos").innerHTML = "";

    }
}

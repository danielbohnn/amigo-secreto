arrayAmigos = []
cont = 0

function adicionar() {
    let adicionarAmigo = document.getElementById("adicionar-amigo").value
    let listaAmigo = document.getElementById("lista-amigo")

    if (!adicionarAmigo) {
        alert("O campo está vazio")
        document.getElementById("adicionar-amigo").focus()
    } else if (arrayAmigos.includes(adicionarAmigo)) {
        alert(adicionarAmigo + " já está dentro da lista de amigos")
        document.getElementById("adicionar-amigo").value = ''
        document.getElementById("adicionar-amigo").focus()
    } else {
        arrayAmigos.push(adicionarAmigo)
        cont++
        listaAmigo.innerHTML = listaAmigo.innerHTML + "<div id='div-" + cont + "'>" + "<button id='remover-" + cont + "' onclick='remover(" + cont + ")'>X</button>" +  " " + "<b id='value-" + cont + "'>" + adicionarAmigo + "</b></div>";

        document.getElementById("adicionar-amigo").value = ''
        document.getElementById("adicionar-amigo").focus()
    }
}

function remover(id) {
    let div = document.getElementById("div-" + id)
    let divValor = document.getElementById('value-' + id).innerText
    let posicao = arrayAmigos.indexOf(divValor)

    arrayAmigos.splice(posicao, 1)

    var pa = div ? div.parentNode : null;

    if (pa) {
        pa.removeChild(div);
    }

}

function sortear() {
    embaralha(arrayAmigos)
    let sorteados = document.getElementById('amigo-presente')
    let ultimoLista = arrayAmigos[arrayAmigos.length - 1]

    if (arrayAmigos.length >= 4) {
        sorteados.innerHTML = ultimoLista + "->" + arrayAmigos[0] + "</br>"
        for (let i = 0; i < (cont - 1); i++) {
            sorteados.innerHTML = sorteados.innerHTML + arrayAmigos[0 + i] + "->" + arrayAmigos[1 + i] + "</br>"
        }
    } else {
        alert("Adicione pelo menos 4 amigos")
    }
}

function reiniciar() {
    cont = 0
    arrayAmigos = []
    document.getElementById("lista-amigo").innerHTML = ''
    document.getElementById("amigo-presente").innerHTML = ''

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);


        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

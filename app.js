listaAmigos = []
        cont = 0
        function adicionar() {
            let adicionarAmigo = document.getElementById("adicionar-amigo").value
            let listaAmigo = document.getElementById("lista-amigo")
            

            if (!adicionarAmigo) {
                alert("O campo está vazio")
                document.getElementById("adicionar-amigo").focus()
            }else if(listaAmigos.includes(adicionarAmigo)){
                alert(adicionarAmigo + " já está dentro da lista de amigos")
                document.getElementById("adicionar-amigo").value = ''
                document.getElementById("adicionar-amigo").focus()
            } else {
                listaAmigos.push(adicionarAmigo)
                cont++
                listaAmigo.innerHTML = listaAmigo.innerHTML + "<div id='div-" + cont + "'>" + "<button id='remover-" + cont + "' onclick='remover(" + cont + ")'> X </button>" + " " + adicionarAmigo + "</div>"
                document.getElementById("adicionar-amigo").value = ''
                document.getElementById("adicionar-amigo").focus()
            }

        }

        function remover(id) {
            let listaAmigo = document.getElementById("lista-amigo")
            let excluir = document.getElementById('remover-' + id)
            let div = document.getElementById("div-" + id)

            listaAmigos.splice((id - 1), 1)

            alert(listaAmigos)
        
            var pa = div ? div.parentNode : null;

            if (pa) {
                pa.removeChild(div);
            }

        }

        function sortear() {
            embaralha(listaAmigos)
            let sorteados = document.getElementById('amigo-presente')
            let ultimoLista = listaAmigos[listaAmigos.length - 1]

            if (listaAmigos.length >= 4) {
                sorteados.innerHTML = ultimoLista + "->" + listaAmigos[0] + "</br>"
                for (let i = 0; i < (cont - 1); i++) {
                    sorteados.innerHTML = sorteados.innerHTML + listaAmigos[0 + i] + "->" + listaAmigos[1 + i] + "</br>"
                }
            }else{
                alert("Adicione pelo menos 4 amigos")
            }
        }

            function reiniciar() {
                listaAmigos = []
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

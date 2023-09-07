let vez = "x"

function inserir_jogada(casa_selecionada) {
    const casa_da_vez = document.getElementById(`casa${casa_selecionada}`)
    casa_da_vez.disabled =true
    console.log(casa_da_vez)
    if (vez === "x") {
        text = document.createTextNode("X")
        casa_da_vez.appendChild(text)
        vez = "b"
        console.log(vez)
    }
    else{
        text = document.createTextNode("O")
        casa_da_vez.appendChild(text)
        vez = "x"
        console.log(vez)
    }

}

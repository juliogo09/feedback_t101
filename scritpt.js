let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEvenListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText
    localStorage.setItem("nota", nota)
}
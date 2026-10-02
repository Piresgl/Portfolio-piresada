const body = document.body;
const botaoTema = document.getElementById("botao-tema");

// Liga ou desliga o tema claro e ajusta o texto do botão
function aplicarTema(claro) {
    body.classList.toggle("tema-claro", claro);
    botaoTema.textContent = claro ? "Tema escuro" : "Tema claro";
}

// Ao abrir a página, lembra a escolha anterior (padrão: escuro)
aplicarTema(localStorage.getItem("tema") == "claro");

botaoTema.addEventListener("click", function () {
    const ficouClaro = !body.classList.contains("tema-claro");

    aplicarTema(ficouClaro);
    localStorage.setItem("tema", ficouClaro ? "claro" : "escuro");
});

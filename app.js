const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        btnTema.textContent = "☀";
    } else {
        btnTema.textContent = "☾";
    }
}
);
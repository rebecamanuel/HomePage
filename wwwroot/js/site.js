// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btnDescobre");

    if (botao) {

        botao.addEventListener("click", function () {

            document.getElementById("mensagem").textContent =
                "As mulheres têm um papel essencial na inovação tecnológica. O futuro da TI também é feminino!";

        });

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const pesquisa = document.getElementById("pesquisaMulheres");

    if (!pesquisa) return;

    const cartoes = document.querySelectorAll(".cartao-mulher");
    const resultado = document.getElementById("resultadoPesquisa");

    pesquisa.addEventListener("input", function () {

        const termo = pesquisa.value
            .toLowerCase()
            .trim();

        let encontrados = 0;

        cartoes.forEach(function (cartao) {

            const conteudo = cartao.textContent.toLowerCase();

            const corresponde = conteudo.includes(termo);

            cartao.style.display = corresponde ? "" : "none";

            if (corresponde) {
                encontrados++;
            }

        });

        if (termo === "") {
            resultado.textContent = "";
        } else if (encontrados === 0) {
            resultado.textContent = "Não foram encontradas mulheres com essa pesquisa.";
        } else {
            resultado.textContent = encontrados +
                (encontrados === 1
                    ? " mulher encontrada."
                    : " mulheres encontradas.");
        }

    });

});

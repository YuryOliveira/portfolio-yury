const form = document.getElementById("formContato");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const interesses = document.querySelectorAll(
        "input[type='checkbox']:checked"
    );

    if (nome === "") {
        erro.textContent = "Erro: preencha o nome.";
        return;
    }

    if (email === "") {
        erro.textContent = "Erro: preencha o email.";
        return;
    }

    if (telefone === "") {
        erro.textContent = "Erro: preencha o telefone.";
        return;
    }

    if (motivo === "") {
        erro.textContent = "Erro: selecione o motivo do contato.";
        return;
    }

    if (interesses.length === 0) {
        erro.textContent = "Erro: marque pelo menos uma área de interesse.";
        return;
    }

    if (mensagem.length < 20) {
        erro.textContent =
            "Erro: a mensagem precisa ter no mínimo 20 caracteres.";
        return;
    }

    erro.textContent = "";

    form.submit();

});

const btnTema = document.getElementById("btnTema");

if (localStorage.getItem("tema") === "escuro") {

    document.body.classList.add("tema-escuro");
    btnTema.textContent = "Modo Claro";

} else {

    btnTema.textContent = "Modo Escuro";

}

btnTema.addEventListener("click", function() {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {

        localStorage.setItem("tema", "escuro");
        btnTema.textContent = "Modo Claro";

    } else {

        localStorage.setItem("tema", "claro");
        btnTema.textContent = "Modo Escuro";

    }

});

document.getElementById("btnExperiencia").addEventListener("click", function() {

    const experiencias = [

        "Desenvolvimento de sistemas web.",
        "Criação de interfaces responsivas.",
        "Manipulação DOM com JavaScript.",
        "Desenvolvimento backend com PHP.",
        "Modelagem de banco de dados MySQL.",
        "Criação de formulários interativos.",
        "Criação de páginas com HTML e CSS.",
        "Versionamento de código com GitHub."

    ];

    const lista = document.getElementById("listaExperiencias");

    const novaExperiencia = document.createElement("li");

    const indiceAleatorio =
        Math.floor(Math.random() * experiencias.length);

    novaExperiencia.textContent =
        experiencias[indiceAleatorio];

    lista.appendChild(novaExperiencia);

});

function mostrarDataHora() {

    const agora = new Date();

    const dataHora = agora.toLocaleString("pt-BR", {

        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"

    });

    document.getElementById("dataHora").textContent =
        "Última atualização: " + dataHora;

}

// EASTER EGG RICKROLL

const fotoPerfil = document.querySelector(".foto");

let contadorCliques = 0;

fotoPerfil.addEventListener("click", () => {

    contadorCliques++;

    if (contadorCliques >= 10) {

        window.open(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "_blank"
        );

        contadorCliques = 0;
    }
});

mostrarDataHora();

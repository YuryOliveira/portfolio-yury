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

    document.body.classList.remove("tema-sakura");

    if (document.body.classList.contains("tema-escuro")) {

        localStorage.setItem("tema", "escuro");
        btnTema.textContent = "Modo Claro";

    } else {

        localStorage.setItem("tema", "claro");
        btnTema.textContent = "Modo Escuro";

    }

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

/* EASTER EGG RICKROLL */

const fotoPerfil = document.querySelector(".foto img");

let contadorRickRoll = 0;

if (fotoPerfil) {

    fotoPerfil.style.cursor = "pointer";

    fotoPerfil.addEventListener("click", function(event) {

        event.stopPropagation();

        contadorRickRoll++;

        if (contadorRickRoll >= 10) {

            window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

            contadorRickRoll = 0;
        }
    });
}

//* EASTER EGG SAKURA */

const areaPerfil = document.querySelector(".perfil");

let contadorSakura = 0;

let sakuraAtivado = false;
let sakuraFinalizado = false;

if (areaPerfil) {

    areaPerfil.style.cursor = "pointer";

    areaPerfil.addEventListener("click", function() {

        if (sakuraFinalizado) {
            return;
        }

        if (sakuraAtivado) {

            document.body.classList.remove("tema-sakura");

            criarChuvaFerramentas();

            sakuraAtivado = false;
            sakuraFinalizado = true;

            return;
        }

        contadorSakura++;

        if (contadorSakura >= 5) {

            document.body.classList.add("tema-sakura");

            criarPetalas();

            contadorSakura = 0;

            sakuraAtivado = true;
        }
    });
}

function criarPetalas() {

    const petalas = ["🌸", "💮", "🌺"];

    for (let i = 0; i < 40; i++) {

        const petala = document.createElement("div");

        petala.classList.add("petala");

        petala.textContent =
            petalas[Math.floor(Math.random() * petalas.length)];

        petala.style.left = Math.random() * 100 + "vw";

        petala.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        petala.style.fontSize =
            (Math.random() * 15 + 18) + "px";

        petala.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(petala);

        setTimeout(function() {
            petala.remove();
        }, 6000);
    }
}

function criarChuvaFerramentas() {

    const ferramentas = ["⛏️", "🗡️", "💎", "🟩", "🟫"];

    for (let i = 0; i < 40; i++) {

        const item = document.createElement("div");

        item.classList.add("petala");

        item.textContent =
            ferramentas[Math.floor(Math.random() * ferramentas.length)];

        item.style.left = Math.random() * 100 + "vw";

        item.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        item.style.fontSize =
            (Math.random() * 15 + 18) + "px";

        item.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(item);

        setTimeout(function() {
            item.remove();
        }, 6000);
    }
}
mostrarDataHora();

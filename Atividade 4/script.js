const registros = [];

const formulario = document.getElementById("form-contato");
const listaContatos = document.getElementById("lista-contatos");
const Limpar = document.getElementById("limpar");

// GET ITEM
const dadosSalvos = localStorage.getItem("contatos");

if (dadosSalvos !== null) {
    // JSON PARSE
    const registrosSalvos = JSON.parse(dadosSalvos);

    for (const registro of registrosSalvos) {
        registros.push(registro);
    }
}

function mostrarRegistros() {

    listaContatos.innerHTML = "";

    for (const registro of registros) {

        listaContatos.innerHTML += `
            <div>
                <strong>${registro.nome}</strong>
                <p>Telefone: ${registro.telefone}</p>
                <p>E-mail: ${registro.email}</p>
            </div>
        `;
    }
}
// FORMULARIO
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    // OBJETO CRIADO
    const contato = {
        nome: nome,
        telefone: telefone,
        email: email
    };
    // PUSH
    registros.push(contato);

    //  SET ITEM E JSON stringify
    localStorage.setItem("contatos", JSON.stringify(registros));

    mostrarRegistros();

    formulario.reset();
});

Limpar.addEventListener("click", function () {

    registros.length = 0;

    localStorage.removeItem("contatos");

    mostrarRegistros();
});

mostrarRegistros();
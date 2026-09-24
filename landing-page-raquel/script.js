// GETELEMENTBYID
const formulario = document.getElementById("cadastro");
const botao = document.getElementById("btn-enviar");
const botaohero = document.getElementById("botao")

// O BOTÃO DA HERE QUE ENVIA PARA A PARTE DE PRPODUTOS AO CLICAR
botaohero.addEventListener('click', function () {
    location.href = "#produto";
})

// ADDEVENTLISTENER PARA MUDAR O BOTAO
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // .VALUE 
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const email = document.getElementById("email").value;

    // SE VAZIO O BOTÃO MUDA PARA PREENCHA TODOS OS CAMPOS
    if (nome === "" || numero === "" || email === "") {
        botao.textContent = "Preencha todos os campos!";
        botao.style.backgroundColor = "red";
        return;
    }

    //  SE PREENCHIDO O BOTÃO MUDA PARA CADASTRADO COM SUCESSO E ACOR É ALTERADA
    botao.textContent = "Cadastrado com sucesso!";
    botao.style.backgroundColor = "greenyellow";

})


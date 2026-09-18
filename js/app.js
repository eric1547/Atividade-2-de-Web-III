/*EXERCÍCIO 05: MOSTRAR E ESCONDER */
const btnDetalhes = document.getElementById("btnDetalhes");
const painelDetalhes = document.getElementById("painelDetalhes");

btnDetalhes.addEventListener("click", function() {
    /*toggle() adiciona a classe se ela não existir e remove se ela já existir.
    d-none = display: none*/
    painelDetalhes.classList.toggle("d-none");

    const estaEscondido = painelDetalhes.classList.contains("d-none");

    if (estaEscondido) {
        btnDetalhes.textContent = "Mostrar detalhes";
    } else {
        btnDetalhes.textContent = "Esconder detalhes";
    }
});


/*EXERCÍCIO 06: CRIAR ELEMENTOS*/
const btnCriarItem = document.getElementById("btnCriarItem");
const listaCriada = document.getElementById("listaCriada");

let quantidadeItens = 0;

btnCriarItem.addEventListener("click", function() {
    quantidadeItens++;

    const novoItem = document.createElement("li");
    novoItem.classList.add("list-group-item");
    novoItem.textContent = `Item #${quantidadeItens}`;

    listaCriada.appendChild(novoItem);
});


/*EXERCÍCIO 07: LISTA DE TAREFAS*/
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionarTarefa = document.getElementById("btnAdicionarTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const avisoTarefa = document.getElementById("avisoTarefa");

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        avisoTarefa.textContent = "Digite uma tarefa antes de adicionar.";
        return;
    }

    avisoTarefa.textContent = "";

    const novaTarefa = document.createElement("li");
    novaTarefa.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );

    const texto = document.createElement("span");
    texto.textContent = textoTarefa;

    const btnRemover = document.createElement("button");
    btnRemover.type = "button";
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("btn", "btn-sm", "btn-outline-danger");

    novaTarefa.appendChild(texto);
    novaTarefa.appendChild(btnRemover);
    listaTarefas.appendChild(novaTarefa);

    btnRemover.addEventListener("click", function() {
        novaTarefa.remove();
    });

    inputTarefa.value = "";
    inputTarefa.focus();
}

btnAdicionarTarefa.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});

listaTarefas.addEventListener("click", function(evento) {
    if (evento.target.tagName === "SPAN") {
        evento.target.classList.toggle("text-decoration-line-through");
        evento.target.classList.toggle("text-muted");
    }
});


/*EXERCÍCIO 08: FILTRO DE PRODUTOS*/
const inputFiltroProduto = document.getElementById("inputFiltroProduto");

const produtos = document.querySelectorAll(".produto");

function filtrarProdutos() {
    const textoPesquisa = inputFiltroProduto.value.trim().toLowerCase();

    produtos.forEach(function(produto) {
        const nomeProduto = produto.querySelector(".nome-produto");
        const nome = nomeProduto.textContent.toLowerCase();
        const encontrou = nome.includes(textoPesquisa);

        if (encontrou) {
            produto.classList.remove("d-none");
        } else {
            produto.classList.add("d-none");
        }
    });
}

inputFiltroProduto.addEventListener("input", filtrarProdutos);


/* MENSAGEM DE TESTE */
console.log("Laboratório JavaScript + DOM carregado com sucesso!");
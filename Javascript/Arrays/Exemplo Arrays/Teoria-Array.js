// MÉTODOS DE ITERAÇÃO E TRANSFORMAÇÃO
console.log("MÉTODOS DE ITERAÇÃO E TRANSFORMAÇÃO");

const produtos = [
    {nome: "Celular", preco: 2000, categoria: "Eletrônicos"},
    {nome:"Notebook", preco: 4000, categoria: "Eletrônicos"},
    {nome: "Armário", preco: 2500, categoria: "Móveis"}
];

// 1) forEach - Percorre cada item do array e executa a mesma função para cada um deles (não modifica o array)
console.log("forEach:");
produtos.forEach((produto) => console.log(`${produto.nome} custa R$${produto.preco}`));
console.log("\n");

// 2) map() - Cria um novo array trasnformando os dados, retornando um novo array modificado
console.log("map():");
const comDesconto = produtos.map((produto) => ({preco: produto.preco * 0.9}));
console.log(comDesconto);
console.log("\n")

// 3) filter() - Filtra os itens, retornando um novo array menor
console.log("filter: ");
const arrayEspecifico = produtos.filter((produto) => (produto.categoria === "Eletrônicos"));
console.log(arrayEspecifico);
console.log("\n");

// 4) reduce() - Reduz todo o array a um único valor, exemplo: somar todos
console.log("reduce(): ");
const estoqueTotal = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(estoqueTotal);
console.log("\n");


//MÉTODOS DE BUSCA
console.log("MÉTODOS DE BUSCA");

const nomes = ["Ana", "Bruno", "Lucas", "Júlia"];

// 1) find() - Retorna o primeiro item que bater com a condição
console.log("find()")
const comecaComJ = nomes.find((nome) => nome.startsWith("J"));
console.log(comecaComJ);
console.log("\n");

// 2) findIndex() - Retorna a posição do primeiro item encontrado
console.log("findIndex()");
const indiceBruno = nomes.findIndex((nome) => nome === "Bruno");
console.log(indiceBruno);
console.log("\n")

// 3) some() - Checa se pelo menos um indice atende a condição, retornando true ou false
console.log("some()");
const temNomeCurto = nomes.some((nome) => nome.length <= 3);
console.log(temNomeCurto);
console.log("\n")

// 4) every() - Checa se todos os itens atendem a condição, retornando true ou false
console.log("every()");
const todosTemB = nomes.every((nome) => nome.includes("b") || nome.includes("B"));
console.log(todosTemB);
console.log("\n");


//MÉTODOS DE MODIFICAÇÃO
console.log("MÉTODOS DE MODIFICAÇÃO");

let tarefas = ["Treinar", "Estudar Js", "Ler"];

// 1) push() - Adiciona um item ao fim do array
console.log("push()");
tarefas.push("Dormir");
console.log(tarefas);
console.log("\n");

// 2) pop() - Remove o último item do array
console.log("pop()");
tarefas.pop();
console.log(tarefas);
console.log("\n");

// 3) shift() - Remove o primeiro item do array
console.log("shift()");
tarefas.shift();
console.log(tarefas);
console.log("\n");

// 4) unshift() - Adiciona um item no início do array
console.log("unshift()");
tarefas.unshift("Comprar Pão");
console.log(tarefas);
console.log("\n");
const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16RAM', 'Notebook', '7600.99'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16RAM', 'Notebook', '3500.00'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32RAM', 'Notebook', '9800.00'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8RAM', 'Celular', '7300.59']
]
const sectionCard = document.querySelector(".cards");

function criarCard(){
    produtos.forEach((produto) => {
        const divCard = document.createElement("div");
        const tituloCard = document.createElement("h1");
        const textCard = document.createElement("p");
        textCard.textContent = produto[1];
        tituloCard.textContent = produto[0];
        divCard.appendChild(tituloCard);
        divCard.appendChild(textCard);
        sectionCard.appendChild(divCard);
    })
}
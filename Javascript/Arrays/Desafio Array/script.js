const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16RAM', 'Notebook', '7600.99', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8TQQAQnnYWxPDgtV4pOwFhiePF6-e_wwDJm3hSfv4g&s=10'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16RAM', 'Notebook', '3500.00', 'https://m.media-amazon.com/images/I/51cj43d2FUL._AC_UF894,1000_QL80_.jpg'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32RAM', 'Notebook', '9800.00', 'https://m.media-amazon.com/images/I/61O9g8YnSkL._AC_UF894,1000_QL80_.jpg'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8RAM', 'Celular', '7300.59', 'https://www.apple.com/v/iphone-17-pro/g/images/meta/iphone-17-pro_overview__eumhhclcpuaa_og.png?202607160844']
]
const sectionCard = document.querySelector(".cards");

function criarCard(){
    produtos.forEach((produto) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        const tituloCard = document.createElement("h2");
        tituloCard.classList.add("titulo")
        const textCard = document.createElement("p");
        const textPreco = document.createElement("h3");
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = produto[4];
        textPreco.classList.add("preco");
        textCard.textContent = produto[1];
        tituloCard.textContent = produto[0];
        textPreco.textContent = `R$${produto[3]}`;
        divCard.appendChild(tituloCard);
        divCard.appendChild(textCard);
        divCard.appendChild(img);
        divCard.appendChild(textPreco);
        sectionCard.appendChild(divCard);
    });
}
criarCard();
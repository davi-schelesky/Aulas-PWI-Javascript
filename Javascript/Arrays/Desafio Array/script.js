const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16RAM', 'Notebook', '7600.99', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8TQQAQnnYWxPDgtV4pOwFhiePF6-e_wwDJm3hSfv4g&s=10'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16RAM', 'Notebook', '3500.00', 'https://m.media-amazon.com/images/I/51cj43d2FUL._AC_UF894,1000_QL80_.jpg'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32RAM', 'Notebook', '9800.00', 'https://m.media-amazon.com/images/I/61O9g8YnSkL._AC_UF894,1000_QL80_.jpg'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8RAM', 'Celular', '7300.59', 'https://www.apple.com/v/iphone-17-pro/g/images/meta/iphone-17-pro_overview__eumhhclcpuaa_og.png?202607160844'],
    ['Playstation 5', 'PS5 Slim Wolverine Edition', 'Videogame', '4300', 'https://images.kabum.com.br/produtos/fotos/1065184/console-playstation-5-sony-edicao-digital-marvel-s-wolverine-pacote-de-edicao-limitada-825-gb-amarelo-1000056865_1787145891_gg.jpg'],
    ['PC Gamer Completo', 'PC Gamer Ryzen 7 7600', 'PC', '6400', 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/684007/xlarge/PC-Gamer-Completo-Ryzen-5-5600gt-16gb-Ddr4-SSD-480GB-500w-80-Plus-PCgt13-e_1779735227.png'],
    ['Nintendo Switch Oled', 'Nintendo Switch', 'Videogame', '3200', 'https://m.media-amazon.com/images/I/61nqNujSF2L.jpg'],
    ['Mouse Gamer Logitech', 'Mouse Gamer Logitech', 'Periféricos', '220', 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/vztogtli/file.png']
];
const sectionCard = document.querySelector(".cards");
const inputEnviar = document.getElementById('inputEnviar');

function criarCard(categoria){
    sectionCard.innerHTML = '';
    categoria.forEach((produto) => {
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

function procurarItem(e){
    e.preventDefault();
    const inputPesquisa = document.getElementById('pesquisa');
    const itemProcurado = inputPesquisa.value.trim();

    let categoria = produtos.filter((produto) => (produto[2].toLowerCase() == itemProcurado.toLowerCase()));

    if(categoria.length == 0){
        sectionCard.innerHTML = '';
        const textoSemItens = document.createElement("p");
        textoSemItens.textContent = "Não há essses itens no catálogo";
        textoSemItens.style = "color: red; font-size: 2rem;";
        sectionCard.appendChild(textoSemItens);
    } else {
        criarCard(categoria);
    }
    inputPesquisa.value = "";
}

criarCard(produtos);
inputEnviar.addEventListener('click', procurarItem);
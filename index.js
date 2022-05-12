let productsCart = [
  {
    id: 1,
    name: "Pão",
    price: 0.5,
    // quantity: 1,
  },
  {
    id: 2,
    name: "Leite",
    price: 5.98,
    // quantity: 1,
  },
  {
    id: 3,
    name: "Nescau",
    price: 10,
    // quantity: 1,
  },
  {
    id: 4,
    name: "Café",
    price: 5,
    // quantity: 1,
  },
  {
    id: 5,
    name: "Pizza",
    price: 40,
    // quantity: 1,
  },
];

let soma = 0;
let lastId = 0;

const body = document.querySelector("body");
const main = document.createElement("main");
const marketTitle = document.createElement("h2");
const productsList = document.createElement("ul");
const topoLista = document.createElement("li");
const topoListaText1 = document.createElement("span");
const topoListaText2 = document.createElement("span");
// const topoListaText3 = document.createElement("span");
const section = document.createElement("section");
const button = document.createElement("button");
const total = document.createElement("span");
const totalText = document.createElement("span");

body.appendChild(main);
main.appendChild(marketTitle);
main.appendChild(productsList);
productsList.appendChild(topoLista);
section.appendChild(totalText);
section.appendChild(total);
topoLista.appendChild(topoListaText1);
topoLista.appendChild(topoListaText2);
// topoLista.appendChild(topoListaText3);

marketTitle.innerText = "Raphael's Market";
button.innerText = "Finalizar Compra";
button.className = "animacao";
totalText.innerText = "Total";
topoListaText1.innerText = "Item";
topoListaText2.innerText = "Valor";
// topoListaText3.innerText = "Quantidade";

function inserirProdutos(produtos) {
  for (let i = 0; i < produtos.length; i++) {
    let product = document.createElement("li");
    let productName = document.createElement("span");
    let productsDetail = document.createElement("span");
    // let productsQuantity = document.createElement("span");

    productsDetail.innerText =
      "R$ " + produtos[i].price.toFixed(2).replace(".", ",");
    productName.innerText = produtos[i].name;
    // productsQuantity.innerText = produtos[i].quantity;
    productsList.appendChild(product);
    product.appendChild(productName);
    product.appendChild(productsDetail);
    // product.appendChild(productsQuantity);
    console.log(soma);
    soma += parseFloat(produtos[i].price);
    total.innerText = "R$ " + soma.toFixed(2).replace(".", ",");
    lastId = i + 1;
  }
}

inserirProdutos(productsCart);

main.appendChild(section);
main.appendChild(button);

productsList.className = "products_List";
topoLista.className = "topo_Lista";

function addProduct(nome, preco, quantidade) {
  //   for (let i = 0; i < productsCart.length; i++) {
  //     if (productsCart[i].name === nome && productsCart[i].price === preco) {
  //       productsCart[i].quantity =
  //         parseFloat(quantidade) + productsCart[i].quantity;
  //       inserirProdutos(productsCart);
  //     } else {
  //       productsCart = [
  //         {
  //           id: lastId + 1,
  //           name: nome,
  //           price: preco,
  //           quantity: quantidade,
  //         },
  //       ];
  //       inserirProdutos(productsCart);
  //     }
  //   }

  productsCart = [
    {
      id: lastId + 1,
      name: nome,
      price: preco,
      quantity: quantidade,
    },
  ];
  inserirProdutos(productsCart);
  return `Item ${nome} adicionado com sucesso!`;
}

// Formulário de adicionar produtos

const form = document.createElement("form");
const tituloForm = document.createElement("h3");
const nomeProduto = document.createElement("input");
const precoProduto = document.createElement("input");
// const quantidadeProduto = document.createElement("input");
const botaoAdicionar = document.createElement("button");

body.appendChild(form);
form.appendChild(tituloForm);
form.appendChild(nomeProduto);
form.appendChild(precoProduto);
// form.appendChild(quantidadeProduto);
form.appendChild(botaoAdicionar);

tituloForm.innerText = "Adicionar Produtos";
nomeProduto.setAttribute("placeholder", "Nome do Produto");
nomeProduto.setAttribute("required", "true");
precoProduto.setAttribute("placeholder", "Valor");
precoProduto.setAttribute("required", "true");
// quantidadeProduto.setAttribute("placeholder", "Quantidade");
// quantidadeProduto.setAttribute("required", "true");
botaoAdicionar.innerText = "Adicionar Produto";
botaoAdicionar.className = "animacao";

form.addEventListener("submit", adicionarProduto);

function adicionarProduto(event) {
  event.preventDefault();

  const form = event.target;
  const nome = form[0].value;
  const preco = form[1].value.replace(",", ".");
  //   const quantidade = form[2].value;
  addProduct(nome, parseFloat(preco));
  //   addProduct(nome, parseFloat(preco), parseFloat(quantidade));
}

import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";

const products = document.querySelector("#list-prod");

getProducts().then(data => {  
  const result = data.map(renderProducts).join('');
  products.innerHTML = result;
});
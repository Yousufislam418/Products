import navbar from "../components/navbar.js";
import searchProduct from "../components/search-product.js";

function searchProductDisplay(eve){
  document.getElementById('search-product-display').innerHTML += eve;
}

searchProductDisplay(navbar());
searchProductDisplay(searchProduct());
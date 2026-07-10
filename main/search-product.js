import navbar from "../components/navbar.js";
import searchProduct from "../components/search-product.js";
import Footer from "../components/footer.js";

function searchProductDisplay(eve){
  document.getElementById('search-product-display').innerHTML += eve;
}

searchProductDisplay(navbar());
searchProductDisplay(searchProduct());
searchProductDisplay(Footer());
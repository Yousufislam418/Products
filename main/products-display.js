import navbar from "../components/navbar.js";
import products from "../components/products-display.js";
import Footer from "../components/footer.js";

function ProductsDisplay(eve){
const display = document.getElementById('products-display');
   display.innerHTML += eve;
}

ProductsDisplay(navbar());
ProductsDisplay(products());
ProductsDisplay(Footer());

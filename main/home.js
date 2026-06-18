import navbar from "../components/navbar.js";
import products from "../components/products-display.js";

function home(eve){
const display = document.getElementById('home');
   display.innerHTML += eve;
}

home(navbar());
home(products());
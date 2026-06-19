import navbar from "../components/navbar.js";
import checkProduct from "../components/check-product.js";

function checkProductDisplay(eve){
  document.getElementById('check-product-display').innerHTML += eve;
}

checkProductDisplay(navbar());
checkProductDisplay(checkProduct());
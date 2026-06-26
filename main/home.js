import navbar from "../components/navbar.js";
import Menu from "../components/menu.js";

function home(eve){
const display = document.getElementById('home');
   display.innerHTML += eve;
}

home(navbar());
home(Menu());
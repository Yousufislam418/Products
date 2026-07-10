import navbar from "../components/navbar.js";
import PosSystem from "../components/pos-system.js";
import Footer from "../components/footer.js";


function PosSystemDisplay(eve){
  document.getElementById('pos-system-display').innerHTML += eve;
}

PosSystemDisplay(navbar());
PosSystemDisplay(PosSystem());
PosSystemDisplay(Footer());

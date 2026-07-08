import navbar from "../components/navbar.js";
import PosSystem from "../components/pos-system.js";


function PosSystemDisplay(eve){
  document.getElementById('pos-system-display').innerHTML += eve;
}

PosSystemDisplay(navbar());
PosSystemDisplay(PosSystem());

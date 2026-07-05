import navbar from "../components/navbar.js";
import SearchBarcodeByCamera from "../components/search-barcode-by-camera.js";


function searchBarcodeByCameraProductDisplay(eve){
  document.getElementById('search-barcode-by-camera-display').innerHTML += eve;
}

searchBarcodeByCameraProductDisplay(navbar());
searchBarcodeByCameraProductDisplay(SearchBarcodeByCamera());

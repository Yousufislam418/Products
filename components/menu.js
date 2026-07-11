import Footer from "./footer.js"

export default function Menu(){
 return(`
  <section>
   <div class="menu-container bg-blue radius-5 shadow-5 m-8">
   <div class="content p-15 grid grid-cols-2 gap-20">
    <div class="item-1 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="search-product.html">Search</a>
    </div>
    <div class="item-2 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="products-display.html">Products</a>
    </div>
    <div class="item-3 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="search-barcode-by-camera.html">Scan Camera</a>
    </div>
    <div class="item-4 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="pos-system.html">POS System</a>
    </div>
    </div>
   </div>
  </section>
`);
}
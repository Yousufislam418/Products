
export default function Menu(){
 return(`
  <section>
   <div class="menu-container bg-blue radius-5 shadow-5 m-10">
   <div class="content p-10 grid grid-cols-2 gap-10">
    <div class="item-1 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="search-product.html">Search Product</a>
    </div>
    <div class="item-2 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="products-display.html">Products</a>
    </div>
    <div class="item-3 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="add-products.html">Add Product</a>
    </div>
    <div class="item-4 h-180 center radius-5 shadow-5">
     <a class="white fs-20 text-shadow-5" href="search-product.html">About</a>
    </div>
    </div>
   </div>
  </section>
 `)
}
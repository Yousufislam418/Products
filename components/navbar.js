export default function navbar(){
 return(`
    <section class="sticky top-0">
     <div class="container bg-blue m-5 shadow-5">
     <div class="content flex">
      <ul class="p-10 ml-10">
       <li class="align-center"><a href="home.html"><img class="w-25" src="../icons/home-white.png"></a></li>
      </ul>
      <ul class="w-95-pr flex justify-around p-10 md-fs-16 bold">
       <li class="align-center"><a class="white" href="search-product.html">Search</a></li>
       <li class="align-center"><a class="white" href="products-display.html">Products</a></li>
       <li class="align-center"><a class="white" href="search-barcode-by-camera.html">Scan Camera</a></li>
       <li class="align-center"><a class="white" href="pos-system.html">Pos System</a></li>
      </ul>
     </div>
    </div>
   </section>
  `);
}
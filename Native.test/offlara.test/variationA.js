(function() {
  try {
    var debug = 0; 
    var variation_name = ""; 
  const popup = `
    <div id="necklace-popup-overlay">

      <div id="necklace-popup">

        <span id="close-popup">✖</span>

        <h2>Necklace Collection</h2>

        <div id="product-container">
          Loading Products...
        </div>

      </div>

    </div>
  `;
    function waitForElement(selector, trigger, delayInterval = 50, delayTimeout = 15000) {
      var interval = setInterval(function() {
        if (document && 
            document.querySelector(selector)
             && document.querySelectorAll(selector).length > 0) 
             {
          clearInterval(interval);
          trigger(document.querySelector(selector));
        }
      }, 45);
      setTimeout(function() {
        clearInterval(interval);
      }, 15000);
    }
    
    // STEP 1: WAIT FOR PAGE
    waitForElement("body", function() {

      // STEP 2: INSERT POPUP
      document.body.insertAdjacentHTML("beforeend", popup);

      // STEP 3: NOW ELEMENTS EXIST
      const overlay = document.getElementById("necklace-popup-overlay");
      const closeBtn = document.getElementById("close-popup");

      // CLOSE BUTTON
      closeBtn.addEventListener("click", function() {
        overlay.remove();
      });

      // CLICK OUTSIDE CLOSE
      overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
       document.addEventListener("mouseleave", function (e) {
  if (e.clientY <= 0) {
    overlay.style.display = "flex";
  }
});

      // STEP 4: FETCH DATA
      fetch("https://www.oflara.com/collections/fancy-crystal-necklace-sets/products.json?limit=6")
        .then(res => res.json())
        .then(data => {

          let html = "";

          data.products.forEach(product => {

            let img = product.images[0]?.src || "";

            // FIX IMAGE ISSUE
            if (img.startsWith("//")) {
              img = "https:" + img;
            }

            html += `
              <div class="product-card">

                <img src="${img}" />

                <h4>${product.title}</h4>

                <p>$${product.variants[0].price}</p>

                <button onclick="window.open('/products/${product.handle}','_blank')">
                  Buy Now
                </button>

              </div>
            `;
          });

          document.getElementById("product-container").innerHTML = html;

        })
        .catch(err => {
          console.error(err);
          document.getElementById("product-container").innerHTML =
            "Unable to load products";
        });

    });

  } catch (e) {
    console.log(e);
  }
})();
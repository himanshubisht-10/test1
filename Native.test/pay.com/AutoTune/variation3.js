(function () {
  try {
    var debug = 0;
    var variation_name = "";
    function waitForElement(selector, trigger, delayInterval = 50, delayTimeout = 15000) {
      var interval = setInterval(function () {
        if (document.querySelector(selector)) {
          clearInterval(interval);
          trigger(document.querySelector(selector));
        }
      }, 50);

      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    // HEADER AREA
  
    waitForElement(".oxy-header-right", function () {

      const iconitem = document.querySelector(".oxy-header-right");

      const nav = `
        <div class="nav-button">
          <a href="#" class="nav-btn">Pet insurance</a>
        </div>
      `;

      if (iconitem && !document.querySelector(".nav-btn")) {
        iconitem.insertAdjacentHTML("afterbegin", nav);
      }


     
      // BUTTON CLICK
      
      const button = document.querySelector(".nav-btn");
    
      if (button) {
        button.addEventListener("click", function (e) {
          e.preventDefault();

          const header = document.querySelector(".abtest-header");

          if (header) {

            // OPEN ACCORDION
         

    if (item && header) {

      // Open only if it is currently closed
      if (!item.classList.contains("active")) {
        header.click();
      }
            // SCROLL WITH OFFSET
            setTimeout(function () {

              const offset = 100;

              const top =
                header.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

              window.scrollTo({
                top: top,
                behavior: "smooth"
              });

            }, 200);
          }
          })
      }

    })

    // =========================
    // ACCORDION INJECTION
    // =========================
    waitForElement(".oxy-pro-accordion", function (accordionContainer) {

      if (document.querySelector(".abtest-accordion-item")) return;

      const items = accordionContainer.querySelectorAll(".oxy-pro-accordion_item");
      const lastItem = items[items.length - 1];

      const newItemHTML = `
        <div class="oxy-pro-accordion_item abtest-accordion-item">

          <button class="oxy-pro-accordion_header abtest-header" type="button">
            <h4 class="oxy-pro-accordion_title">
              Vets love pet insurance
            </h4>
            <span class="oxy-pro-accordion_icon">+</span>
          </button>

          <div class="oxy-pro-accordion_body" style="display:none;">
            <div class="oxy-pro-accordion_content">
              <p>
                Pet insurance helps veterinarians recommend the best treatment
                without cost being the deciding factor.
              </p>
            </div>
          </div>

        </div>
      `;

      lastItem.insertAdjacentHTML("afterend", newItemHTML);

      const newItem = accordionContainer.querySelector(".abtest-accordion-item");
      const header = newItem.querySelector(".abtest-header");
      const body = newItem.querySelector(".oxy-pro-accordion_body");

      header.addEventListener("click", function () {

        const isOpen = newItem.classList.contains("active");

        accordionContainer.querySelectorAll(".oxy-pro-accordion_item")
          .forEach(function (item) {

            item.classList.remove("active");

            const itemBody = item.querySelector(".oxy-pro-accordion_body");

            if (itemBody) itemBody.style.display = "none";
          });

        if (!isOpen) {
          newItem.classList.add("active");
          body.style.display = "block";
        }

      });

    });

  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
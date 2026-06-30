(function () {
  try {
    var debug = 1;
    function waitForElement(selector, cb) {
      var interval = setInterval(function () {
        var el = document.querySelector(selector);
        if (el) {
          clearInterval(interval);
          cb(el);
        }
      }, 50);

      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function waitForSwiper(cb) {
      var interval = setInterval(function () {
        if (window.Swiper) {
          clearInterval(interval);
          cb();
        }
      }, 50);
    }

    function addScript(src, isCss) {
      if (isCss) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = src;
        document.head.appendChild(link);
      } else {
        var script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
      }
    }

    // Load Swiper
    addScript(
      "https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js",
      false
    );

    addScript(
      "https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css",
      true
    );

    waitForElement(".swiper", function (swiperEl) {

      waitForSwiper(function () {

        var check = setInterval(function () {

          if (!swiperEl.swiper) return;

          clearInterval(check);

          var swiper = swiperEl.swiper;
          var wrapper = swiperEl.querySelector(".swiper-wrapper");

          if (!wrapper) return;

          var slides = wrapper.querySelectorAll(".swiper-slide");

          if (slides.length < 5) {
            if (debug) console.log("Not enough slides");
            return;
          }

          if (swiper.params.loop) {
            swiper.loopDestroy();
          }

          wrapper.insertBefore(slides[4], slides[0]);

          swiper.update();

          if (swiper.params.loop) {
            swiper.loopCreate();
            swiper.update();
          }
          // paggination
          if (swiper.pagination) 
            swiper.pagination.update();
          //navigation
          if (swiper.navigation) 
            swiper.navigation.update();
          //scrollbar 
          if (swiper.scrollbar) 
            swiper.scrollbar.updateSize();

          swiper.slideTo(0, 0);

          if (debug) console.log("Swiper fixed successfully");

        }, 100);

      });

    });

  } catch (e) {
    console.log(e);
  }
})();
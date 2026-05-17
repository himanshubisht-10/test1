function waitForElement(selector, trigger) {
    var interval = setInterval(function () {
        if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
        ) {
            clearInterval(interval);
            trigger();
        }
    }, 50);
    setTimeout(function () {
        clearInterval(interval);
    }, 15000);
}

const navbar = `
<div class='modal-overlay' style='display:none'> 
  <div class="card-container">
    <div class="card">
      <div class="header">
      scaler <span class="close-btn">✖</span>
      </div>
      <div class="body">
        <div class="card-subtext">Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Praesentium, veniam laboriosam corrupti aliquam 
          vitae explicabo sequi. Officiis autem cumque necessitatibus 
          labore, praesentium ratione quos culpa veniam nihil earum ullam a.
        Nam soluta laboriosam necessitatibus temporibus vero numquam deserunt
         impedit odio mollitia quia nobis laudantium quam aliquam magni iure
          tempore, eaque debitis repellat magnam amet. Nulla ducimus mollitia alias ab voluptatem!
        Voluptatum quod illo dignissimos, qui illum maiores obcaecati error provident modi 
        doloremque distinctio, autem officia labore odio suscipit quidem 
        possimus atque ab praesentium quo sunt? D</div>
        <div class="button">
          <button class="primary-btn">Buy now</button>
        </div>
      </div>
    </div>
  </div>`;


waitForElement('.section--hero .button-wrapper ', function () {

    document.querySelector('body').insertAdjacentHTML('beforeend', navbar);
});

waitForElement('.section--hero .button-wrapper a', function () {
    const btn = document.querySelector('.section--hero .button-wrapper a');
    const overlay = document.querySelector('.modal-overlay');
  const box = document.querySelector('.card-container');
  const card = document.querySelector('.card-container .card');
  const closeBtn = document.querySelector('.close-btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
         document.body.classList.add('show-modal');
    });
  
    document.addEventListener('mouseleave', e => {
  if (e.clientY < 10) {
    document.body.classList.add('show-modal');
  }
});
  
        
  closeBtn.addEventListener('click', function() {
    document.body.classList.remove('show-modal');
  });

  
  overlay.addEventListener('click', function() {
    document.body.classList.remove('show-modal');
  });
// user come to webpage
  
  
   card.addEventListener('click', function(e) {
     e.stopPropagation();
    });
      setTimeout(() => {
   document.body.classList.add('show-modal');
 }, 2000);
 
 });
 waitForElement('.section.header__outer-wrapper',function(){
  document.querySelector('.section.header__outer-wrapper').innertext = 'scalar';
 })
  

  
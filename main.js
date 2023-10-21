var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        990: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
  });

  const menuBtn = document.querySelector('.menuBtns');
  const menuLinks = document.querySelectorAll('.header__nav .nav__link');
  
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  menuLinks.forEach((item) => item.addEventListener('click' , () => document.querySelector('html').classList.toggle('open')));
  
  // document.querySelectorAll('a[href^="#"').forEach(link => {
  
  //     link.addEventListener('click', function(e) {
  //         e.preventDefault();
    
  //         let href = this.getAttribute('href').substring(1);
    
  //         const scrollTarget = document.getElementById(href);
    
  //         const topOffset = document.querySelector('header').offsetHeight;
  //         // const topOffset = 0; // если не нужен отступ сверху 
  //         const elementPosition = scrollTarget.getBoundingClientRect().top;
  //         const offsetPosition = elementPosition - topOffset;
    
  //         window.scrollBy({
  //             top: offsetPosition,
  //             behavior: 'smooth'
  //         });
  //     });
  //   });
  
  //   const loadMore = () => {
  //     var data = Array.from(document.querySelectorAll('.work__images .work-img'));
  //     const load_more_btn =  document.querySelector('#see_more');
  //     if(data.length > 6) {
  //     load_more_btn.style.display = 'block';
  //     let step = 6;
  //     let item = 0;
  //     data.slice(step).forEach(e => e.style.display = 'none');
  //     item += step;
  //         load_more_btn.addEventListener('click', function (e) {
  //             let tmp = data.slice(item, item + step);
  //             tmp.forEach(e => e.style.display = 'grid');
  //             item += step;
  //             if (tmp.length < 6)
  //                 this.style.display = 'none';
  //           });
  //     } else {
  //         load_more_btn.style.display = 'none';
  //     }
  //   }
  //   loadMore()
  //     // portfolio img 
  // var myTags = document.querySelectorAll(".portfolio-page__tab");
  // var getUrl = window.location;
  
  //     [].forEach.call(document.querySelectorAll('.portfolio-page__tab'), function(t) {
  //       t.addEventListener('click', function() {
  //         //t.preventDefault();
  //         for (var i = 0; i < myTags.length; i++) {
  //             myTags[i].classList.remove("tab--active");
  //         }
  //         this.classList.add("tab--active");
  //         var attr = this.getAttribute("data-slug")
  //         var request = new XMLHttpRequest();
  //         var url = homepage_js.homeurl + '/wp-admin/admin-ajax.php';
  //         request.open('POST', url, true);
  //         request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
  //         request.send('category='+attr+'&action=filter_category_projects');
  //         request.onload = function () {
  //             if (this.status >= 200 && this.status < 400) {
  //               var appended = document.querySelector('.projects__container');
  //               var new_content = this.response;
  //               appended.innerHTML = new_content;
  //               loadMore()
  //             } else {
  //             }
  //         };
  //         request.onerror = function() {
  //             // Connection error
  //         };
  
  //       });
  //     });
  //     Fancybox.bind("[data-fancybox]", {
  //         // Custom options for all galleries
  //       });
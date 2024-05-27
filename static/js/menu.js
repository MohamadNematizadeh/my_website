var desktop_nav = document.getElementById('desktop-nav');
var mobile_nav = document.getElementById('mobile-nav');
var link_about = document.getElementById('link-about');


(function () {
   var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
      currentPage = 0,

      revealerOpts = {
         // the layers are the elements that move from the sides
         nmbLayers: 3,
         // bg color of each layer
         bgcolor: ['#eee', '#ffb400', '#eee'],
         // effect classname
         effect: 'anim--effect-3',
         onStart: function (direction) {
            var nextPage = pages[currentPage === 0 ? 0 : currentPage];
            classie.add(nextPage, 'page--animate-' + direction);
         },
         onEnd: function (direction) {
            var nextPage = pages[currentPage === 0 ? pages.length - 1 : 0];
            nextPage.className = 'page';
         },
      };
   revealer = new Revealer(revealerOpts);

   var desktop_elements = document.querySelectorAll(".desktop-nav-element");
   for (var i = 0; i < desktop_elements.length; i++) {
      desktop_elements[i].addEventListener("click", function () {
         if (!(this.classList.contains('active'))) {
            if (document.body.classList.contains('animation-top')) {
               reveal('top');
            } else if (document.body.classList.contains('animation-bottom')) {
               reveal('bottom');
            } else if (document.body.classList.contains('animation-right')) {
               reveal('right');
            } else if (document.body.classList.contains('animation-left')) {
               reveal('left');
            } else if (document.body.classList.contains('animation-cornertopleft')) {
               reveal('cornertopleft');
            } else if (document.body.classList.contains('animation-cornertopright')) {
               reveal('cornertopright');
            } else if (document.body.classList.contains('animation-cornerbottomleft')) {
               reveal('cornerbottomleft');
            } else if (document.body.classList.contains('animation-cornerbottomright')) {
               reveal('cornerbottomright');
            } else {
               reveal('top');
            }
         }
      });
   }

   var mobile_elements = document.querySelectorAll(".mobile-nav-element");
   for (var i = 0; i < mobile_elements.length; i++) {
      mobile_elements[i].addEventListener("click", function () {

         if (!(this.classList.contains('active'))) {
            if (document.body.classList.contains('animation-top')) {
               reveal('top');
            } else if (document.body.classList.contains('animation-bottom')) {
               reveal('bottom');
            } else if (document.body.classList.contains('animation-right')) {
               reveal('right');
            } else if (document.body.classList.contains('animation-left')) {
               reveal('left');
            } else if (document.body.classList.contains('animation-cornertopleft')) {
               reveal('cornertopleft');
            } else if (document.body.classList.contains('animation-cornertopright')) {
               reveal('cornertopright');
            } else if (document.body.classList.contains('animation-cornerbottomleft')) {
               reveal('cornerbottomleft');
            } else if (document.body.classList.contains('animation-cornerbottomright')) {
               reveal('cornerbottomright');
            } else {
               reveal('top');
            }
         }

         setTimeout(function () {
            document.getElementById('inputmobile').click();
         }, 500);
         if ((this.classList.contains('home-link'))) {
            setTimeout(function () {
               document.body.classList.add('home');
            }, 500);

         } else {
            setTimeout(function () {
               document.body.classList.remove('home');
            }, 500);
         }
      });
   }


   function reveal(direction) {
      var callbackTime = 750,
         callbackFn = function () {
            classie.remove(pages[currentPage], 'page--current');
            currentPage = indexPage;
            classie.add(pages[indexPage], 'page--current');

         };

      ex = currentPage;

      revealer.reveal(direction, callbackTime, callbackFn);
      setTimeout(function () {
         document.querySelector(".page--current").scrollTop = 0;
      }, 500);
   }

   var indexPage = 0;

   desktop_nav.addEventListener('click', function (e) {
      var li = e.target.closest('li');
      var nodes = Array.from(li.closest('ul').children);
      indexPage = nodes.indexOf(li);

   });

   mobile_nav.addEventListener('click', function (e) {
      var li = e.target.closest('li');
      var nodes = Array.from(li.closest('ul').children);
      indexPage = nodes.indexOf(li);
   });

   link_about.addEventListener('click', function () {

      indexPage = 1;

         if (document.body.classList.contains('animation-top')) {
            reveal('top');
         } else if (document.body.classList.contains('animation-bottom')) {
            reveal('bottom');
         } else if (document.body.classList.contains('animation-right')) {
            reveal('right');
         } else if (document.body.classList.contains('animation-left')) {
            reveal('left');
         } else if (document.body.classList.contains('animation-cornertopleft')) {
            reveal('cornertopleft');
         } else if (document.body.classList.contains('animation-cornertopright')) {
            reveal('cornertopright');
         } else if (document.body.classList.contains('animation-cornerbottomleft')) {
            reveal('cornerbottomleft');
         } else if (document.body.classList.contains('animation-cornerbottomright')) {
            reveal('cornerbottomright');
         } else {
            reveal('top');
         }
         var mobile_nav_elements = document.querySelectorAll(".mobile-nav-element");
         var desktop_nav_elements = document.querySelectorAll(".desktop-nav-element");
         setTimeout(function () {
         document.body.classList.remove('home');
         for (var i = 0; i < mobile_nav_elements.length; i++) {
            mobile_nav_elements[i].classList.remove('active');
         }
         for (var j = 0; j < mobile_nav_elements.length; j++) {
            desktop_nav_elements[j].classList.remove('active');
         }
         desktop_nav.querySelector('li:nth-child(2)').classList.add('active');
         mobile_nav.querySelector('li:nth-child(2)').classList.add('active');
      }, 500);
   });


})();
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

  if ($("#mainNav").offset().top >= 4000) {
      jQuery(document).ready(function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);
      });
    });
    }
    var $window = $(window);
    var $elem = $("#competence")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(document).on("scroll", function () {
        if (isScrolledIntoView($elem, $window)) {
            $elem.addClass("#competence")
            jQuery(document).ready(function(){
            jQuery('.skillbar').each(function(){
              jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
              },6000);
            });
          });
        }
    });
    var $window = $(window);
    var $elemService = $("#services")

    function isScrolledIntoView($elemService, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elemService.offset().top;
        var elemBottom = elemTop + $elemService.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(document).on("scroll", function () {
        if (isScrolledIntoView($elemService, $window)) {
            $elemService.addClass("#services")
            jQuery(document).ready(function(){
            jQuery('.hidden').each(function(){
              $('div.hidden').fadeIn(4000).removeClass('hidden');
              $('span.hidden').fadeIn(4000).removeClass('hidden');
            });
          });
        }
    });
      
})(jQuery); // End of use strict

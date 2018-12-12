$(document).ready(function(){
 
 // NAVBAR
 
  $('.menu-toggle').click(function() {
    $('.main-nav').toggleClass('main-nav--open', 500);
    $(this).toggleClass('hamburger--open');
  });


  // Smooth scrolling
  var $root = $('html, body');
  $('.main-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    }
    return false;
  });

  var $root = $('html, body');
  $('.button-bottom a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    }
    return false;
  });

}); // document ready function



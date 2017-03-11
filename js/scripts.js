var scrollTop = $(window).scrollTop();
var caprichoTop = $('#Capricho').offset().top +120;
var contactoTop = $('#contacto').offset().top -100;

function stickyNav(scrollTop) {
  if (scrollTop >= caprichoTop && scrollTop < contactoTop ) {
    $('.capricho-title').addClass('sticky');
    $('#Capricho p').addClass('sticky-padding');
  } else {
    $('.capricho-title').removeClass('sticky');
    $('#Capricho p').removeClass('sticky-padding');
  };
};

stickyNav()
$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();

  console.log('scrollTop = ' + scrollTop)
  console.log('caprichoTop = ' + caprichoTop)
  stickyNav(scrollTop)
});

$('.navbar-nav li a').on('click', function() {
  target = $(this).attr('data-target');
  console.log(target)
  $('html, body').animate({
      scrollTop: $('#' + target).offset().top - 100
  }, 1000);
});

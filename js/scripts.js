var scrollTop = $(window).scrollTop();
var caprichoTop = $('#Capricho').offset().top -50;
var contactoTop = $('#contacto').offset().top -100;

function stickyNav(scrollTop) {
  if (scrollTop >= caprichoTop && scrollTop < contactoTop ) {
    $('.capricho-title').addClass('sticky');
    $('#Capricho').addClass('sticky-padding');
    console.log('si')
  } else {
    $('.capricho-title').removeClass('sticky');
    $('#Capricho').removeClass('sticky-padding');
    console.log('no')
  };
};

stickyNav()
$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();

  console.log('scrollTop = ' + scrollTop)
  console.log('caprichoTop = ' + caprichoTop)
  stickyNav(scrollTop)
});

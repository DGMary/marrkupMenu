$(document).ready(function () {
  mobileSubmenu();
  toggleMenu();


  /* scroll to top */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 220) {
      $('.back-to-top').fadeIn(500);
    } else {
      $('.back-to-top').fadeOut(500);
    }
  });
  
  // btn-up
  $(document).on('click', '.back-to-top', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });

  // btns-fixed
  $('.btns-block').length && fixedBtns();

})

function mobileSubmenu() {

  $(document).on("click", ".js-back", function (e) {
    e.preventDefault();
    $(this).parent(".submenu.active").removeClass("active");
  });

  $(document).on("click", ".js-forward", function (e) {
    e.preventDefault();
    $(this).parent(".submenu-item__link").siblings(".submenu").addClass("active");
  });

}


function toggleMenu() {
  let $body = $('body'), $bg = $('#bg-layout');

  $(document).on('click', '.burger-button', function(){
    $body.toggleClass("opened-burger");
    $('.submenu.active').removeClass('active');
    $bg.toggleClass( "active" );
  })

  $(document).on("click", "#bg-layout.active", function () {
    $body.removeClass("opened-burger");
    $(this).removeClass("active");
    $('.submenu.active').removeClass('active');
  });
}


function fixedBtns() {
  const fixedBlock = $('.btns-block'),
        heightPanel = $('.btns-block').outerHeight(),
        topPos = $('.btns-block').offset().top - heightPanel + 58,
        heightRowWithBtns = $('.row-with-btns').outerHeight() - 70;


  $(window).scroll(function () {
    if ($(document).scrollTop() > topPos && $(document).scrollTop() < heightRowWithBtns) {
      fixedBlock.addClass("fixed");
    } else {
      fixedBlock.removeClass("fixed");
    }
  });

}
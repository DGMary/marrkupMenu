$(document).ready(function () {
  mobileSubmenu();
  toggleMenu();
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

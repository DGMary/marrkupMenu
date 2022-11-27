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
  $(document).on('click', '.burger-button', function(){
    $( ".header" ).toggleClass( "opened-burger" );
    $('.submenu.active').removeClass('active')
  })
}

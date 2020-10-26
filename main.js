var hamburger = $(".hamburger-menu.active");

hamburger.click( function() {
  $(".hamburger-menu ul li a").slideToogle();
});

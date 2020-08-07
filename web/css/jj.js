$("#slider1 > ul:gt(0)").hide();

setInterval(function() {
  $('#slider1 > ul:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider1');
}, 3000);
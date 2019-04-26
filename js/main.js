$(document).ready(function () {

  $(".burger").on('click', function () {
    $(".nav").toggleClass('height');
  });
  $(".close").on('click', function () {
    $(".nav").toggleClass('height');

  });

  $(".nav li a").on('click', function () {
    $(".nav").toggleClass('height');
    
  });



  // section animation
$('.animation').each(function() {
  console.log('aaa');
  var waypoint = new Waypoint({
    element:this,
    handler:function(direction) {
      var animation = $(this.element).attr('data-animation');
      $(this.element).css('opacity', '1');
      console.log(animation)
      $(this.element).addClass('animated ' + animation);
    },
    offset: '75%' 
  })
})

});


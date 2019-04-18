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
});


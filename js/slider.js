  window.ga = function () {
    ga.q.push(arguments)
  };
  ga.q = [];
  ga.l = +new Date;
  ga('create', 'UA-XXXXX-Y', 'auto');
  ga('send', 'pageview')


  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });


  $(function () {

    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
    });
    $(window).on('resize', function () {
      $('.center').slick('resize');
    });
  });


  $(document).ready(function() {
	
    // INITIATE THE FOOTER
    siteFooter();
    // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
    $(window).on('load',function() {
      siteFooter();
    });
    
    function siteFooter() {
      var siteContent = $('#site-content');
      var siteContentHeight = siteContent.height();
      var siteContentWidth = siteContent.width();
  
      var siteFooter = $('#site-footer');
      var siteFooterHeight = siteFooter.height();
      var siteFooterWidth = siteFooter.width();
  
      console.log('Content Height = ' + siteContentHeight + 'px');
      console.log('Content Width = ' + siteContentWidth + 'px');
      console.log('Footer Height = ' + siteFooterHeight + 'px');
      console.log('Footer Width = ' + siteFooterWidth + 'px');
  
      siteContent.css({
        "margin-bottom" : siteFooterHeight + 150
      });
    };
  });


	

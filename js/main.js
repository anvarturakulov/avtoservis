
$(function(){
    $(".galary__box").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows:true,
    });

    $(".review__slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
    });

    jQuery("a.scrollto").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top-20;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
    
});



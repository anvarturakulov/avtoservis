
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
});



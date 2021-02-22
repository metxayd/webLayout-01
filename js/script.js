
$(".search").click(function(){
  $(".search-area").toggle();
});

$(".menu").click(function(){
  $("#navigasyon").toggle();
});


    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

$("#search").focus(function(){
  $("#lens").css("display", "inline").fadeOut(300);
});
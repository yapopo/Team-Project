
// gnb-list 스트립트

$(".gnb-list").hover(function(){
  $(this).find("ul").stop().slideDown();
  $(this).find("ul").addClass("active")
}, function(){
  $(this).find("ul").stop().slideUp();
  $(this).find("ul").removeClass("active")
})

// sub-title 클릭과 호버 스크립트

$(".sub-title1 ul li").click(function(){
  $(".sub-title1 ul li").removeClass("active")
  $(this).addClass("active")
})

// info 클릭 스크립트

$(".info-list li").click(function(){
  $(".info-list li").removeClass("active")
  $(this).addClass("active")
  if($(this).hasClass("content")){
    $(".info-content").css("display","block")
    $(".info-photo").css("display","none")
  }else if($(this).hasClass("photo")){
    $(".info-photo").css("display","block")
    $(".info-content").css("display","none")
  }
})

// slide 스크립트

$(document).ready(function(){
  $('.slide-imgs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dots : true,
    appendDots : $(".num"),
    autoplaySpeed: 4000,
    pauseOnHover : true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
  });

  $('#play').click(function(){
    $('.slide-imgs').slick('slickPlay');
    
  }); 
  $('#pause').click(function(){
    $('.slide-imgs').slick('slickPause');

  });
})

$(".slick-dots li button").attr("disabled",false)


$("#pause").click(function(){
  $("#pause").css("display","none")
  $("#play").css("display","block")
})

$("#play").click(function(){
  $("#play").css("display","none")
  $("#pause").css("display","block")
})


// footer 스크립트

$(document).ready(function(){
  $('.banner-site-list').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.play').click(function(){
    $('.banner-site-list').slick('slickPlay');
    
  }); 
  $('.stop').click(function(){
    $('.banner-site-list').slick('slickPause');

  });

})

$(".stop").click(function(){
  $(".first").css("display","none")
  $(".second").css("display","block")
})

$(".play").click(function(){
  $(".second").css("display","none")
  $(".first").css("display","block")
})




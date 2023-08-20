// mainmenu
$('.submenu-list').hide();

// 메인메뉴 hover시 폰트색깔, 이미지 바뀜
$('.mainmenu-item').hover(function () {
    $(this).find('.submenu-list').stop().slideDown(500);
    $('.global-header').css('backgroundColor', '#fbfbfb');
    $('.global-header').css('transition', 'none');
    $('.top-menu, .top-menu a').css('color', '#000');
    $(".top-right-menu img").attr("src", "../Project-images/header/topIcon.png");
    $('.mainmenu').css('border-color','#bbb');
    $('.mainmenu-item>a').css('color', '#000');
    $('.mainmenu h1 span').css('color', '#000');
    $(".mainmenu h1 img").attr("src", "../Project-images/header/logo.png");
    $(".menu-buttons a, i").css('color', '#000');
    $(".menu-buttons img").attr("src", "../Project-images/header/home-black2.png");
    $(".submenu-list").css("border-top","1px solid #bbb")
    $(".ul-wrapper ul li").stop().fadeIn();

}, function () {
    $(this).find('.submenu-list').stop().slideUp();
    $('.global-header').css('backgroundColor', 'transparent');
    $('.global-header').css('transition', '1000ms', 'ease-in-out');
    $('.top-menu, .top-menu a').css('color', '#fff');
    $(".top-right-menu img").attr("src", "../Project-images/header/topIcon_white.png");
    $('.mainmenu-item>a').css('color', '#fff');
    $('.mainmenu h1 span').css('color', '#fff');
    $(".mainmenu h1 img").attr("src", "../Project-images/header/white-logo.png");
    $(".menu-buttons a, i").css('color', '#fff');
    $(".menu-buttons img").attr("src", "../Project-images/header/home-white.png");
    $(".ul-wrapper ul li").stop().fadeOut();
});

// gnb script


$(".gnb-list").hover(function(){
  $(this).find("ul").stop().slideDown();
  $(this).find("ul").addClass("active")
}, function(){
  $(this).find("ul").stop().slideUp();
  $(this).find("ul").removeClass("active")
})


// 오늘 날짜 가져오기
let date = new Date();
let month = date.getMonth() + 1
let day = date.getDate()

// 요일넣기
let todayweek = date.getDay();
let week = ['일', '월', '화', '수', '목', '금', '토'];

let todayLabel = week[todayweek];

// '0' 붙여 두자릿수로 만들기
if (month >= 10) {
    mnum = month;
} else {
    mnum = '0' + month;
}

if (day >= 10) {
    dnum = day;
} else {
    dnum = '0' + day;
}

$('.month').html(mnum);
$('.date').html(dnum);
$('.week').html(todayLabel);


// slide stop/play

$(".stop").click(function(){
  $(".first").css("display","none")
  $(".second").css("display","block")
})

$(".play").click(function(){
  $(".second").css("display","none")
  $(".first").css("display","block")
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




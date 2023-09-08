// mainmenu
$('.submenu-list').hide();

$(".mainmenu-list").hover(function(){
  $(".submenu-back").stop().slideDown(500);
}, function(){
  $(".submenu-back").stop().slideUp(500);
})

// 메인메뉴 hover시 폰트색깔, 이미지 바뀜
$('.mainmenu-item').hover(function () {
  $(this).find('.submenu-list').stop().slideDown(500);
  $('.global-header').css('backgroundColor', '#fbfbfb');
  $('.global-header').css('transition', 'none');
  $('.top-menu, .top-menu a').css('color', '#000');
  $(".menu-img img").attr("src", "../Project-images/header/topIcon.png");
  $('.mainmenu').css('border-color','#bbb');
  $('.mainmenu-item>a').css('color', '#000');
  $('.mainmenu h1 span').css('color', '#000');
  $(".mainmenu h1 img").attr("src", "../Project-images/header/logo.png");
  $(".menu-buttons a, i").css('color', '#000');
  $(".menu-buttons img").attr("src", "../Project-images/header/home-black2.png");
  $(".submenu-list").css("border-top","1px solid #bbb")
  $(this).find(".ul-wrapper").stop().fadeIn(1000);
  $(this).find(".submenu-left-img").stop().fadeIn(1000);
  $(".submenu-left-img p").text($(this).children("a").text())

}, function () {
  $(this).find('.submenu-list').stop().slideUp();
  $('.global-header').css('backgroundColor', 'transparent');
  $('.global-header').css('transition', '1000ms', 'ease-in-out');
  $('.top-menu, .top-menu a').css('color', '#fff');
  $(".menu-img img").attr("src", "../Project-images/header/topIcon_white.png");
  $('.mainmenu-item>a').css('color', '#fff');
  $('.mainmenu h1 span').css('color', '#fff');
  $(".mainmenu h1 img").attr("src", "../Project-images/header/white-logo.png");
  $(".menu-buttons a, i").css('color', '#fff');
  $(".menu-buttons img").attr("src", "../Project-images/header/home-white.png");
  $(this).find(".ul-wrapper").stop().fadeOut(500);
  $(this).find(".submenu-left-img").stop().fadeOut(500);
});
// 날씨 API

$.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&limit=5&appid=1255e4aac90af2ff4a1905e43962ab4b&units=metric`, function (result) {
   
    // 현재온도
    $(".temp").append(result.main.temp); //현재온도

    // 현재온도 아이콘
    let wiconUrl = '<img src="http://openweathermap.org/img/wn/' + result.weather[0].icon + '.png" alt="' + result.weather[0].description + '">';
    $(".weather-icon").html(wiconUrl);
})

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


// 우편번호 api 연결
function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;

      } else {
        document.getElementById("sample6_extraAddress").value = '';
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('sample6_postcode').value = data.zonecode;
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    }
  }).open();
}
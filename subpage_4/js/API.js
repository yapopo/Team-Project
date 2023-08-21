
// 날씨 API

$.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&limit=5&appid=1255e4aac90af2ff4a1905e43962ab4b&units=metric`, function (result) {
   
    // 현재온도
    $(".temp").append(result.main.temp); //현재온도

    // 현재온도 아이콘
    let wiconUrl = '<img src="http://openweathermap.org/img/wn/' + result.weather[0].icon + '.png" alt="' + result.weather[0].description + '">';
    $(".weather-icon").html(wiconUrl);
})
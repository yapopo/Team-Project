$(".slide-wrap1").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.img-prev'),
    nextArrow: $('.img-next'),
    // fade 
    // fade: true,
    // fadeSpeed: 5000,

    customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).data('title');
        var num = i + 1;
        return '<a class="item-dot"> <span>' + [i + 1] + '</span>' + title + ' </a>'

    },

});


// tap
let btn = $('.tab-btn');
let btnlen = $('.tab-btn').length;
let content = $('.tab-content');

for (let i = 0; i < btnlen; i++) {
    btn.eq(i).on('click', function () {
        btn.removeClass('active');
        btn.eq(i).addClass('active');
        content.removeClass('show')
        content.eq(i).addClass('show');
        // slide 오류 방지 
        $('.slide-wrap1').slick('setPosition');
    });
}
$(".slide-wrap1").slick({
  dots: true,
  autoplay : true,
  autoplaySpeed : 3000,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.img-prev'),
  nextArrow: $('.img-next'),

customPaging : function(slider, i) {
var title = $(slider.$slides[i]).data('title');
var num = i +1 ;
return '<a class="item-dot"> <span>' + [i+1] + '</span>'+title+' </a>'

},

});
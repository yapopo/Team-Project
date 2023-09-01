$(".slide-wrap").slick({
  dots: true,
  autoplay : true,
  autoplaySpeed : 1000,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,

customPaging : function(slider, i) {
var title = $(slider.$slides[i]).data('title');
var num = i +1 ;
return '<a class="item-dot"> <span>' + [i+1] + '</span>'+title+' </a>'

},

});
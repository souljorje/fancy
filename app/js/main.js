
//Photos popup
$('.images-popup').magnificPopup({
  type:'image',
  gallery: {
      enabled: true
    },
  mainClass: 'mfp-with-zoom',
  zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out', 
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

//Slider
$('.work-slider').slick({
	autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
  	breakpoint: 450,
      settings: {
        arrows: false
     }
  }]
});

//EqualHeights
$('.cost-item-wrap').equalHeights();

$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});

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

//callback form popup
$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name',
   mainClass: 'mfp-with-zoom',
  zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out'
  }
});

//Flat popup
$('.flat-popup').magnificPopup({
   type: 'inline',
   focus: '#name',
   mainClass: 'mfp-with-zoom',
  zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out'
  },
  callbacks: {
  	close: function() {
      $('form').trigger('reset');
      $('#sum').html('0')
    }
  }
});

$('#close').on( "click", function() {
  $.magnificPopup.close();
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

// Name mask
$(function() {
  jQuery(function($) {
    $('[id=name]').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^а-яА-Я-a-zA-Z ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})

// Phone mask
jQuery(function($){
  $("[id=phone]").mask("+7 (999) 999-9999");
});

// ajax form
$(document).ready(function() {

    //E-mail Ajax Send
    $("#call").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: 'php/mail.php', //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                  src: '#thx'
                },
                type: 'inline'}, 0);
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $("#repair").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: 'php/mail.php', //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                  src: '#thx'
                },
                type: 'inline'}, 0);
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

//Calculator
var total = 0;
function CalculateTotal(){
    $("input:checkbox").each(function(){
        if($(this).is(":checked")){
            total += parseFloat($(this).val());
        }
    });
    $("#sum").html(total);
}

$("input:checkbox").change(function(){
    total = 0;
    CalculateTotal();
}).trigger("change");

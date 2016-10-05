$(document).ready(function() {

$('.arrow').hide();

$('#header-headlines').addClass('animated bounceInDown');
$('.hi-icon-wrap').addClass('animated bounceInUp');

setTimeout(function() {
    $('.arrow').show();
}, 5000);

$.backstretch([
        "img/background1.jpg"
      , "img/background4.jpg"
      , "img/background5.jpg"
     ], {duration: 7000, fade: 750});


$('#submit').click(function(){
$.post("send_form_email.php", $("#contactform").serialize(),  function(response) {
$('#success').html(response);

});
return false;
});

$(function() {

$(".roll").css("opacity","0");


$(".roll").hover(function () {


$(this).stop().animate({
opacity: .7
}, "350");
},


function () {


$(this).stop().animate({
opacity: 0
}, "350");
});
});

$("#back-top").hide();


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('#item_1, .arrow').click(function () {
			$('body,html').animate({
				scrollTop: $('#content').offset().top
			}, 800);
			return false;
		});

$('#item_2').click(function () {
			$('body,html').animate({
				scrollTop: $('#content1').offset().top
			}, 800);
			return false;
		});

$('#item_3').click(function () {
			$('body,html').animate({
				scrollTop: $('#content2').offset().top
			}, 800);
			return false;
		});

$('#item_4').click(function () {
			$('body,html').animate({
				scrollTop: $('#content3').offset().top
			}, 800);
			return false;
		});
	});


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#navigation').css('margin-top','0px');
			} else {
				$('#navigation').css('margin-top','-60px');;
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


$(document).scroll(function(){

    var docScroll = $(document).scrollTop(),
        boxCntOfset = $(".skills-line").position().top + 150,
        boxCntOfset1 = $("#content").offset().top - 5,
        boxCntOfset2 = $("#content1").offset().top - 5,
        boxCntOfset3 = $("#content2").offset().top - 5,
        boxCntOfset4 = $("#content3").offset().top - 5,
        boxCntOfset5 = $("#content4").offset().top - 5,
        boxCntOfset6 = $("#content").position().top + 100,
        boxCntOfset7 = $("#content1").position().top + 100,
        boxCntOfset8 = $("#content2").position().top + 100,
        boxCntOfset9 = $("#content3").position().top + 100;


    if(docScroll >= boxCntOfset ) {

      $("#line-1").css('width','59%');// EDIT %  PROGRAMMING SKILL//
      $("#line-2").css('width','52%');// EDIT %  WordPress SKILL//
      $("#line-3").css('width','82%');// EDIT %  Graphic Design SKILL//
    } else {
      $("#line-1").css('width','0px');
      $("#line-2").css('width','0px');
      $("#line-3").css('width','0px');

    }

    if((docScroll >= boxCntOfset1) && (docScroll <= boxCntOfset2)) {
        $("#item_1").css('color','#32323c');
    } else {
        $("#item_1").css('color','#f2f2f2');
    }

     if((docScroll >= boxCntOfset2) && (docScroll <= boxCntOfset3)) {
        $("#item_2").css('color','#32323c');
    } else {
        $("#item_2").css('color','#f2f2f2');
    }

    if((docScroll >= boxCntOfset3) && (docScroll <= boxCntOfset4)) {
        $("#item_3").css('color','#32323c');
    } else {
        $("#item_3").css('color','#f2f2f2');
    }

    if(docScroll >= boxCntOfset4) {
        $("#item_4").css('color','#32323c');
    } else {
        $("#item_4").css('color','#f2f2f2');
    }

    if(docScroll >= boxCntOfset6) {
        $("#content").css('padding-top','100px');
        $("#content").css('padding-bottom','100px');
    } else {
        $("#content").css('padding-top','200px');
        $("#content").css('padding-bottom','0px');
    }

    if(docScroll >= boxCntOfset7) {
        $("#content1").css('padding-top','100px');
        $("#content1").css('padding-bottom','100px');
    } else {
        $("#content1").css('padding-top','200px');
        $("#content1").css('padding-bottom','0px');
    }

    if(docScroll >= boxCntOfset8) {
        $("#content2").css('padding-top','100px');
        $("#content2").css('padding-bottom','100px');
    } else {
        $("#content2").css('padding-top','200px');
        $("#content2").css('padding-bottom','0px');
    }

    if(docScroll >= boxCntOfset9) {
        $("#content3").css('padding-top','100px');
        $("#content3").css('padding-bottom','100px');
    } else {
        $("#content3").css('padding-top','200px');
        $("#content3").css('padding-bottom','0px');
    }

  });

});

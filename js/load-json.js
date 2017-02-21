$(document).on({
    ajaxSend: function () { loading('show'); },
    ajaxStart: function () { loading('show'); },
    ajaxStop: function () { loading('hide'); },
    ajaxError: function () { loading('hide'); }
});
 
function loading(showOrHide) {
    setTimeout(function(){
        $.mobile.loading(showOrHide);
    }, 1); 
}
var output = $('.swipe-wrap');
//var error = $('#error');
$.ajax({
		url: 'http://apploadin.com/myapp/clienti/actionlimos/slider.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		contentType: 'application/json',
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<div><img src="'+item.img+'" style="width:100%;"></img></div>';			
				output.append(landmark);
			}); 
			var element = document.getElementById('mySwipe'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next');

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: true,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});

		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
		   //error.append(errorThrown);
		}
	});


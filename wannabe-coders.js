// var $ = jQuery
//
// $(function() {
// 	$('#my-button').on('click', function() {
// 		$('#my-form').show()
// 		$('#my-form').html($('#some-element').html())
// 	})
// })

var $ = jQuery

$(document).ready(function(){


	$("p").on('click',function(){
		$("this").show();
	});
});

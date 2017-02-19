var $ = jQuery

$(function() {
	$('#my-button').on('click', function() {
		$('#my-form').show()
		$('#my-form').html($('#some-element').html())
	})
})

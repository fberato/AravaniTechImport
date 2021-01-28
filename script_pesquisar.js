var setPlaceholder = (function() {
	$('select').change(function() {
			$('input').attr('placeholder', $(this).find(':selected').data('placeholder'));
	});
})();
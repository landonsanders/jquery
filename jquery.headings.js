			(function () {
	
	$.fn.heading = function (options) {

		var settings = $.extend({

			family: 'serif',
			familyColor: '#34495e',
			familyStyle: 'italic',
			familyBackground: '#ecf0f1',
			margin: '16px',
			padding: '16px',
			floating: null,
			complete: this.houseKeeping,
			houseKeeping: function () {

				console.log('Done with header, ok?');
			}

		}, options);

		this.each(function (index, el) {


			$(el).css('font-family', settings.family)
			.css('padding', settings.padding)
			.css('margin', settings.margin)
			.css('color', settings.familyColor)
			.css('background-color', settings.familyBackground);
		});
	};
})(jQuery);
$(function() {

	jQuery.fn.center = function() {
		this.css("position", "absolute");
		this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
		this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
		return this;
	};
	
	jQuery.fn.portfolio = function() {
		// フェードイン
		$(this)
			.stop()
			.fadeIn(10000, function() {
				// 順序判定
				if (!$(this).hasClass('last')) {
					
					// フェードアウト
					$(this)
						.stop()
						.fadeOut(10000, function() {
							
							// 次へ
							var nextObj = $(this).next('dl');
							if (0 < nextObj.length) {
								$(nextObj).portfolio();
							}
							
						})
					;
					
				}
			})
			.center()
		;
		return this;
	};
	
	$('#content')
		.find('dl:first')
		.portfolio()
	;
	
//	$(window).resize(function() {
//		$('#content').center();
//	});

});
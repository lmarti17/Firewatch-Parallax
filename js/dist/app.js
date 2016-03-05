// App class
var App = function() {

	this.globalData = {};
	this.globalData.windowWidth = $(window).width();
	this.globalData.axisXCenter = this.globalData.windowWidth / 2;

	this.init();

}

App.prototype.init = function() {
	this.mouse = new MouseClass(this.globalData);
}


$(window).load(function() {
	setTimeout(function() {
		$('.loader').fadeOut(600);
	}, 4000);
});

$(document).ready(function() {

	var app = new App();

});
	// Class mouseClass
	var MouseClass = function(appData) {

		this.globalData = appData;
		this.init();
	}

	MouseClass.prototype.init = function() {

		this.mouse = {
			x: 0,
			y: 0
		};
		this.mouseXPercentage = 0;
		$(window).on('mousemove', $.proxy(this.mouseMove, this));
	}

	// Method that check the position of the cursor
	MouseClass.prototype.mouseMove = function(event) {

		this.mouse.x = event.pageX;

		this.mouseXPercentage = parseInt((this.mouse.x / this.globalData.windowWidth) * 100);

		if (this.mouse.x > this.globalData.axisXCenter) {
			this.backgroundMove(this.mouse.x, this.mouseXPercentage);
		} else if (this.mouse.x < this.globalData.axisXCenter) {
			this.backgroundMove(this.mouse.x, this.mouseXPercentage);
		}
	}

	MouseClass.prototype.deltaXAxis = function(value) {
		return (value - this.globalData.axisXCenter) / this.globalData.windowWidth;
	}

	MouseClass.prototype.backgroundMove = function(x, xPercent) {
		//	Function that moves all the backgrounds
		for (var i = 6; i >= 0; i--) {
			$('.layer' + i).css('background-position', (50 + this.deltaXAxis(x) * 10 * i + '%') + '100%');
		};
		if (xPercent < 50) {
			$('body').css('background', 'radial-gradient(' + (50 - parseInt(xPercent)) + '% 60% ,ellipse, #f7f7b6 10%,#e96f92 40%,#75517d 65%,#1b2947 )');

		} else if (xPercent > 50) {
			$('body').css('background', 'radial-gradient(' + (50 + parseInt(xPercent)) + '% 60% ,ellipse, #f7f7b6 10%,#e96f92 40%,#75517d 65%,#1b2947 )');
		}
	}
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

$(document).ready(function() {

	var app = new App();

});

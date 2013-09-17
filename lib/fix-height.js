if (require !== 'undefined') {
	// var FirstLoad = require('./first-pageload.js');
}


var FixHeight = function (mainEl, footerEl) {

	return {
		before: function (ctx, next) {
			mainEl.height($(window).height());
			footerEl.addClass('invisible');
			window.setTimeout(next, 50);
		},
		after: function (ctx, next) {
			mainEl.height('');
			next && window.setTimeout(next, 50);
			footerEl.removeClass('invisible');
			// FirstLoad.showFooter();
		}
	};
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = FixHeight;
}
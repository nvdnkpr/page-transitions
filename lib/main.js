if (require !== 'undefined') {
	var _ = require('underscore');
}


var PageTransitions = function (mainEl) {

	var FirstPageLoad, FixPageHeight;
	// console.log("mainEl", mainEl);
	// set mainEl
	(mainEl instanceof $) || (mainEl = (mainEl.length) ? $(mainEl) : $('main'));

	// initial Page Load
	FirstPageLoad = {
		showFooter: _.once(function () { $('footer').removeClass('invisible'); })
	};

	// Page Transitions
	FixPageHeight = {
		before: function (ctx, next) {
			mainEl.height($(window).height());
			window.setTimeout(next, 50);
		},
		after: function (ctx, next) {
			mainEl.height('');
			next && window.setTimeout(next, 50);
			FirstPageLoad.showFooter();
		}
	};

	return {
		FirstPageLoad: FirstPageLoad,
		FixPageHeight: FixPageHeight
	};
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = PageTransitions;
}
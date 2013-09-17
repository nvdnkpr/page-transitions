if (require !== 'undefined') {
	var FirstLoad = require('./first-pageload.js');
}


var FixHeight = function (mainEl) {

	return {
		before: function (ctx, next) {
			mainEl.height($(window).height());
			window.setTimeout(next, 50);
		},
		after: function (ctx, next) {
			mainEl.height('');
			next && window.setTimeout(next, 50);
			FirstLoad.showFooter();
		}
	};
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = FixHeight;
}
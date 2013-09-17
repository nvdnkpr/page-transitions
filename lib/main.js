if (require !== 'undefined') {
	var _ = require('underscore');
	var Loader = require('./loader.js');
	var FixHeight = require('./fix-height.js');
	// var FirstLoad = require('./first-pageload.js');
}


var PageTransitions = function (mainEl, loaderEl, footerEl) {

	(mainEl instanceof $) || (mainEl = (mainEl.length) ? $(mainEl) : $('main'));
	(footerEl instanceof $) || (footerEl = $('footer'));

	return {
		FixHeight: FixHeight(mainEl, footerEl),
		Loader: {
			start: function(ctx, next) {
				ctx.Loader = new Loader(loaderEl);
				_.isFunction(next) && next();
			},
			end: function(ctx, next) {
				if (ctx.Loader) {
					_.isFunction(ctx.Loader.killLoader) && ctx.Loader.killLoader();
					ctx.Loader = null;
				}
				_.isFunction(next) && next();
			}
		}
	};
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = PageTransitions;
}
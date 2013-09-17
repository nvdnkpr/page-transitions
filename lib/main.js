if (require !== 'undefined') {
	var _ = require('underscore');
	var Loader = require('./loader.js');
	var FixHeight = require('./fix-height.js');
	var FirstLoad = require('./first-pageload.js');
}


var PageTransitions = function (mainEl) {

	(mainEl instanceof $) || (mainEl = (mainEl.length) ? $(mainEl) : $('main'));

	return {
		FixHeight: FixHeight(mainEl),
		Loader: Loader,
		FirstLoad: FirstLoad
	};
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = PageTransitions;
}
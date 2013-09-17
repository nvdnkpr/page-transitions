if (require !== 'undefined') {
	var _ = require('underscore');
}

// initial Page Load
var FirstLoad = {
	showFooter: _.once(function () { $('footer').removeClass('invisible'); })
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = FirstLoad;
}
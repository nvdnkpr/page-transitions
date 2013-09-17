if (require !== 'undefined') {
	var _ = require('underscore');
}

var Loader = function (domEl) {
	if (!(this instanceof Loader)) {
		return new Loader(domEl);
	}
	this.domEl = domEl;
	Loader.addLoader();
	return this;
};

Loader.prototype.addLoader = function () {
	this.timeoutId = window.setTimeout(this.loaderDom, 50);
};

Loader.prototype.killLoader = function () {
	window.clearTimeout(this.timeoutId);
	// this = null;
};

Loader.prototype.loaderDom = function () {
	console.log("this.timeoutId", this.timeoutId);
};


if (typeof module !== 'undefined' && module.exports) {
	module.exports = Loader;
}
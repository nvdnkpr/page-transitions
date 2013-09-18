if (require !== 'undefined') {
	var _ = require('underscore');
}

var Loader = function (domEl, opts) {

	if (!(this instanceof Loader)) {
		return new Loader(domEl, opts);
	}

	// options
	opts || (opts = {});
	this.domEl = domEl;
	this.activeClass = opts.activeClass || 'loader-active';
	this.timeToTrigger = opts.timeToTrigger || 300;
	this.$body = opts.$body || $('body');

	// trigger timer
	this.killCounter = 0;
	this.addLoader();
	return this;
};

Loader.prototype.addLoader = function () {
	this.timeoutId = window.setTimeout(_.bind(this.loaderDom, this), this.timeToTrigger);
};

Loader.prototype.killLoader = function () {
	window.clearTimeout(this.timeoutId);
	this.$body.hasClass(this.activeClass) && this.$body.removeClass(this.activeClass);
	this.killCounter += 1;
};

Loader.prototype.loaderDom = function () {
	this.$body.hasClass(this.activeClass) || this.$body.addClass(this.activeClass);
};


if (typeof module !== 'undefined' && module.exports) {
	module.exports = Loader;
}
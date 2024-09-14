const Packager = require('@beyond-js/bundles-sdk/packager');
module.exports = class extends Packager {
	constructor(...params) {
		super(...params);
		this.dependencies.add('@beyond-js/backend/client');
	}
};

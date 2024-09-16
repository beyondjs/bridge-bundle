const Code = require('@beyond-js/bundles-sdk/bundle/code/js');
module.exports = class extends Code {
	_precode() {
		return `const {ActionsBridge} = brequire('@beyond-js/backend/client');\n`;
	}
};

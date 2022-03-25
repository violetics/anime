const { name: nama, version } = require("../package.json");
const plugins = require("./plugins");
const utils = require("./utils");
const { VioleticsError } = utils;

class Violetics {
	constructor(apikey) {
		if (!apikey || typeof apikey != "string")
			throw new VioleticsError("arguments 'apikey' must be typeof string and required!");
		this.name = nama;
		this.version = version;
		this.apikey = apikey;
		this.utils = utils;
		this.plugins = plugins;
		for (var plugin in plugins) {
			this[plugin] = plugins[plugin](this);
		}
	}
	BASE(path) {
		return `https://violetics.pw/api/anime/${path}`;
	}
}

module.exports = Violetics;

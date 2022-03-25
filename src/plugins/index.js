const { VioleticsError, request } = require("../utils");
const plugins = require("./plugins");
const plugin = [];

function send(url, params, fn) {
	if (fn && typeof fn == "function") {
		return request(url, params)
			.then((data) => fn(null, data))
			.catch((error) => fn(error, null));
	}
	return request(url, params);
}

for (var i = 0; i < plugins.length; i++) {
	let plugin_ = plugins[i];
	plugin[plugin_] = function Violetics(self) {
		let { BASE, apikey } = self;
		return function Violetics(manga, fn) {
			if (!manga || typeof manga != "string")
				throw new VioleticsError(`${plugin_}() required manga and must be typeof string`);
			return send(BASE(plugin_), { apikey: apikey, manga: manga }, fn);
		};
	};
}

module.exports = plugin;

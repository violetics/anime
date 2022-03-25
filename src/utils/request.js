const VioleticsError = require("./VioleticsError");

module.exports = function sendRequest(url, params = {}) {
	return new Promise(async (resolve, reject) => {
		const { got } = await import("got");
		return got({
			url: url,
			method: "GET",
			searchParams: {
				...params,
			},
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
			},
		})
			.json()
			.then(resolve)
			.catch((error) => {
				if (error.hasOwnProperty("response")) {
					if (error.response && error.response.hasOwnProperty("rawBody")) {
						let data = JSON.parse(error.response.rawBody.toString());
						return reject(new VioleticsError(data, "ApiError"));
					} else {
						return reject(new VioleticsError(error.message, error.name));
					}
				} else {
					return reject(new VioleticsError(error.message, error.name));
				}
			});
	});
};

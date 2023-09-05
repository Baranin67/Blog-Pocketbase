const replace = (string, replacements) => {
	replacements.forEach(repl => string = string.replace('%s', repl));
	return string;
}

const createUrl = (baseUrl, options) => {
	const { params } = options;
	console.log(params);

	let finalUrl = baseUrl;

	if (params.length > 0)
		finalUrl += '&';

	let paramsStrList = [];
	params.forEach(param => {
		const name = Object.getOwnPropertyNames(param);
		paramsStrList.push(name + '=' + param[name])
	});
	console.log(paramsStrList);
	finalUrl += paramsStrList.join(',');

	return finalUrl;
};
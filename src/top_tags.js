const topTagsEl = document.querySelector('#top-tags');

let serverCfg;
let routesCfg;

// Get server config
await fetch('./cfg/server.json')
	.then(res => res.json())
	.then(data => serverCfg = data);

// Get routes config
await fetch('./cfg/routes.json')
	.then(res => res.json())
	.then(data => routesCfg = data);


// Get top tags by views amount
// TODO: optimize (get only ID and title)
axios.get(`${serverCfg.url}${routesCfg.apiTags}`, {
	params: { perPage: 6, sort: '-views' }
})
	.then(res => {
		res.data.items.forEach(tag => topTagsEl.insertAdjacentHTML('beforeend', `
			<button
				onclick="window.location.href='?tags=${tag.title}'"
				class="tag"
			>
				${tag.title}
			</button>
		`));
	})
	.catch(err => {
		console.error(err);
	});
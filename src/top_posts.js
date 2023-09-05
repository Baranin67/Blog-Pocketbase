const topPostsEl = document.querySelector('#top-posts');

let serverCfg;
let clientCfg;
let routesCfg;

// Get server config
await fetch('./cfg/server.json')
	.then(res => res.json())
	.then(data => serverCfg = data);

// Get client config
await fetch('./cfg/client.json')
	.then(res => res.json())
	.then(data => clientCfg = data);

// Get routes config
await fetch('./cfg/routes.json')
	.then(res => res.json())
	.then(data => routesCfg = data);


// Get top posts by views amount
// TODO: optimize (get only ID and title)
axios.get(`${serverCfg.url}${routesCfg.apiPosts}`, {
	params: { perPage: 6, sort: '-views' }
})
	.then(res => {
		res.data.items.forEach(post => {
			const postUrl = `${replace(routesCfg.post, [post.name])}`;

			const btnEl = document.createElement('button');
			btnEl.classList.add('transparent');
			btnEl.addEventListener('click', () => window.location.pathname = postUrl);
			btnEl.innerHTML = `<i class="fa-solid fa-arrow-right"></i>${post.title}`;

			topPostsEl.insertAdjacentElement('beforeend', btnEl);
		});
	})
	.catch(err => {
		console.error(err);
	});
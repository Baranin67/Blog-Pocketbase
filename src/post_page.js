// TODO: add fallback loading icon

const urlParams = new URLSearchParams(document.location.search);
const postName = urlParams.get('name');

if (postName === null)
	window.location.href = routesCfg.unknownPostFallback;


// loading fallback elements
const postInfoLoadingFallbackWrapperEl = document.querySelector('#post-info-loading-fallback-wrapper');
const postContentLoadingFallbackWrapperEl = document.querySelector('#post-content-loading-fallback-wrapper');

// header elements
const headerEl = document.querySelector('header');
const headerTitleEl = headerEl.querySelector('.title');

// header content elements
const headerContentEl = headerEl.querySelector('.content');
const headerContentAuthorEl = headerContentEl.querySelector('.author');
const headerContentCreatedEl = headerContentEl.querySelector('.created');
const headerContentTagsEl = headerContentEl.querySelector('.tags');

// post content
const postContentEl = document.querySelector('#post-content');


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


// Get post by its name
axios.get(`${serverCfg.url}${routesCfg.apiPosts}`, {
	params: {
		filter: `(name='${postName}')`,
		expand: 'author,tags'
	}
})
	.then(res => {
		const postData = res.data.items[0];

		if (postData === undefined)
			window.location.href = routesCfg.unknownPostFallback;

		const replaceContent = (el, content) => el.textContent = replace(el.textContent, [content]);

		document.title = replace(document.title, [postData.title]);
		replaceContent(headerTitleEl, postData.title);
		replaceContent(headerContentAuthorEl, postData.expand.author.username);
		replaceContent(headerContentCreatedEl, getLocaleDate(postData.created));

		postData.expand.tags.forEach(tag => {
			headerContentTagsEl.insertAdjacentHTML('beforeend', `
				<button
					onclick="window.location.href='?tags=${tag.title}'"
					class="tag"
				>
					${tag.title}
				</button>
			`);
		});
		postContentEl.innerHTML = marked.parse(postData.content);

		headerEl.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
		postInfoLoadingFallbackWrapperEl.classList.add('hidden');
		postContentLoadingFallbackWrapperEl.classList.add('hidden');
	})
	.catch(_ => {
		// window.location.href = routesCfg.unknownPostFallback;
		console.error(_);
	});
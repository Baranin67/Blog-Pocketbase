const articleListEl = document.querySelector('#posts');

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


// Get first 10 posts
axios.get(`${serverCfg.url}${routesCfg.apiPosts}`, {
    params: { perPage: 10, sort: '-created', expand: 'tags' }
})
    .then(res => {
        res.data.items.forEach(post => insertPostCard(articleListEl, post));
    })
    .catch(err => {
        console.error(err);
    });
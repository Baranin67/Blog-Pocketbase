const insertPostCard = (element, data) => {
	element.insertAdjacentHTML('beforeend', `
		<div class="card" onclick="window.location.href='/post.html?name=${data.name}'">
			<div class="info">
				<h3 class="header">${data.title}</h3>
				<div class="metadata">
					<span class="tags">${data.expand.tags.map(tag => tag.title).join(', ')}</span>
					<span class="date">${getLocaleDate(data.created)}</span>
				</div>
			</div>
			<p class="summary">${data.summary}</p>
			<div class="btns">
				<button class="transparent">Przeczytaj <span>&gt;</span></button>
			</div>
		</div>
	`);
}
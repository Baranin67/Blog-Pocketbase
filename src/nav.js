const navEl = document.querySelector('#main-nav');
const menuBtn = navEl.querySelector('button.menu');
const menuEl = document.querySelector('#menu');
const closeBtn = menuEl.querySelector('button.close');
const changeThemeBtn = document.querySelectorAll('button.change-theme')

menuBtn.addEventListener('click', () => {
	menuEl.dataset.active = true;
});

closeBtn.addEventListener('click', () => {
	delete menuEl.dataset.active;
});

changeThemeBtn.forEach(el => {
	el.addEventListener('click', () => {
		const currTheme = document.documentElement.dataset.theme;

		document.documentElement.setAttribute(
			'data-theme',
			currTheme === 'dark' ? 'light' : 'dark'
		);
	});
});
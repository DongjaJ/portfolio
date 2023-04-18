document.body.addEventListener('scroll', () => {
	const navbar = document.querySelector('#navbar');
	navbar.style.backgroundColor = '#ff6863';
});

document.body.addEventListener('scrollend', () => {
	const navbar = document.querySelector('#navbar');
	navbar.style.backgroundColor = '#fe918d';
});

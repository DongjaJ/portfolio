'use strict';

const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	console.log(navBarHeight);
	navbar.style.backgroundColor = '#ff6863';
});

document.addEventListener('scrollend', () => {
	navbar.style.backgroundColor = '#fe918d';
});

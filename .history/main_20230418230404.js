'use strict';

const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	console.log(navBarHeight);
	if (window.screenY > navBarHeight) navbar.classList.add('navbar--dark');
	else navbar.classList.remove('navbar--dark');
});

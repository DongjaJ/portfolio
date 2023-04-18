'use strict';

//Make navBar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (window.scrollY > navBarHeight) navbar.classList.add('navbar--dark');
	else navbar.classList.remove('navbar--dark');
});

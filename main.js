'use strict';

//Make navBar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (window.scrollY > navBarHeight) navbar.classList.add('navbar--dark');
	else navbar.classList.remove('navbar--dark');
});

// const navbarItems = Array.from(
// 	document.querySelectorAll('.navbar__menu__item')
// );
// navbarItems.forEach((navbarItem) => {
// 	navbarItem.addEventListener('click', () => {
// 		const category = navbarItem.textContent.toLowerCase();
// 		const targetSection = document.querySelector(`#${category}`);
// 		console.log(category, targetSection);
// 		targetSection.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
// 	});
// });

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
	const target = e.target;
	const link = target.dataset.link;
	if (link == null) return;
	const scrollTo = document.querySelector(link);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
});

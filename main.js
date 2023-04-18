'use strict';

//Make navBar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > navBarHeight) navbar.classList.add('navbar--dark');
	else navbar.classList.remove('navbar--dark');
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
	const target = e.target;
	const link = target.dataset.link;
	if (link == null) return;
	navbarMenu.classList.remove('open');
	scrollIntoView(link);
});

//navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', (e) => {
	navbarMenu.classList.toggle('open');
});

//Handle click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
	scrollIntoView('#contact');
});

//make home slowly fade to transparents as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2) {
		arrowUp.classList.add('visible');
	} else arrowUp.classList.remove('visible');
});
arrowUp.addEventListener('click', () => {
	scrollIntoView('#home');
});

//Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
	const category =
		e.target.dataset.category || e.target.parentNode.dataset.category;
	if (category == null) return;

	const active = document.querySelector('.category__btn.active');
	active.classList.remove('active');
	const target =
		e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('active');

	projectContainer.classList.add('anim-out');
	setTimeout(() => {
		projects.forEach((project) => {
			if (category === '*' || category === project.dataset.category) {
				project.classList.remove('invisible');
			} else project.classList.add('invisible');
		});
		projectContainer.classList.remove('anim-out');
	}, 300);
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
}

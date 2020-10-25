'use strict'

const navbar = document.querySelector('#navbar');
const home = document.querySelector('#home');
const navBarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
  if(window.scrollY > navBarheight) {
    navbar.classList.add('navBar')
  } else {
    navbar.classList.remove('navBar')
  }
})

const navbarMenu = document.querySelector('.navbar__menu');
const homeContent = document.querySelector('.home__contect');
const arrowupBtn = document.querySelector('.arrowup-btn');

navbarMenu.addEventListener('click', handleClick)
homeContent.addEventListener('click', handleClick )
arrowupBtn.addEventListener('click', () => scrollintoview('#home'));

function handleClick(event) {
    const tarGet = event.target;
    const link = tarGet.dataset.link;
    console.log(link);
    if(link === null) {
      return;
    }
    scrollintoview(link);
}

function scrollintoview(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth" , block:"center"});
}

const homeContainer = document.querySelector('.home__container');
const homecontainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
  homeContainer.style.opacity = 1 - window.scrollY / homecontainerHeight;
})


const homeHeight = home.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight) {
    arrowupBtn.classList.add('arrowup-btn-view');
  } else {
    arrowupBtn.classList.remove('arrowup-btn-view');
  }
})


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

navbarMenu.addEventListener('click', handleClick)
homeContent.addEventListener('click', handleClick )

function handleClick(event) {
    const tarGet = event.target;
    const link = tarGet.dataset.link;
    if(link === null) {
      return;
    }
    scrollintoview(link);
}

const homeContainer = document.querySelector('.home__container');
const homecontainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
  homeContainer.style.opacity = 1 - window.scrollY / homecontainerHeight;
})

function scrollintoview(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth" , block:"center"});
}



'use strict'

const navbar = document.querySelector('#navbar');
const navBarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
  if(window.scrollY > navBarheight) {
    navbar.classList.add('navBar')
  } else {
    navbar.classList.remove('navBar')
  }
})
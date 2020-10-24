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

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event) => {
  // console.log(event.target.dataset.link);

  const tarGet = event.target;
  const link = tarGet.dataset.link;

  if(link === null) {
    return;
  } 
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
  
})
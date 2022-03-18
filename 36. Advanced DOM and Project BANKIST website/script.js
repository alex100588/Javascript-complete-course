'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=> btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSelections = document.querySelectorAll('.section')
console.log(allSelections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

console.log(document.getElementsByClassName('btn'))
/Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = 'We use cookies for improved functionality and analytics'
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it</button>'
// header.prepend(message)
// header.append(message.cloneNode(true))

header.after(message)
//header.before(message.cloneNode(true))
//header.before(message.cloneNode(true))

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click',()=> message.remove())

///Styles
message.style.backgroundColor = 'blue'
message.style.width = '120%'

console.log(message.style.color); 
console.log(message.style.backgroundColor); 
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered')

///Attributes

const logo = document.querySelector('.nav__logo')
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('name'));
logo.setAttribute('company', 'Bankist')
console.log(logo.getAttribute('src'));


//Implementing smooth scrool

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(){
  section1.scrollIntoView({behavior: 'smooth'})
})

//Event handlers

const alertH1 = function(){
  console.log('great')
}

const h1 =document.querySelector('h1')
h1.addEventListener('mouseenter', alertH1 )
setTimeout(() => {
  h1.removeEventListener('mouseenter',alertH1 )
}, 2000)

///Event propagation

// const randomInt = (min, max)=> Math.floor(Math.random() * (max-min +1) + min) 
// const randomColor = ()=> `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
//   console.log(randomColor());
//   //e.stopPropagation()
//  })
//  document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
//  })
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor()
// })


////Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })


document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault()

  if(e.target.classList.contains('nav__link')){
    const id = document.querySelector(e.target.getAttribute('href'))
    console.log(id);
    id.scrollIntoView({behavior: 'smooth'})
  }
})

/// Dom traversing

const h11 = document.querySelector('h1')

console.log(h11.querySelectorAll('.highlight'));
console.log(h11.childNodes);
console.log(h11.children)
console.log(h11.firstElementChild)
h11.firstElementChild.style.color = 'white'
console.log(h11.lastElementChild)
h11.lastElementChild.style.color = 'orangered'
console.log(h11.parentElement);
console.log(h11.parentNode);

//h11.closest('.header').style.backgroundColor = 'green'

console.log(h11.nextElementSibling);
console.log(h11.previousElementSibling);
console.log(h11.previousSibling);
console.log(h11.nextSibling);
console.log(h11.parentElement.children);

//[...h11.parentElement.children].forEach(el=> el.style.color = 'red')
//Array.from(h11.parentElement.children).forEach(el=> el.style.color = 'red')


/////////////Building a tab component

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked);
  if(!clicked) return

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active')
  
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

const nav = document.querySelector('.nav')

const handleOver = function(e, opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el =>{
      if(el !== link){
        el.style.opacity = opacity
        logo.style.opacity = opacity
      }
    })
  }
}


nav.addEventListener('mouseover', function(e){
  handleOver(e, 0.5)
})

nav.addEventListener('mouseout', function(e){
  handleOver(e, 1)
})

const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords);

window.addEventListener('scroll', function(e){
  console.log(window.scrollY);
  // if(window.scrollY > initialCoords.top){
  //   nav.classList.add('sticky')
  // }else{
  //   nav.classList.remove('sticky')
  // }

  window.scrollY > initialCoords.top ? nav.classList.add('sticky') : nav.classList.remove('sticky')
})

////// Building the Slider

const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')


let currentSlide = 0
const maxSlide = slides.length
const goToSlide = function(slidee){
  slides.forEach((slide, idx) => slide.style.transform = `translateX(${100 * (idx - slidee)}%)`)
}

goToSlide(0)
  
const nextSlide = function(){
  if(currentSlide === maxSlide -1){
    currentSlide = 0
  }else{
    currentSlide++
  }

  goToSlide(currentSlide)
}

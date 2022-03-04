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


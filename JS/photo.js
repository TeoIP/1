
//Fixed nav

const nav = document.getElementById('nav');
const fixedNavHeight = 250;

function fixedNav() {
   if (window.scrollY >= fixedNavHeight) {
      nav.classList.add('fixed_nav');
   } else {
      nav.classList.remove('fixed_nav');
   };
};

window.addEventListener('scroll', fixedNav);



//Hamburger Activator get element

const hamburger = document.getElementById('nav_hamburger');
const middleLine = document.getElementById('hamburger_line');
const body = document.getElementById('body');

const navLinks = document.getElementById('nav_links');

//Event on click for hamburger

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('show');
   body.classList.toggle('show');
});
hamburger.addEventListener('click', () => {
   middleLine.classList.toggle('active_line');
});


//Open the album 
const popUp = document.querySelector('.photo_main_image_list_popup');
const popUpLinks = document.querySelectorAll('.popup_link');

let unlock = true;

const timeout = 600;

if (popUpLinks.length > 0) {
   for (let index = 0; index < popUpLinks.length; index++) {
      const popUpLink = popUpLinks[index];
      popUpLink.addEventListener('click', ()=>{
         popUp.classList.toggle('open');
         body.classList.toggle('show');
      });
   }};


//Album scroll
const prevPhoto = document.getElementById('popup_prev');
const nextPhoto = document.getElementById('popup_next');

const allPhoto = document.querySelectorAll('.photo_main_image_list_popup_photo');
const numberofPhoto = allPhoto.length;

let photoNumber = 0;

nextPhoto.addEventListener('click', () => {
   allPhoto.forEach((photo) => {
      photo.classList.remove('active_photo');
   });
   photoNumber++;

   if (photoNumber > ( numberofPhoto - 1)) {
      photoNumber = 0;
   }

   allPhoto[photoNumber].classList.add('active_photo');
});

prevPhoto.addEventListener('click', () => {
   allPhoto.forEach((photo) => {
      photo.classList.remove('active_photo');
   });
   photoNumber--;

   if (photoNumber < 0) {
      photoNumber = numberofPhoto - 1;
   }

   allPhoto[photoNumber].classList.add('active_photo');
});
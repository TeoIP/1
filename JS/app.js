//Fixed nav

const nav = document.getElementById('nav');
const caroselHeight = document.querySelector('.carousel_page_presentacion');
const topOfNav = caroselHeight.offsetHeight;

function fixedNav() {
   if (window.scrollY >= topOfNav) {
      nav.classList.add('fixed_nav');
   } else {
      nav.classList.remove('fixed_nav');
   };
};

window.addEventListener('scroll', fixedNav);



//Hamburger Activator get element

const hamburger = document.getElementById('nav_hamburger');
const middleLine = document.getElementById('hamburger_line');

const navLinks = document.getElementById('nav_links');

//Event on click for hamburger

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('show');
});
hamburger.addEventListener('click', () => {
   middleLine.classList.toggle('active_line');
});



//Big carousel main page get const

const allSlides = document.querySelector('.carousel_page_presentacion_all_slides');
const oneSlide = document.querySelectorAll('.carousel_one_slide_width');
const nextSlide = document.querySelector('.carousel_main_page_next');
const prevSlide = document.querySelector('.carousel_main_page_prev');
const slideIcons = document.querySelectorAll('.carousel_page_presentacion_navigation_bottom_one');
const numberOfSlides = oneSlide.length;
let slideNumber = 0;

//Next btn script

nextSlide.addEventListener('click', () => {
   oneSlide.forEach((slide) => {
      slide.classList.remove('active_slide');
   });
   slideNumber++;

   if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;
   }

   oneSlide[slideNumber].classList.add('active_slide');
});

//Prev btn script 

prevSlide.addEventListener('click', () => {
   oneSlide.forEach((slide) => {
      slide.classList.remove('active_slide');
   });
   slideNumber--;

   if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
   }

   oneSlide[slideNumber].classList.add('active_slide');
});

//Auto carosel

let sliderPlay;

let sliderReapeter = () => {
   sliderPlay = setInterval(() => {
      oneSlide.forEach((slide) => {
         slide.classList.remove('active_slide');
      });

      slideNumber++;

      if (slideNumber > (numberOfSlides - 1)) {
         slideNumber = 0;
      }
      oneSlide[slideNumber].classList.add('active_slide');
   }, 4000);
};
sliderReapeter();

//Autoplay stop 
allSlides.addEventListener('mouseover', () => {
   clearInterval(sliderPlay);
});

//Autoplay start
allSlides.addEventListener('mouseout', () => {
   sliderReapeter();
});


//Director more info

const moreInfoBtn = document.getElementById('main_director_description_btn');
const directorDescription = document.querySelector('.main_director_description_change');
const directorDescriptionHeight = directorDescription.clientHeight;
const moreInfo = 'Mai puțină informație';

moreInfoBtn.addEventListener('click', () => {
   if (directorDescriptionHeight === 140) {
      directorDescription.classList.toggle('max_height');
   };
   if (moreInfoBtn.textContent === moreInfo) {
      moreInfoBtn.textContent = 'Mai multă informație'
   } else {
      moreInfoBtn.textContent = 'Mai puțină informație';
   };
});


//Take form info
const formError = document.querySelector('.error_form');
const formContainer = document.querySelector('.main_content_feedback');

document.addEventListener('DOMContentLoaded', function () {
   const mainForm = document.getElementById('main_form');
   mainForm.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(mainForm);

      let formData = new FormData(mainForm);

      if (error === 0) {
         formError.style.display = 'none'; 
         formContainer.classList.add('_sendding')
         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            mainForm.reset();
            formContainer.classList.remove('_sendding')
         } else{

         }
       } else {
         formError.style.display = 'block'; 
      }
   }

   function formValidate(mainForm) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)){
               formAddError(input);
               error++;
            }
         }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
            formAddError(input);
            error++;
         }else{
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }

   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
});

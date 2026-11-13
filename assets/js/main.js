/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menus show    */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add("show-menu")
   })
}


/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   } )
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
      strings: ['Software Developer','Tech Enthusiast','Problem Solver'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   /*
      The code for sending emails is a sample test.
      Create your account at https://www.emailjs.com/ 
      and follow the instructions in the video and images 
      to send emails with your account.   
   */
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_mb0x55g','template_rj851fi','#contact-form','ANOF-GO2gZEZt4EtQ')
  .then(() => {
   // Show sent message
   contactMessage.textContent = 'Message sent successfully ✅'

   // Remove message after five seconds
   setTimeout(() => {
      contactMessage.textContent = ''
   },5000)

   //Clear input fields
   contactForm.reset()
  }, () => {
   // Show error message
   contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')   
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')
      sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   // reset: true,  //animation repeat
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data,.resume__content:nth-child(2)`,{delay: 300, origin: 'bottom'})

sr.reveal(`.about__content, .contact__content`,{origin: 'bottom'})
sr.reveal(`.about__image, .contact__form`,{delay: 300})

sr.reveal(`.projects__card`,{interval: 100})

/*=============== DARK / LIGHT THEME TOGGLE ===============*/ 
const themeButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeButton && themeIcon) {
    // Check if the user previously saved a theme preference
    const selectedTheme = localStorage.getItem('selected-theme');

    // Apply the light theme immediately if it was saved
    if (selectedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
    }

    // Toggle the theme when the button is clicked
    themeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the mobile menu from acting up
        
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            themeIcon.classList.remove('ri-sun-line');
            themeIcon.classList.add('ri-moon-line');
            localStorage.setItem('selected-theme', 'light');
        } else {
            themeIcon.classList.remove('ri-moon-line');
            themeIcon.classList.add('ri-sun-line');
            localStorage.setItem('selected-theme', 'dark');
        }
    });
}
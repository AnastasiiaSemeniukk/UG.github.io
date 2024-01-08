const gallery = document.querySelector('.gallery')
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToGallery()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToGallery()
  setActiveSlide()
})

setBgToGallery()

function setBgToGallery() {
  gallery.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}


const menuLinks = document.querySelectorAll('.navbar a');


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });

    link.classList.add('active');
  });
});


function callNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}


// Menu link functionality
const menuLinks = document.querySelectorAll('.navbar a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });
    link.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  });
});





// Function to call a phone number
function callNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}



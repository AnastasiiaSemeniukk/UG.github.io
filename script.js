document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const contactbtn = document.getElementById('contactbtn');
    const navLinks = document.querySelectorAll('.navlist li a');


    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    };

    document.getElementById('contactbtn').addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    function callNumber(phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    }
});

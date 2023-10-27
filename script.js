document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const contactbtn = document.getElementById('contactbtn');
    const navLinks = document.querySelectorAll('.navlist li a');

    const firstPage = document.querySelector('.mainpage');
    const firstPageHeight = firstPage.offsetHeight;

    window.addEventListener('scroll', function () {
        const headerHeight = header.offsetHeight;

        if (window.scrollY > firstPageHeight - headerHeight) {
            header.style.backgroundColor = '#736f73';
            logo.src = 'img/logo2.png';
            contactbtn.style.backgroundColor = '#272021';
            navLinks.forEach(link => {
                link.style.color = '#272021';
            });
        } else if (window.scrollY > 50) {
            header.style.backgroundColor = '#272021';
            logo.src = 'img/logo.png';
            contactbtn.style.backgroundColor = '#abb1b9';
            navLinks.forEach(link => {
                link.style.color = '#e5f1f6';
            });
        }
    });

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

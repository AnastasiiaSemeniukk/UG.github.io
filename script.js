let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    var scrolled = window.scrollY;
    var firstPageHeight = document.getElementById('.mainpage').offsetHeight;
    var headerHeight = header.offsetHeight;

    if (scrolled > firstPageHeight - headerHeight) {
        header.style.backgroundColor = '#272021';
    } else {
        header.style.backgroundColor = '#736f73';
    }
});



document.getElementById('contactbtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

    
        const panels = document.querySelectorAll('.panel');
        let currentIndex = 0;
        
        function showPanel(index) {
            panels.forEach((panel, i) => {
                const distance = Math.min(Math.abs(index - i), panels.length - Math.abs(index - i));
                const opacity = 1 - distance * 0.2;
        
                if (i === index) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
        
                panels[i].style.display = 'flex';
                panels[i].style.opacity = opacity;
        
                if (distance > 2) {
                    panels[i].style.display = 'none';
                }
            });
        }
        function updateVisiblePanels(direction) {
            currentIndex = (currentIndex + direction + panels.length) % panels.length;
            showPanel(currentIndex);
        }
        
        panels.forEach((panel, index) => {
            panel.addEventListener('click', () => {
                currentIndex = index;
                showPanel(currentIndex);
            });
        });
        showPanel(currentIndex);


        const toTop = document.querySelector(".to-top");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                toTop.classList.add("active");
            } else {
                toTop.classList.remove("active");
            }
        })


        function callNumber(phoneNumber) {
            window.location.href = 'tel:' + phoneNumber;
        }





            
  

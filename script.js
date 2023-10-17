 document.addEventListener('DOMContentLoaded', function () {
            const header = document.querySelector('.header');
            const logo = document.querySelector('.logo');
            const contactbtn = document.getElementById('contactbtn');
            const navLinks = document.querySelectorAll('.nav-links a');

            const headerHeight = header.offsetHeight; 
            const firstPageHeight = document.getElementById('page0').offsetHeight; 

            window.addEventListener('scroll', function () {
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
        });


document.getElementById('contactbtn').addEventListener('click', function() {
    // Обробка подій при натисканні кнопки, наприклад, прокрутка до секції контактів
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
        

      


        

        
        
        
       
        
        
        
        


        


        
            

      
     
      
      
      
      
      
      



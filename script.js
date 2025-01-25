document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let iconNavbar = document.querySelector('.iconNavbar');

    if (menuIcon && navbar) { // Check if elements exist
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark'); // Toggle icon
            if(iconNavbar.style.display === "flex")  iconNavbar.style.display="none"
            else  iconNavbar.style.display="flex"
            //navbar.classList.toggle('active'); // Corrected 'toogle' to 'toggle'
        };
    }

    // Scroll section active link 
    // let sections = document.querySelectorAll('section'); // Changed to querySelectorAll for multiple sections
    // let navLinks = document.querySelectorAll('header nav a'); // Changed to querySelectorAll for multiple links

    // window.onscroll = () => {
    //     let top = window.scrollY;

    //     sections.forEach(sec => {
    //         let offset = sec.offsetTop - 150;
    //         let height = sec.offsetHeight;
    //         let id = sec.getAttribute('id');

    //         if (top >= offset && top < offset + height) {
    //             navLinks.forEach(link => {
    //                 link.classList.remove('active');
    //                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    //             });
    //         }
    //     });

    //     // Sticky navbar 
    //     let header = document.querySelector('header');
    //     header.classList.toggle('sticky', window.scrollY > 100);

    //     // Remove toggle icon and navbar when not in use
    //     if (navbar.classList.contains('active')) {
    //         menuIcon.classList.remove('fa-xmark');
    //     }
    // };

    // Scroll reveal 
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills, .work-container, .project-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Software Enthusiast', 'Web Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });

    // EmailJS and contact handling
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.querySelector('input[placeholder="Full name"]').value;
        const email = document.querySelector('input[placeholder="Email Address"]').value;
        const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
        const emailSubject = document.querySelector('input[placeholder="Email Subject"]').value;
        const message = document.querySelector('#message-area').value;

        const data = {
            service_id: 'service_krr5sjn',
            template_id: 'template_5tk9607',
            user_id: 'YD5Voo-RczTKyLGi1', // Replace with your public key
            template_params: {
                fullName,
                email,
                mobileNumber,
                emailSubject,
                message,
                date: new Date().toLocaleString()
            }
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Your mail is sent!');
                document.querySelector('form').reset(); // Reset form after submission
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            alert('Oops... ' + error.message);
        });
    });
});
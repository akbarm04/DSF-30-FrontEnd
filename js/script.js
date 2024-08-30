    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 0);

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar a');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (currentSection === 'container') {
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            } else if (currentSection) {
                const href = link.getAttribute('href').substring(1);
                if (href === currentSection) {
                    link.classList.add('active');
                }
            }
        });

        const contactSection = document.querySelector('#contact');
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                }
            });
        }
    });

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }

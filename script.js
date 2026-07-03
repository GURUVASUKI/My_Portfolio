
       const header = document.querySelector("header");
        window.addEventListener("scroll",()=>{
            if(window.scrollY>50){
                header.classList.add("scrolled");
            }else{
                header.classList.remove("scrolled");
            }
        });
      const menuToggle = document.getElementById("mobile-menu");
        const navLinks = document.querySelector(".nav-links");
        const menuIcon = menuToggle.querySelector("i");

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-times");
            } else {
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            }

        });

        // Close menu when a nav link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");

            });

        });

        // Intersection Observer for Skill Bar Loading Animation
        const skillBars = document.querySelectorAll('.progress-bar-fill');
        
        const animateSkills = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const bar = entry.target;
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress;
                    observer.unobserve(bar); // Stop observing once animated
                }
            });
        };

        const skillObserver = new IntersectionObserver(animateSkills, {
            threshold: 0.1
        });

        skillBars.forEach(bar => skillObserver.observe(bar));

        // Active Link Highlight on Scroll
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });

        // Scroll Reveal Animation

        const reveals = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right");

        const revealObserver = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{
            threshold:0.15
        });

        reveals.forEach(item=>{
            revealObserver.observe(item);
        });

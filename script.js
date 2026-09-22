document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Theme Toggle (Light/Dark Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
    
    function updateThemeIcon(isDark) {
        const icon = themeToggleBtn.querySelector('i');
        if (isDark) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }

    /* ==========================================================================
       Mobile Menu Controls
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    function openMobileMenu() {
        mobileNavOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock scroll
    }
    
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Release scroll
    }
    
    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    /* ==========================================================================
       Typing Effect
       ========================================================================== */
    const typingSpan = document.getElementById('typing-text');
    const titles = [
        "Front-End Web Developer.",
        "Computer Science Student.",
        "Aspiring Network Engineer."
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingSpan.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at full text
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            // Short pause before starting typing next title
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    if (typingSpan) {
        typeEffect();
    }

    /* ==========================================================================
       Scroll Progress Bar & Back to Top & Sticky Header
       ========================================================================== */
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top');
    const mainHeader = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
        
        // Toggle Back to Top Button
        if (winScroll > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Sticky Header scroll styling shadow
        if (winScroll > 20) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       Scroll Spy (Highlight Active Nav Link)
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mLinks = document.querySelectorAll('.mobile-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the center of viewport
        threshold: 0
    };
    
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                // Update Desktop Nav Links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
                
                // Update Mobile Nav Links
                mLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => spyObserver.observe(section));

    /* ==========================================================================
       Scroll Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => revealObserver.observe(element));

    /* ==========================================================================
       Skills Progress Bar Animation & Stats Counter
       ========================================================================== */
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateSkills = () => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // Stats Counter
    const aboutSection = document.getElementById('about');
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasCounted = false;
    
    const countStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const stepTime = Math.max(Math.floor(duration / target), 15);
            let current = 0;
            
            const timer = setInterval(() => {
                current += 1;
                stat.textContent = current;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    };
    
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                countStats();
                hasCounted = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

    /* ==========================================================================
       Project Filtering
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to current button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    /* ==========================================================================
       Contact Form Validation & Toast Notification
       ========================================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const toastModal = document.getElementById('toast-modal');
    const toastClose = document.getElementById('toast-close');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            if (contactForm.checkValidity()) {
                submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;
                
                const formData = new FormData(contactForm);
                
                try {
                    const response = await fetch(contactForm.action, {
                        method: contactForm.method,
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        // Show successful submission toast modal
                        showToast();
                        contactForm.reset();
                    } else {
                        const data = await response.json();
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form.");
                        }
                    }
                } catch (error) {
                    alert("Oops! There was a problem submitting your form.");
                } finally {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }
            }
        });
    }
    
    function showToast() {
        if (toastModal) {
            toastModal.classList.remove('hidden');
            
            // Auto close after 4 seconds
            const autoCloseTimer = setTimeout(() => {
                hideToast();
            }, 4000);
            
            // Allow closing manual
            toastClose.addEventListener('click', () => {
                hideToast();
                clearTimeout(autoCloseTimer);
            });
        }
    }
    
    function hideToast() {
        if (toastModal) {
            toastModal.classList.add('hidden');
        }
    }
    
    // Set Current Copyright Year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});

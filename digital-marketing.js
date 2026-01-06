// ===================================
// DIGITAL MARKETING LANDING PAGE
// Interactive JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ===================================
    // PHONE INPUT VALIDATION
    // ===================================
    const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/\D/g, '');
        });
    });

    // ===================================
    // NAVIGATION
    // ===================================
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    // Navbar scroll effect with auto-hide
    let lastScrollTop = 0;
    let scrollThreshold = 5; // Minimum scroll distance to trigger hide/show

    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;

        // Add scrolled class for background change
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Auto-hide/show navbar based on scroll direction
        if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
            if (currentScroll > lastScrollTop && currentScroll > 100) {
                // Scrolling down & past threshold - hide navbar
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling up - show navbar
                navbar.classList.remove('navbar-hidden');
            }
            lastScrollTop = currentScroll;
        }
    });

    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // SCROLL REVEAL ANIMATIONS
    // ===================================
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // ===================================
    // ANIMATED COUNTERS
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let counterAnimated = false;

    const animateCounters = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterAnimated) {
                counterAnimated = true;

                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + (stat.textContent.includes('%') ? '' : '+');
                        }
                    };

                    updateCounter();
                });

                animateCounters.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        animateCounters.observe(statsSection);
    }

    // ===================================
    // GRAVITY TAGS ANIMATION (Matter.js)
    // ===================================
    const gravityContainer = document.getElementById('gravity-container');

    if (gravityContainer && typeof Matter !== 'undefined') {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;

        // Clear static tags if JS is running
        gravityContainer.innerHTML = '';

        // Create renderer
        const render = Render.create({
            element: gravityContainer,
            engine: engine,
            options: {
                width: gravityContainer.clientWidth,
                height: gravityContainer.clientHeight,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });

        // Tags to display
        const tags = [
            { text: '#Strategy', color: '#fce7f3', textColor: '#be185d' },
            { text: '#Marketing', color: '#fbcfe8', textColor: '#9d174d' },
            { text: '#Development', color: '#bfdbfe', textColor: '#1e40af' },
            { text: '#Design', color: '#ffedd5', textColor: '#c2410c' },
            { text: '#SEO', color: '#e9d5ff', textColor: '#6b21a8' },
            { text: '#Content', color: '#ddd6fe', textColor: '#5b21b6' },
            { text: '#Social', color: '#fda4af', textColor: '#9f1239' },
            { text: '#PPC', color: '#cbd5e1', textColor: '#334155' },
            { text: '#Growth', color: '#fff1f2', textColor: '#9f1239' },
            { text: '#Analytics', color: '#e0f2fe', textColor: '#075985' },
            { text: '#Sales', color: '#dcfce7', textColor: '#166534' },
            { text: '#Conversion', color: '#f3e8ff', textColor: '#6b21a8' },
            { text: '#Traffic', color: '#ccfbf1', textColor: '#115e59' },
            { text: '#Branding', color: '#fae8ff', textColor: '#86198f' },
            { text: '#Creative', color: '#ffedd5', textColor: '#c2410c' }
        ];

        // Function to create pill texture
        function createPillTexture(text, bgColor, textColor, width, height) {
            const canvas = document.createElement('canvas');
            canvas.width = width * 2; // High-res
            canvas.height = height * 2;
            const ctx = canvas.getContext('2d');

            // Draw pill
            ctx.scale(2, 2);
            ctx.beginPath();
            ctx.roundRect(0, 0, width, height, height / 2);
            ctx.fillStyle = bgColor;
            ctx.fill();

            // Draw text
            ctx.fillStyle = textColor;
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, width / 2, height / 2);

            return canvas.toDataURL();
        }

        const width = gravityContainer.clientWidth;
        const height = gravityContainer.clientHeight;
        const walls = [
            Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true, render: { visible: false } }), // Floor
            Bodies.rectangle(-30, height / 2, 60, height * 2, { isStatic: true, render: { visible: false } }), // Left wall
            Bodies.rectangle(width + 30, height / 2, 60, height * 2, { isStatic: true, render: { visible: false } }) // Right wall
        ];

        Composite.add(world, walls);

        // Add bodies
        tags.forEach((tag, index) => {
            const bodyWidth = 120 + (tag.text.length * 5);
            const bodyHeight = 44;
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 50;

            const texture = createPillTexture(tag.text, tag.color, tag.textColor, bodyWidth, bodyHeight);

            const body = Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
                chamfer: { radius: bodyHeight / 2 },
                restitution: 0.5,
                render: {
                    sprite: {
                        texture: texture,
                        xScale: 0.5, // Creating texture at 2x and scaling down keeps it sharp
                        yScale: 0.5
                    }
                }
            });

            Composite.add(world, body);
        });

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        Composite.add(world, mouseConstraint);
        render.mouse = mouse;

        // Run engine
        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Resize handler
        window.addEventListener('resize', () => {
            render.canvas.width = gravityContainer.clientWidth;
            render.canvas.height = gravityContainer.clientHeight;
            Matter.Body.setPosition(walls[0], { x: gravityContainer.clientWidth / 2, y: gravityContainer.clientHeight + 30 });
            Matter.Body.setPosition(walls[2], { x: gravityContainer.clientWidth + 30, y: gravityContainer.clientHeight / 2 });
        });
    }



    // ===================================
    // PARALLAX EFFECT FOR HERO
    // ===================================
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // ===================================
    // DYNAMIC GRADIENT ANIMATION
    // ===================================
    let gradientAngle = 135;

    function animateGradient() {
        gradientAngle = (gradientAngle + 0.5) % 360;
        document.documentElement.style.setProperty(
            '--primary-gradient',
            `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`
        );
        requestAnimationFrame(animateGradient);
    }

    // Uncomment to enable gradient animation (can be performance-intensive)
    // animateGradient();

    // ===================================
    // CURSOR TRAIL EFFECT (Optional)
    // ===================================
    const createCursorTrail = () => {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            requestAnimationFrame(animateCursor);
        };

        // Uncomment to enable cursor trail
        // animateCursor();
    };

    createCursorTrail();

    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===================================
    // AUDIT & CONTACT FORM HANDLING
    // ===================================
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyRWfG770hV_r9-5taZ4ZCQhKxdqY43IHW7OXuClVG7YIDeRg3EDBPAjY_l3UqK4PpvUA/exec';
    const thankYouModal = document.getElementById('thankYouModal');
    const closeBtn = document.getElementById('closeModalBtn');

    function triggerSuccessSequence() {
        if (!thankYouModal) return;

        // Show modal
        thankYouModal.style.display = 'flex';

        // Wait 3 seconds then shatter
        setTimeout(() => {
            const card = thankYouModal.querySelector('.unique-modal-card');
            if (!card) return;

            card.classList.add('shattering');

            // Create Glass Shards
            const rect = card.getBoundingClientRect();
            const shardContainer = document.createElement('div');
            shardContainer.className = 'shatter-container';
            thankYouModal.appendChild(shardContainer);

            const shardCount = 25;
            for (let i = 0; i < shardCount; i++) {
                const shard = document.createElement('div');
                shard.className = 'glass-shard';

                // Random size and position within card area
                const size = Math.random() * 80 + 40;
                shard.style.width = size + 'px';
                shard.style.height = size + 'px';
                shard.style.left = (rect.left + Math.random() * rect.width - size / 2) + 'px';
                shard.style.top = (rect.top + Math.random() * rect.height - size / 2) + 'px';

                // Random clip path for "shattered" look
                const p1 = Math.random() * 100;
                const p2 = Math.random() * 100;
                const p3 = Math.random() * 100;
                shard.style.clipPath = `polygon(${p1}% 0%, 100% ${p2}%, ${p3}% 100%)`;

                shardContainer.appendChild(shard);

                // Animate flight
                requestAnimationFrame(() => {
                    const tx = (Math.random() - 0.5) * 1200;
                    const ty = (Math.random() - 0.5) * 1200 + 500; // gravitating down
                    const tr = (Math.random() - 0.5) * 720;
                    shard.style.transform = `translate(${tx}px, ${ty}px) rotate(${tr}deg)`;
                    shard.style.opacity = '0';
                });
            }

            // Redirect after shards clear
            setTimeout(() => {
                thankYouModal.style.opacity = '0';
                thankYouModal.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 500);
            }, 1200);

        }, 3000);
    }

    // Audit Form
    const auditForm = document.getElementById('auditForm');
    const auditBtn = document.getElementById('submitBtn');

    if (auditForm) {
        auditForm.addEventListener('submit', e => {
            e.preventDefault();
            if (auditBtn) {
                auditBtn.disabled = true;
                auditBtn.innerHTML = "Processing...";
            }

            fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(auditForm) })
                .then(() => {
                    triggerSuccessSequence();
                    if (auditBtn) {
                        auditBtn.disabled = false;
                        auditBtn.innerHTML = "Get My Free Audit";
                    }
                    auditForm.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    if (auditBtn) {
                        auditBtn.disabled = false;
                        auditBtn.innerHTML = "Get My Free Audit";
                    }
                });
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const contactBtn = contactForm ? contactForm.querySelector('.btn-submit') : null;

    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            if (contactBtn) {
                contactBtn.disabled = true;
                contactBtn.innerHTML = "Processing...";
            }

            fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(contactForm) })
                .then(() => {
                    triggerSuccessSequence();
                    if (contactBtn) {
                        contactBtn.disabled = false;
                        contactBtn.innerHTML = "Send Message";
                    }
                    contactForm.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    if (contactBtn) {
                        contactBtn.disabled = false;
                        contactBtn.innerHTML = "Send Message";
                    }
                });
        });
    }

    // Modal Close Logic
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (thankYouModal) thankYouModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === thankYouModal) {
            thankYouModal.style.display = 'none';
        }
    });


    // ===================================
    // INTERACTIVE NEURAL AURA (CANVAS)
    // ===================================
    const canvas = document.getElementById('interactive-hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 100;
        const connectionDistance = 150;
        const mouseRadius = 200;

        let mouse = {
            x: null,
            y: null,
            radius: mouseRadius
        };

        // Track mouse position on the entire window because the canvas is background
        window.addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.velocityX = (Math.random() * 2) - 1;
                this.velocityY = (Math.random() * 2) - 1;
                this.color = '#8B9EFF';
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Natural floating movement
                this.x += this.velocityX;
                this.y += this.velocityY;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.velocityX *= -1;
                if (this.y > canvas.height || this.y < 0) this.velocityY *= -1;

                // Interaction with mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x += directionX;
                    this.y += directionY;
                }
            }
        }

        function init() {
            particles = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        opacityValue = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(139, 158, 255, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connect();
            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener('resize', function () {
            init();
        });
    }

    // ===================================
    // UNIQUE FLUID CURSOR LOGIC
    // ===================================
    const cursor = document.querySelector('.custom-cursor');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Fluid movement with lag
    function animateCursor() {
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;

        cursorX = cursorX + (distX * 0.15);
        cursorY = cursorY + (distY * 0.15);

        if (cursor) {
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Show/Hide based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > (heroHeight - 100)) {
            cursor.classList.add('active');
        } else {
            cursor.classList.remove('active');
        }
    });

    // Hover interactions
    const interactiveElements = document.querySelectorAll('a, button, .service-card-wrapper, .industry-card, .social-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // ===================================
    // THE UNIQUE INTERACTION ENGINE
    // ===================================

    // 1. MAGNETIC BUTTONS & ELEMENTS
    const magneticElements = document.querySelectorAll('.btn, .social-link');

    window.addEventListener('mousemove', (e) => {
        magneticElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Magnet effect within 120px
            if (distance < 120) {
                const magnetForce = (120 - distance) / 120;
                const pullX = dx * magnetForce * 0.4;
                const pullY = dy * magnetForce * 0.4;
                el.style.transform = `translate(${pullX}px, ${pullY}px)`;
            } else {
                el.style.transform = `translate(0px, 0px)`;
            }
        });
    });

    // 2. 3D KINETIC TILT FOR CARDS & FORM
    const tiltElements = document.querySelectorAll('.hero-form, .service-card-wrapper, .industry-card');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // 3. DIGITAL SHOCKWAVE RIPPLE
    const shockwaveContainer = document.getElementById('shockwave-container');

    window.addEventListener('mousedown', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';

        shockwaveContainer.appendChild(ripple);

        // Cleanup after animation
        setTimeout(() => {
            ripple.remove();
        }, 800);
    });

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c🚀 Digital Marketing Landing Page', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cBuilt by Navabharath Technologies', 'font-size: 14px; color: #b8b8d1;');
    console.log('%cwww.navabharathtechnologies.com', 'font-size: 12px; color: #00f2fe;');
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

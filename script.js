// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple cards
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.problem-card, .service-card, .benefit-card');
cards.forEach(card => {
    observer.observe(card);
});

// ===== Navbar Background on Scroll =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove shadow based on scroll position
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            if (key === 'services') {
                // Handle multiple select
                const select = document.getElementById('services');
                const selectedOptions = Array.from(select.selectedOptions).map(option => option.text);
                data[key] = selectedOptions.join(', ');
            } else {
                data[key] = value;
            }
        });
        
        // Create email body
        const emailBody = `
協会・学会名: ${data.organization}
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未記入'}
ご希望のサービス: ${data.services || '未選択'}

お問い合わせ内容:
${data.message}
        `.trim();
        
        // Create mailto link
        const mailtoLink = `mailto:info@hiluco.co.jp?subject=協会・学会運営サポートに関するお問い合わせ（${data.organization}）&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show confirmation message
        alert('メールクライアントが起動します。送信を完了してください。\n\nまたは、直接 info@hiluco.co.jp までご連絡ください。');
        
        // Optional: Reset form
        // contactForm.reset();
    });
}

// ===== Form Validation Enhancement =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#3498db';
    });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Service Card Hover Effect Enhancement =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Initialize Animations on Page Load =====
window.addEventListener('load', () => {
    // Trigger initial animations for elements in viewport
    const initialCards = document.querySelectorAll('.problem-card, .service-card, .benefit-card');
    initialCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        }
    });
});

// ===== Scroll Progress Indicator (Optional Enhancement) =====
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #5dade2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Uncomment to enable scroll progress indicator
// createScrollProgress();

// ===== Console Message =====
console.log('%c協会・学会運営サポート by HILUCO', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cお問い合わせ: info@hiluco.co.jp', 'color: #5dade2; font-size: 14px;');

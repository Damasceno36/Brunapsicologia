// Otimização de scroll: Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Efeito de Glass Navbar no Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "15px 0";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.02)";
    } else {
        nav.style.padding = "25px 0";
        nav.style.boxShadow = "none";
    }
});
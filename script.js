// Animación simple al cargar
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll("h1, h2, h3, p, li");

    elements.forEach((el, index) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

        setTimeout(() => {
            el.style.transition = "all 0.6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 120);

    });

});


// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});
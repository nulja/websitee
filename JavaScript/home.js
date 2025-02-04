const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
// Fungsi untuk menganimasikan teks per huruf
function animateTextByCharacter(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'animate-text';
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
}

// Fungsi untuk menganimasikan teks per kata
function animateTextByWord(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const words = element.textContent.split(' ');
        element.textContent = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.className = 'word-animation';
            span.style.setProperty('--word-index', index);
            element.appendChild(span);
        });
    });
}

// Panggil fungsi untuk elemen yang diinginkan
document.addEventListener('DOMContentLoaded', () => {
    animateTextByWord('.hero-title');
    animateTextByCharacter('.hero-subtitle');
    animateTextByWord('.feature-title');
});
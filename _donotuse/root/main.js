// Change nav style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('window-scrolled');
    } else {
        nav.classList.remove('window-scrolled');
    }
});

// Circular text for contact button
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => 
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
    ).join('');
});

// Responsive Nav Bar for mobile
const navToggleOpen = document.getElementById('nav_toggle-open');
const navToggleClose = document.getElementById('nav_toggle-close');
const navLinks = document.querySelector('.nav_links');

navToggleOpen.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    navToggleOpen.style.display = 'none';
    navToggleClose.style.display = 'block';
});

navToggleClose.addEventListener('click', () => {
    navLinks.style.display = 'none';
    navToggleClose.style.display = 'none';
    navToggleOpen.style.display = 'block';
});


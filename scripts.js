// Feather Icons Initialization
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});

// Photography Slider
const photoSlider = document.querySelector('.slider');
const photoSlides = document.querySelectorAll('.slide');
const photoPrevBtn = document.querySelector('.prev-btn');
const photoNextBtn = document.querySelector('.next-btn');

let photoIndex = 0;

// Disable the previous button on the first slide for photography
photoPrevBtn.disabled = true;

photoNextBtn.addEventListener('click', () => {
    photoIndex++;
    updatePhotoSlider();
});

photoPrevBtn.addEventListener('click', () => {
    photoIndex--;
    updatePhotoSlider();
});

function updatePhotoSlider() {
    if (photoIndex === 0) {
        photoPrevBtn.disabled = true;
    } else {
        photoPrevBtn.disabled = false;
    }

    if (photoIndex === photoSlides.length - 1) {
        photoNextBtn.disabled = true;
    } else {
        photoNextBtn.disabled = false;
    }

    photoSlider.style.transform = `translateX(-${photoIndex * 100}%)`;
}

// Coding Slider
const codingSlider = document.querySelector('.coding-slider');
const codingSlides = document.querySelectorAll('.coding-slide');
const codingPrevBtn = document.querySelector('.coding-prev-btn');
const codingNextBtn = document.querySelector('.coding-next-btn');

let codingIndex = 0;

// Disable the previous button on the first slide for coding
codingPrevBtn.disabled = true;

codingNextBtn.addEventListener('click', () => {
    codingIndex++;
    updateCodingSlider();
});

codingPrevBtn.addEventListener('click', () => {
    codingIndex--;
    updateCodingSlider();
});

function updateCodingSlider() {
    if (codingIndex === 0) {
        codingPrevBtn.disabled = true;
    } else {
        codingPrevBtn.disabled = false;
    }

    if (codingIndex === codingSlides.length - 1) {
        codingNextBtn.disabled = true;
    } else {
        codingNextBtn.disabled = false;
    }

    codingSlider.style.transform = `translateX(-${codingIndex * 100}%)`;
}

// Typing Effect
const words = ["Web Developer", "Photographer", "Designer", "Programmer", "Business Specialist"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Speed of typing each letter
const deletingSpeed = 100; // Speed of deleting each letter
const delayBetweenWords = 2000; // Delay before starting to delete after typing the word

const dynamicTextElement = document.querySelector('.dynamic-text');

function typeWord() {
    const currentWord = words[wordIndex];
    const currentDisplay = dynamicTextElement.textContent;

    if (!isDeleting && letterIndex <= currentWord.length) {
        // Typing the word
        dynamicTextElement.textContent = currentWord.substring(0, letterIndex);
        letterIndex++;

        // If the word is fully typed out, wait for a bit before deleting
        if (letterIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
            }, delayBetweenWords);
        }
    }

    if (isDeleting) {
        // Deleting the word
        dynamicTextElement.textContent = currentWord.substring(0, letterIndex);
        letterIndex--;

        // If the word is fully deleted, move to the next word
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Cycle through the words
        }
    }

    // Set the typing/deleting speed depending on the action
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWord, speed);
}

// Start typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    typeWord();
});
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

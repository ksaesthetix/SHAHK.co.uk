// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// Typing Effect
const words = ["Web Developers", "Photographers", "Designers", "Programmers", "Business Specialists"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 80; // Speed of typing each letter
const deletingSpeed = 80; // Speed of deleting each letter
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

// Side menu functionality
var sidemenu = document.getElementById("sidemenu")
function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}

// Initialize EmailJS
(function() {
    emailjs.init("-itQQSXFb6ZbnzoxB"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ztm1cgg', 'template_su78pea', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});
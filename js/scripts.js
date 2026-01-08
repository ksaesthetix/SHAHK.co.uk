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

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            alert('Right-click is disabled on images.');
        });
    });
});

  /* ============================
   3. Testimonials Section (FIXED)
   ============================ */
  async function loadTestimonials() {
    try {
      const response = await fetch('assets/testimonials.json');
      if (!response.ok) throw new Error('Failed to load testimonials.json');
      const testimonials = await response.json();

      const wrapper = document.getElementById('testimonial-wrapper');
      wrapper.innerHTML = ''; // Clear wrapper before adding slides

      testimonials.forEach(item => {
        const slide = document.createElement('article');
        slide.classList.add('testimonial__card', 'swiper-slide');

        // Resolve image path relative to current HTML page
        const imgSrc = new URL(item.photo, window.location.href).href;

        slide.innerHTML = `
          <img src="${imgSrc}" alt="${item.author}" class="testimonial__img" onerror="this.onerror=null;this.src='images/logos/logo_lighterY.png';">
          <h3 class="testimonial__name">${item.author}</h3>
          <p class="testimonial__description">
            ${item.text}
          </p>
        `;

        wrapper.appendChild(slide);
      });

      initSwiper();
    } catch (error) {
      console.error('Error loading testimonials:', error);
    }
  }

  function initSwiper() {
    new Swiper('.testimonial__swiper', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 16,
      grabCursor: true,
      speed: 600,

      effect: 'coverflow',
      coverflowEffect: {
        rotate: -90,
        depth: 600,
        modifier: 0.5,
        slideShadows: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  // Load testimonials on page load
  loadTestimonials();


  // Debug: peek at raw file content for quick troubleshooting
  fetch('./assets/testimonials.json')
    .then((res) => res.text())
    .then((text) => console.log('RAW RESPONSE (first 300 chars):', text.substring(0, 300)))
    .catch(() => console.log('RAW RESPONSE: not available'));
/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader");
        loader.style.display = "none"; // Hide loader after delay
    }, 2000); // 2-second delay after the page loads
});

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
function speakText() {
    // Pehle se koi speech chal rahi hai toh usay cancel karna
    window.speechSynthesis.cancel();

    // About me text ko variable mein save karna
    const aboutText = document.getElementById("aboutText").innerText;

    // SpeechSynthesis API ka istamal
    const utterance = new SpeechSynthesisUtterance(aboutText);
    utterance.lang = 'en-US'; // Language set karna, yahaan English set kiya gaya hai
    utterance.rate = 1; // Speech ki speed set karna

    // Jab speech khatam ho toh cancel kar dena taake dobara start na ho
    utterance.onend = () => {
        window.speechSynthesis.cancel();
    };

    // Speech start karna
    window.speechSynthesis.speak(utterance);
}
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark"; // Toggle between dark and light

    // Set new theme
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Change button icon
    document.querySelector(".theme-toggle-btn").textContent = newTheme === "dark" ? "🌙" : "🌞"; // Update icon based on theme
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light if no saved theme
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.querySelector(".theme-toggle-btn").textContent = savedTheme === "dark" ? "🌙" : "🌞"; // Update icon based on saved theme
});
const progressBars = document.querySelectorAll(".progress-bar");

// Define skill levels as an array of objects
const skills = [
    { element: progressBars[0], width: '90%', label: '90%' },
    { element: progressBars[1], width: '80%', label: '80%' },
    { element: progressBars[2], width: '75%', label: '75%' },
    { element: progressBars[3], width: '70%', label: '70%' }
];

let animated = false; // To ensure animation only occurs once

function animateProgressBars() {
    if (animated) return; // If already animated, do nothing

    animated = true; // Set animated to true to prevent further animations
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.element.style.width = '0%'; // Reset width to 0
            skill.element.offsetWidth; // Trigger reflow to reset the animation
            skill.element.style.width = skill.width; // Set width to animate

            const percentageDisplay = document.createElement('span');
            percentageDisplay.classList.add('percentage');
            percentageDisplay.textContent = skill.label; // Set percentage text
            skill.element.innerHTML = ''; // Clear previous percentage
            skill.element.appendChild(percentageDisplay); // Add percentage to progress bar

            // Fade in percentage
            setTimeout(() => { percentageDisplay.style.opacity = 1; }, 100); 
        }, index * 500); // Stagger the animations
    });
}

// Function to check if the skills section is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll event listener
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills-section'); // Get skills section
    if (isInViewport(skillsSection)) {
        animateProgressBars(); // Animate when section is in view
    }
});


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


$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
let utterance;

function startSpeech() {
    const textElement = document.getElementById("aboutText");
    if (textElement) {
        const text = textElement.innerText;
        utterance = new SpeechSynthesisUtterance(text);

        utterance.onend = () => {
            document.getElementById("pauseButton").style.display = "none";
            document.getElementById("resumeButton").style.display = "none";
            document.getElementById("speakButton").style.display = "inline-block";
        };

        // Start speaking
        speechSynthesis.speak(utterance);

        document.getElementById("speakButton").style.display = "none";
        document.getElementById("pauseButton").style.display = "inline-block";
    } else {
        console.error("Text element not found");
    }
}

function pauseSpeech() {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
        document.getElementById("pauseButton").style.display = "none";
        document.getElementById("resumeButton").style.display = "inline-block";
    }
}

function resumeSpeech() {
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        document.getElementById("resumeButton").style.display = "none";
        document.getElementById("pauseButton").style.display = "inline-block";
    }
}


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

let isFirstInteraction = true;

function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";

    if (chatbotWindow.style.display === "block" && isFirstInteraction) {
        sendBotMessage("Hi! I'm your virtual guide. You can ask me any web development questions like:");
        sendBotMessage("1. What is HTML?");
        sendBotMessage("2. What is CSS?");
        sendBotMessage("3. What is JavaScript?");
        sendBotMessage("4. What is PHP?");
        sendBotMessage("5. What is Responsive Design?");
        sendBotMessage("Feel free to click on any question above or type your own!");
        isFirstInteraction = false;
    }
}

function sendBotMessage(message) {
    const messagesDiv = document.getElementById("chatbotMessages");
    const botMessage = document.createElement("div");
    botMessage.style.color = "#333";
    botMessage.style.margin = "5px 0";
    botMessage.textContent = "Guide: " + message;
    messagesDiv.appendChild(botMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("chatbotInput");
    const userMessage = input.value.trim();
    if (userMessage) {
        addUserMessage(userMessage);
        processUserMessage(userMessage.toLowerCase());
        input.value = "";
    }
}

function addUserMessage(message) {
    const messagesDiv = document.getElementById("chatbotMessages");
    const userMessage = document.createElement("div");
    userMessage.style.color = "#007bff";
    userMessage.style.margin = "5px 0";
    userMessage.textContent = "You: " + message;
    messagesDiv.appendChild(userMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function processUserMessage(message) {
    switch (message) {
        case 'name':
        case 'what is your name':
        case 'what is your name?':
        case 'what is name':
            sendBotMessage("I'm Murtaza Kamran, a passionate and dedicated web developer.");
            break;
        case 'html':
        case '1':
        case 'what is html?':
        case 'what is html':
            sendBotMessage("HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.");
            break;
        case 'css':
        case '2':
        case 'what is css?':
        case 'what is css':
            sendBotMessage("CSS stands for Cascading Style Sheets. It is used for describing the presentation of a document written in HTML.");
            break;
        case 'javascript':
        case '3':
        case 'what is javascript?':
        case 'what is javascript':
            sendBotMessage("JavaScript is a programming language that enables you to create dynamic content on your web pages.");
            break;
        case 'php':
        case '4':
        case 'what is php?':
        case 'what is php':
            sendBotMessage("PHP stands for Hypertext Preprocessor. It is a server-side scripting language designed for web development.");
            break;
        case 'responsive design':
        case '5':
        case 'what is responsive design?':
        case 'what is responsive design':
            sendBotMessage("Responsive design is an approach to web design that makes web pages render well on a variety of devices.");
            break;
        default:
            sendBotMessage("I'm here to help you with web development questions. Try asking about HTML, CSS, JavaScript, or PHP!");
            break;
    }
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
const textToType = document.getElementById('textToType').innerText;
const userInput = document.getElementById('userInput');
const resultDisplay = document.getElementById('result');
const startButton = document.getElementById('startButton');

let startTime, endTime;

startButton.addEventListener('click', startTest);

function startTest() {
    userInput.value = '';
    userInput.disabled = false;
    resultDisplay.innerText = '';
    startTime = new Date().getTime();
    userInput.focus();
    userInput.addEventListener('input', checkInput);
}

function checkInput() {
    const typedText = userInput.value;

    if (typedText === textToType) {
        endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000; // seconds
        const speed = (textToType.split(' ').length / timeTaken) * 60; // words per minute
        resultDisplay.innerText = `Congratulations! You completed the test in ${timeTaken} seconds. Your typing speed is ${speed.toFixed(2)} WPM.`;
        userInput.disabled = true;
        userInput.removeEventListener('input', checkInput);
    } else if (textToType.startsWith(typedText)) {
        // Allow user to continue typing if the input is correct so far
        resultDisplay.innerText = 'Keep typing...';
    } else {
        // Show error if the input is wrong
        resultDisplay.innerText = 'Incorrect! Please try again.';
    }
}

// Get references to the textarea elements and output iframe
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const outputFrame = document.getElementById('outputFrame');

// Function to update the output iframe
function updateOutput() {
    // Access the contentDocument of the iframe
    const frameDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    // Open the document to write new content
    frameDocument.open();
    frameDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${cssCode.value}</style>
        </head>
        <body>
            ${htmlCode.value}
            <script>${jsCode.value}</script>
        </body>
        </html>
    `);
    // Close the document
    frameDocument.close();
}

// Event listeners to update output on input change
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

// Initialize the output on page load
updateOutput();
// Disable copy action on specific element
document.getElementById('textToType').addEventListener('copy', (e) => {
    e.preventDefault(); // Prevent copying
    alert("Sorry! This text cannot be copied.");
});

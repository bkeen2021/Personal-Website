function toggleMenu() {
    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon"); 
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}



const toggleBtn = document.getElementById('darkModeToggle');
const linkedinToggle = document.getElementById('linkedinToggle');
const linkedinToggle2 = document.getElementById('linkedinToggle2');
const githubToggle = document.getElementById('githubToggle');
const emailToggle = document.getElementById('emailToggle');
const arrowToggle = document.getElementById('arrowToggle');
const arrowToggle2 = document.getElementById('arrowToggle2');
const arrowToggle3 = document.getElementById('arrowToggle3');

// Set image paths
const moonIcon = './assets/moon2.png';
const sunIcon = './assets/sun.png';

//Light mode icons
const linkedinLight = './assets/linkedin.png';
const githubLight = './assets/github.png';
const emailLight = './assets/email.png';
const arrowLight = './assets/arrow.png';

//Dark mode icons
const gitHubDark = './assets/github2.png';
const linkedInDark = './assets/linkedin2.png';
const emailDark = './assets/email2.png';
const arrowDark = './assets/arrow2.png';

//Saves theme on load
window.onload = () => {
  const isDark = localStorage.getItem('dark-mode') === 'enabled';
  if (isDark) {
    document.body.classList.add('dark-mode');
    toggleBtn.src = sunIcon;
  } else {
    toggleBtn.src = moonIcon;
  }
};

toggleBtn.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  //Changes image source based on mode
  toggleBtn.src = isDarkMode ? sunIcon : moonIcon;
  linkedinToggle.src = isDarkMode ? linkedInDark : linkedinLight;
  linkedinToggle2.src = isDarkMode ? linkedInDark : linkedinLight;
  githubToggle.src = isDarkMode ? gitHubDark : githubLight;
  emailToggle.src = isDarkMode ? emailDark : emailLight;
  arrowToggle.src = isDarkMode ? arrowDark : arrowLight;
  arrowToggle2.src = isDarkMode ? arrowDark : arrowLight;
  arrowToggle3.src = isDarkMode ? arrowDark : arrowLight;

  //Saves preference
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});


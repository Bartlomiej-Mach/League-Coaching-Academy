
// discord close / open button function

const openDiscord = document.querySelectorAll('.discord-open');
const closeDiscord = document.querySelector('.discord-card-server-link');
const cardDiscord = document.querySelector('.continue-with-discord');
const closeBtn = document.querySelector('.close-button');

const closeOpen = () => {
    cardDiscord.classList.toggle('continue-with-discord--active');
}


openDiscord.forEach(element => {
    element.addEventListener('click', closeOpen);
});
closeDiscord.addEventListener('click', closeOpen);
closeBtn.addEventListener('click', closeOpen);
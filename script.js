// let names = prompt('What is your name?');
// alert(`Welcome ${names} to S. Abel Haba profolio!!!`)


const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarlinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bar-wrapper');
const progressBarPercents = [91, 96, 57, 72];

window.addEventListener("scroll", () => {
    generalFN();
});

const generalFN = () =>{
    if(window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky')
}else{
    navbar.classList.remove('sticky')
}

sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10){
        navbarlinks.forEach(navbarlink => {
            navbarlink.classList.remove('change');
        })
        navbarlinks[i].classList.add('change');
    }
});

if (window.pageYOffset + window.innerHeight >= progress.offsetTop){
    document.querySelectorAll('.progress-percent').forEach((el, i) =>{
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
    });
}

};

generalFN();

window.addEventListener('resize', () => {
    window.location.reload();
})
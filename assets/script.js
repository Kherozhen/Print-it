
const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
  	{
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Appel des variables //

let compteur =  0 ;

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const buttonPrev = document.querySelector('.arrow_left');
const buttonNext = document.querySelector('.arrow_right');

// Il faut deja mettre la première image //

bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
tagLine.innerHTML = slides[compteur].tagLine;

// Fonction pour changer l'image et la tagline //

function changeImg () {
    bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
    tagLine.innerHTML = slides[compteur].tagLine;
};

//Flèches directionnelles //

    //Précedent//
buttonPrev.addEventListener("click", () => {
    compteur --;
    if (compteur < 0){
        compteur = slides.length-1;
    }
    changeImg ();
    changeDots ();
}) 

    //Suivant//
buttonNext.addEventListener("click", () => {
	compteur ++;
    if (compteur == slides.length){
        compteur = 0;
    }
    changeImg ();
    changeDots ();
})

// Ajout des Dots / Ajout de la fonction dans les flèches directionnelles //

const dots = document.querySelectorAll('dot');

function changeDots () {
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[compteur].classList.add('dot_selected');
}

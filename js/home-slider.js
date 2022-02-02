const homeSlider = {
    // Ce tableau liste toutes les images à afficher dans le slider. Il va servir de source à celui-ci.
    homeSliderImages : [
        'animation-1-resize.png',
        'icon-snowpark-resize.png',
        'icon-materiel-resize.png'
    ],

    homeSliderTexts : [
        'Naviguez sur notre carte, entrez vos critères et découvrez les stations qui vous correspondent.',
        'Découvrez virtuellement la station qui vous correspond, puis réservez vos activités.',
        'Tout est prêt, vous n\'avez plus qu\'à réserver et profiter de la montagne !'
    ],

    init: function() {
        homeSlider.generateSliderImages();

        homeSlider.generateTitle();

        homeSlider.generateParagraph();

        homeSlider.generateButton();

        // je pose un écouteur d'évènement sur mes boutons de slider
        const sliderButtons = document.querySelectorAll('.how-it-works__button');
        for (const button of sliderButtons) {
            button.addEventListener('click', homeSlider.handleClickOnButtons);
        }
    },

    // Fonction qui ajoute dans le DOM toutes les images du slider
    generateSliderImages: function () {

    // On parcourt le tableau des images pour les générer et les insérer dans le DOM.
    for (const currentImage of homeSlider.homeSliderImages) {

        // On crée une nouvelle div avec la fonction createElement et on lui ajoute une classe
        const parentNewDivElement = document.querySelector('.how-it-works');
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('carousel-item');
        parentNewDivElement.append(newDivElement);

        // On crée un nouvel h3 avec la fonction createElement et on lui atribut comme texte la clé de sa valeur
        const newH3Element = document.createElement('h3');
        newH3Element.classList.add('carousel-item__h3');
             
        
        // On crée une nouvelle image avec la fonction createElement. Elle attend le nom d'une balise en argument
        var newImageElement = document.createElement('img');
    
        // On ajoute le chemin vers l'image dans l'attribut src
            newImageElement.src = "../sources/images/" + currentImage;    
            newImageElement.alt = "Etape " + newH3Element.textContent;   

        // On crée un nouveau p avec la fonction createElement et on lui atribut son texte dans le tableau sliderTexts
        var newPElement = document.createElement('p');
        newPElement.classList.add('carousel-item__p');
    
        // On ajoute le nouvel élément directement en début de la balise parente (avant ses autres enfants)
        newDivElement.append(newH3Element);
        newDivElement.append(newImageElement);
        newDivElement.append(newPElement);
        
    }

    // Une fois que toutes les images sont insérées, on veut afficher la première.
    // querySelector renvoie toujours le 1er élément trouvé qui correspond au sélecteur CSS. Donc ici, la première image de notre slider.
    const firstSliderImage = document.querySelector('.carousel-item');

    // On ajoute la classe active à notre image
    firstSliderImage.classList.add('carousel-item--current');
    },

    generateTitle: function() {
        // je récupère mes h3
        const h3Element = document.querySelectorAll('.carousel-item__h3');
        // je vais chercher le numéro de la slide afficher puis j'attribue au bouton son numéro
        for (const i in h3Element) {
            // je lui donne son numéro
            // je commence par transformer i en integer
            const int = parseInt(i)+1;
            h3Element[i].textContent=int;
        }
    },

    generateParagraph: function() {
        // je récupère mes p
        const pElement = document.querySelectorAll('.carousel-item__p');

        for (const i in pElement) {
            pElement[i].textContent=homeSlider.homeSliderTexts[i];
        }
    },

    generateButton: function() {

        // je crée une div
        const divElement = document.createElement('div');
        divElement.classList.add('how-it-works__buttons');

        // je vais chercher le numéro de la slide afficher puis j'attribue au bouton son numéro
        for (const i in homeSlider.homeSliderImages) {
        // je crée un bouton
        const buttonElement = document.createElement('button');
        
        // j'attribue une classe à ce bouton
        buttonElement.classList.add('how-it-works__button');

        // je lui donne son numéro
        // je commence par transformer i en integer
        const int = parseInt(i);
        buttonElement.textContent = int+1;
        divElement.append(buttonElement);
        }

        // je récupère la div parente et je place les boutons dedans
        const parentDivElement = document.querySelector('.how-it-works');
        parentDivElement.append(divElement);

        // par défaut, je vais appliquer également la classe active au premier bouton
        const firstButton = document.querySelector('.how-it-works__button');
        console.log(firstButton);
        firstButton.classList.add('how-it-works__button--active');
    },

    handleClickOnButtons: function(event) {
        event.preventDefault();

        let slideNumber = document.querySelectorAll('.carousel-item');
        let buttonNumber = parseInt(event.currentTarget.textContent);
        const buttons = document.querySelectorAll('.how-it-works__button');
        let currentButton = event.currentTarget;

        // je supprime la classe de tous les boutons et je l'ajoute au bouton actif pour lui donner un style
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('how-it-works__button--active');
        }
        currentButton.classList.add('how-it-works__button--active');

        // je boucle sur toutes les entrées du tableau pour supprimer toutes les classes carousel-item--current déjà existantes
        for (let i = 0; i < slideNumber.length; i++) {
            slideNumber[i].classList.remove('carousel-item--current');
        }

        // je sélectionne ma slide ciblée pour lui donner la classe carousel-item--current
        slideNumber[buttonNumber-1].classList.add('carousel-item--current');
    },
}
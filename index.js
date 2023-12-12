import content from './content.js';
import './styles.css';
import image from './restaurant-icon-dinner-vector-39668275.jpg';

function component() {
    const mainContent = document.querySelector('#content');
    let heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerText = content();
    mainContent.appendChild(heading);

    const myImage = new Image();
    myImage.src = image;
    mainContent.appendChild(myImage);
}

component();

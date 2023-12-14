import whiskeySour from './whiskey-sour.jpg';
import soPicante from './so-picante.jpg';
import mutterPaneerSeekh from './mutter-paneer-seekh.jpg';
import murghSigriTikka from './murgh-sigri-tikka.jpg';
import murghGilafiSeekhKebab from './murgh-gilafi-seekh-kebab.jpg';
import masalaChaiSour from './masala-chai-sour.jpg';
import gulmoharKakoriSeekh from './gulmohar-kakori-seekh.jpg';
import choleHummus from './chole-hummus.jpg';
import bloom from './bloom.jpg';



export default function menuPage() {
    const content = document.querySelector('#content');
    const menuItem = [
        {
            img: whiskeySour,
            name: 'Whiskey Sour'
        },
        {
            img: soPicante,
            name: 'So Picante'
        },
        {
            img: masalaChaiSour,
            name: 'Masala Chai Sour'
        },
        {
            img: bloom,
            name: 'Bloom'
        },
        {
            img: gulmoharKakoriSeekh,
            name: 'Gulmohar Kakori Seekh'
        },
        {
            img: mutterPaneerSeekh,
            name: 'Mutter Paneer Seekh'
        },
        {
            img: murghGilafiSeekhKebab,
            name: 'Murgh Gilafi Seekh Kebab'
        },
        {
            img: murghSigriTikka,
            name: 'Murgh Sigri Tikka'
        }
    ]

    const menu = document.createElement('div');
    menu.classList.add('menu');
    for (let i = 0; i < 8; i++) {
        let menuDish = document.createElement('div');
        menuDish.classList.add('menuDish');
        
        let dishImage = new Image();
        dishImage.src = menuItem[i].img;
        dishImage.classList.add('dishImage');

        let dishName = document.createElement('p');
        dishName.classList.add('dishName');
        dishName.innerText = menuItem[i].name;

        menuDish.appendChild(dishImage);
        menuDish.appendChild(dishName);
        menu.appendChild(menuDish);
        content.appendChild(menu);
    }
}

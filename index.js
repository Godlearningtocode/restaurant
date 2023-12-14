import css from './styles.css';
import homePage from './content.js';
import menuPage from './menu.js';

const header = document.querySelector('#header');

const heading = document.createElement('div');
heading.classList.add('header')
heading.textContent = 'Gulmohar | Bar & Curryhouse'

const intro = document.createElement('div');
intro.classList.add('intro');
intro.textContent = 'Gulmohar | Bar & Curryhouse is a haven for slow living; tucked in the heart of Baner, Gulmohar is a place that makes you feel close to nature and allows you to take a moment to slow down. Providing the best of both worlds with indoor seating as well as a beautifull backyard setting that will make you forget all about the stress and provide comfort that comes with easy living!';

header.appendChild(heading);
header.appendChild(intro);
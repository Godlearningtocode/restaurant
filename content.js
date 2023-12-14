export default function homePage() {
    const content = document.querySelector('#content');
    let home = document.createElement('div');
    let heading = document.createElement('div');
    heading.innerText = 'Gulmohar | Bar & Curryhouse';
    home.appendChild(heading);
    content.appendChild(home);

    let intro = document.createElement('div');
    intro.innerText = 'Gulmohar | Bar & Curryhouse is a haven for slow living; tucked in the heart of Baner Gulmohar is a place that makes you feel close to nature and allows you to take a moment to slow down. Providing the best of both worlds with indoor seating as well as a beautifull backyard setting that will make you forget all about the stress and provide comfort that comes with easy living!';
    content.appendChild(intro);
}
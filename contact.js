import location from './mapLocationGulmohar.png'

export default function contactPage() {
    const content = document.querySelector('#content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contactHeader');
    contactHeader.innerText = 'Begonia Hospitality LLP';
    
    const address = document.createElement('div');
    address.classList.add('address');
    address.innerText = 'The Gulmohar | Bar & Curryhouse, Kapil Malhar, Baner, Pune, Maharashtra, India';

    const contactNumber = document.createElement('div');
    contactNumber.classList.add('contactNumber');
    
    const manager = document.createElement('div');
    manager.classList.add('manager');
    manager.innerText = 'Manager: +91839050XXXX'

    const assistantManager = document.createElement('div');
    assistantManager.classList.add('assistantManager');
    assistantManager.innerText = 'Assistant Manager: +91911219XXXX';

    const mapLocation = new Image();
    mapLocation.src = location;
    mapLocation.classList.add('location');


    contactNumber.appendChild(manager);
    contactNumber.appendChild(assistantManager);
    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(address);
    contactContainer.appendChild(contactNumber);
    contactContainer.appendChild(mapLocation);
    content.appendChild(contactContainer);
}
const items = document.querySelectorAll('.items img');
const transport = document.querySelector('.item-in');
const boat = document.querySelector('.boat');
let selected = null;

items.forEach(item => {
    item.addEventListener('click', () => {
        if (selected === item) {
            if (transport.contains(item)) {
                transport.removeChild(item);
                document.querySelector('.items').appendChild(item);
            }
            selected = null;
            return;
        }

        if (selected !== null) {
            return;
        }

        transport.appendChild(item);
        selected = item;
    });
});

// Movement
boat.addEventListener('click', () => {
    if (boat.classList.contains('move-boat')) {
        boat.classList.remove('move-boat');
        boat.classList.add('move-reverse-boat');
        transport.classList.remove('move-item');
        transport.classList.add('move-reverse-item');
    } else {
        boat.classList.remove('move-reverse-boat');
        boat.classList.add('move-boat');
        transport.classList.remove('move-reverse-item');
        transport.classList.add('move-item');
    }
});

// left side
const itemInImg = document.querySelector('.item-in img');
const div3 = document.querySelector('#div3');

setInterval(() => {
    const itemInImg = document.querySelector('.item-in img');
    if (itemInImg) {
        itemInImg.addEventListener('click', () => {
            if (boat.classList.contains('move-boat')) {
                div3.appendChild(itemInImg);
            }
        });
    }
}, 1000);

div3.addEventListener('click', (event) => {
    const image = event.target.closest('img');
    if (image && boat.classList.contains('move-boat')) {
        transport.appendChild(image);
    }
});
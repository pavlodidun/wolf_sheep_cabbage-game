const modal = document.querySelector('.modal');
const modalWin = document.querySelector('.modal-win');
const closeBtn = document.querySelector('.close');
const closeBtnWin = document.querySelector('#closeBtn');

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
        const itemsOnRightSide = document.querySelectorAll('.items img');
        const wolfOnRight = Array.from(itemsOnRightSide).find(item => item.classList.contains('wolf'));
        const sheepOnRight = Array.from(itemsOnRightSide).find(item => item.classList.contains('sheep'));
        const cabbageOnRight = Array.from(itemsOnRightSide).find(item => item.classList.contains('cabbage'));
        if ((wolfOnRight && sheepOnRight) || (sheepOnRight && cabbageOnRight)) {
            console.log("GAME OVER");
            modal.style.display = 'block';
            return;
        }
        boat.classList.remove('move-boat');
        boat.classList.add('move-reverse-boat');
        transport.classList.remove('move-item');
        transport.classList.add('move-reverse-item');
    } else {
        const itemsOnLeftSide = document.querySelectorAll('.left-side-items img');
        const wolfOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('wolf'));
        const sheepOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('sheep'));
        const cabbageOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('cabbage'));
        if ((wolfOnLeft && sheepOnLeft) || (sheepOnLeft && cabbageOnLeft)) {
            console.log("GAME OVER BOY");
            modal.style.display = 'block';
            return;
        }
        boat.classList.remove('move-reverse-boat');
        boat.classList.add('move-boat');
        transport.classList.remove('move-reverse-item');
        transport.classList.add('move-item');
    }
});

function checkWin() {
    const itemsOnLeftSide = document.querySelectorAll('.left-side-items img');
    const wolfOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('wolf'));
    const sheepOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('sheep'));
    const cabbageOnLeft = Array.from(itemsOnLeftSide).find(item => item.classList.contains('cabbage'));
    if (wolfOnLeft && sheepOnLeft && cabbageOnLeft) {
        console.log("WIN");
        modalWin.style.display = 'block';
    }
}

setInterval(checkWin, 2000);

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

// Modal
function reloadPage() {
    location.reload();
}

closeBtn.addEventListener('click', reloadPage);
closeBtnWin.addEventListener('click', reloadPage);
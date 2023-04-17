const message = document.querySelector('.container-game__selector-message');
const selectTransport = document.querySelectorAll('.container-game__selector img');
const button = document.querySelector('.start');
const element = document.querySelector('.container-game__selector');
const gamepad = document.querySelector('.container-game__gamepad');


function checkActiveTransport() {
    let isActiveTransport = false;
    selectTransport.forEach(function (transportAdd) {
        if (transportAdd.classList.contains('active')) {
            isActiveTransport = true;
        }
    });
    return isActiveTransport;
}

button.addEventListener('click', handleButtonClick);

selectTransport.forEach(function (transportAdd) {
    transportAdd.addEventListener('click', function () {
        selectTransport.forEach(function (transportRemove) {
            transportRemove.classList.remove('active');
            transportRemove.classList.add('inactive');
        });
        transportAdd.classList.add('active');
        transportAdd.classList.remove('inactive');
    });
});

function handleButtonClick() {
    if (checkActiveTransport()) {
        element.classList.add('swith-off');
        button.classList.add('swith-off');
        gamepad.classList.add('swith-on');
    } else {
        message.style.display = 'block';
    }
}
// Timer
// function getActiveTransport() {
//     let activeTransport = '';
//     selectTransport.forEach(function (transportAdd) {
//         if (transportAdd.classList.contains('active')) {
//             activeTransport = transportAdd.alt;
//         }
//     });
//     return activeTransport;
// }

// function handleButtonClick() {
//     const activeTransport = getActiveTransport();
//     if (activeTransport !== '') {
//         element.classList.add('swith-off');
//         gamepad.classList.add('swith-on');

//         if (activeTransport === 'Airship') {
//             document.querySelector('.container-game__airship').classList.add('selected-airship');
//         } else if (activeTransport === 'Boat') {
//             document.querySelector('.container-game__boat').classList.add('selected-boat');
//         }
//     } else {
//         message.style.display = 'block';
//     }
// }

// Animation
// const myDiv = document.getElementById('boat-block');
// // myDiv.addEventListener('click', () => {
// //     myDiv.classList.add('myAnimation');
// // });

// myDiv.addEventListener('click', () => {
//     if (myDiv.classList.contains('myAnimation')) {
//         myDiv.classList.remove('myAnimation');
//     } else {
//         myDiv.classList.add('myAnimation');
//     }
// });

const myDiv = document.getElementById('boat-block');

myDiv.addEventListener('click', () => {
    if (myDiv.classList.contains('myAnimation')) {
        myDiv.classList.remove('myAnimation');
        myDiv.classList.add('myReverseAnimation');
    } else {
        myDiv.classList.remove('myReverseAnimation');
        myDiv.classList.add('myAnimation');
    }
});

// Coordinates
document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Clicked at (${x}, ${y})`);
});
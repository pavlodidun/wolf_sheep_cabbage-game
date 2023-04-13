const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

const link = document.querySelector('span');
link.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'; 
});
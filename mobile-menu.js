const menuButton = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.wrapper-buttons');

menuButton.addEventListener('click', function() {
    if (menuContent.style.display === 'none') {
        menuContent.style.display = 'block';
        menuButton.style.textDecoration = 'line-through';
    } else {
        menuContent.style.display = 'none';
        menuButton.style.textDecoration = 'initial';
    }
});
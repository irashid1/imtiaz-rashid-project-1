const targetElement = document.querySelector('.hamburger-menu');
console.log(targetElement);

targetElement.addEventListener('click', function (event) {
    console.log(event);
    if (event.target.tagName === 'I') {
        updateNavBar(event.target);
    }
});

 function updateNavBar() {
//     iElement.classList.toggle('fa-square');
//     iElement.classList.toggle('fa-check-square');
//     iElement.parentElement.classList.toggle('text-muted');
}
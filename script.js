const targetElement = document.querySelector('hamburger-menu');

targetElement.addEventListener('click', function (event) {
    console.log(event);
    if (event.target.tagName === 'I') {
        // console.log(event.target);
        updateToDo(event.target);
    }
});

function updateToDo(iElement) {
    iElement.classList.toggle('fa-square');
    iElement.classList.toggle('fa-check-square');
    iElement.parentElement.classList.toggle('text-muted');
}
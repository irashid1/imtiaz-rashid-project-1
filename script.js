const hamburgerMenuIcon = document.querySelector('.hamburger-menu');
hamburgerMenuIcon.addEventListener('click', toggleMenuVisibility);

function toggleMenuVisibility(event) {
    if (event.target.tagName === 'I') {
        const hamburgerMenuNav = document.querySelector('.hamburger-menu-nav');
        let menuVisibility = hamburgerMenuNav.style.display;
        if (menuVisibility == "none" || menuVisibility == "") {
            showMenu(hamburgerMenuNav);
        } else {
            hideMenu(hamburgerMenuNav);
        }
    }
}

function showMenu(menu) {
    menu.style.display = "block";
}

function hideMenu(menu) {
    menu.style.display = "none";
}

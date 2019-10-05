window.addEventListener("scroll", fixedMenu);

function fixedMenu() {
    const menu = document.getElementById('menu');
    const header = document.getElementById('header');
    const arlina = document.getElementById('arlina');

    if (window.pageYOffset  > (header.offsetHeight + arlina.offsetTop)) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
}
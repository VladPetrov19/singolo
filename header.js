const toggleNav = () => {
    const openMenuBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const logo = document.querySelector('.logo')

    openMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav__list--active');
        logo.classList.toggle('logo__off');
    });
}

toggleNav();
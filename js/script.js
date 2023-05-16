document.addEventListener('DOMContentLoaded', () => {
        const headerLogin = document.querySelector('.header-login'),
        modal = document.querySelector('.modal-wrapper'),
        modalButtonExit = document.querySelector('.button-modal-exit'),
        header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-active');
        } else { header.classList.remove('header-active'); }
    };

    headerLogin.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalButtonExit.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

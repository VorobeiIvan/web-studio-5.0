import { disableScroll, enableScroll } from './scrollLock';

export function toggleModal(modalId, openBtnSelector, closeBtnSelector) {
    const modal = document.getElementById(modalId);
    const closeBtn = document.querySelector(closeBtnSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const links = modal.querySelectorAll('a'); 

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('is-open');
            disableScroll();
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('is-open');
            enableScroll();
        });

        // Додаємо слухач для закриття модалки при натисканні на будь-яке посилання
        links.forEach(link => {
            link.addEventListener('click', () => {
                modal.classList.remove('is-open');
                enableScroll();
            });
        });

        // Закрити модалку при натисканні поза її межами
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('is-open');
                enableScroll();
            }
        });

        // Закрити модалку при натисканні клавіші Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('is-open')) {
                modal.classList.remove('is-open');
                enableScroll();
            }
        });
    }
}

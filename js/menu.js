const MENU_STATUS = Object.freeze({
    OPENED: 'opened',
    CLOSED: 'closed',
});


(() => {
    const menu = document.querySelector('[data-menu]');
    const menuButton = document.querySelector('[data-menu-toggle]');

    if (!menu || !menuButton) {
        return;
    }

    const getMenuStatus = () => menu.dataset.status;

    const setMenuStatus = (status) => menu.dataset.status = status;

    const isOpened = () => getMenuStatus() === MENU_STATUS.OPENED;

    const openMenu = () => setMenuStatus(MENU_STATUS.OPENED);

    const closeMenu = () => setMenuStatus(MENU_STATUS.CLOSED);

    const toggleMenu = () => isOpened() ? closeMenu() : openMenu();

    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });
    document.addEventListener('click', () => {
        if (isOpened()) {
            closeMenu();
        } 
    });

    closeMenu();
})();

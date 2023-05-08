(() => {
    setUpPopup('registration', () => alert("Вы успешно зарегистрировались!"));
    setUpPopup('login', () => alert("Вы успешно вошли!"));
})();


function setUpPopup(name, onSubmit=()=>{}) {
    const dialog = document.querySelector(`[data-${name}]`);
    const form = dialog?.querySelector('form');
    const dialogOpenBtn = Array.from(document.querySelectorAll(`[data-${name}-open]`));
    const dialogCloseBtn = Array.from(document.querySelectorAll(`[data-${name}-close]`));

    if (!dialog || !form) {
        return;
    }

    const openWindow = () => dialog.showModal();

    const closeWindow = () => dialog.close();

    dialog.addEventListener("click", event => {
        const rect = dialog.getBoundingClientRect();
        if (event.clientY < rect.top || event.clientY > rect.bottom ||
            event.clientX < rect.left || event.clientX > rect.right) {
            closeWindow();
        }
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        closeWindow();
        form.reset();
        onSubmit();
    });
    dialogOpenBtn.map(el => el.addEventListener('click', openWindow));
    dialogCloseBtn.map(el => el.addEventListener('click', closeWindow));
}





function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
    const collapseEl = document.getElementById('details1');
    const cardEl = collapseEl.closest('.custom-expand-card');

    collapseEl.addEventListener('show.bs.collapse', () => {
        cardEl.classList.add('expanded');
    });

    collapseEl.addEventListener('hide.bs.collapse', () => {
        cardEl.classList.remove('expanded');
    });

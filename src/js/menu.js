let openMenu = document.querySelector('.toggle-menu');
let menu = document.querySelector('.menu');
let content = document.querySelector('.content');

content.addEventListener('click', (e) => {
  if(window.innerWidth < 880) {
    let menuBtnId = e.target.id;
    let hasClass = e.target.classList.contains('toggle-menu--active');

    if (menuBtnId === 'toggle-menu' && !hasClass) {
      menu.style.marginLeft = '0';
      openMenu.classList.add('toggle-menu--active');
    } else {
      menu.style.marginLeft = '-70px';
      openMenu.classList.remove('toggle-menu--active');
    }
  }
});


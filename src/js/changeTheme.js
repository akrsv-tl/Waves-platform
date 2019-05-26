const body = document.querySelector('body');
const images = document.querySelectorAll('img');
const changeTheme = document.querySelector('#change-theme');

changeTheme.onclick = function() {
  body.classList.toggle('invert');
  const hasClass = body.classList.contains('invert');
  let invert = '';

  if (hasClass) {
    invert = 'invert(100%)';
  } else {
    invert = 'invert(0%)';
  }

  body.style.filter = invert;
  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = invert;
  }
};
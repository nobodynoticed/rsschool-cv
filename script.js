const btn = document.querySelector('.btn');
const nav = document.querySelector('.aside-burger__nav');
const burgerLinks = document.querySelectorAll('.aside-burger__link');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('active');

  if (btn.classList.contains('active')) {
    btn.textContent = '❎';
    btn.style.transition = 'transform 0.3s ease-in-out';
  } else {
    btn.textContent = '☰';
  }

  burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      nav.classList.remove('active');
      btn.textContent = '☰';
    });
  });
});

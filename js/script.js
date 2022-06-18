const menuHamburger = document.querySelector('.icon-mobile');
const navigation = document.querySelector('.nav');
const links = document.querySelectorAll("a[href ^= '#']");
const openOrCloseMenu = function () {
  menuHamburger.classList.toggle('active');
  navigation.classList.toggle('active');
};
const smoothScrollEffect = function (event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const section = document.querySelector(target);
  const offset = section.offsetTop;
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
};
const changeColorIconScrollTop = function () {
  const iconScrollTop = document.querySelector('.bx-up-arrow-circle');
  if (window.scrollY > 2695) iconScrollTop.style.color = 'var(--c1)';
  if (window.scrollY < 2695) iconScrollTop.style.color = 'var(--c3)';
};

/* Open and close menu mobile */
menuHamburger.addEventListener('click', openOrCloseMenu);

/* Smooth scroll */
links.forEach(function (link) {
  link.addEventListener('click', smoothScrollEffect);
});

/* Change color icon scroll top  */
document.addEventListener('scroll', changeColorIconScrollTop);

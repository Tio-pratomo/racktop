/* 
    MEMANGGIL FUNGSI ACCORDION
*/
import * as misc from './misc.js';
misc.accordionUtils(
    document.querySelectorAll('.faq__container__btn'),
    document.querySelectorAll('.faq__container__accordion'),
    document.querySelectorAll('.faq__container__btn i')
);

/* 
    MEMANGGIL FUNGSI YEAR
    UNTUK COPY RIGHT
*/
misc.copyright(document.querySelector('.closing__item__copyright--year'));

const toggleMenuNav = document.querySelector('.menu-burger');
toggleMenuNav.addEventListener('click', function () {
    this.classList.toggle('menu-active');
    misc.toggleNav(document.querySelector('.main-nav'));
});

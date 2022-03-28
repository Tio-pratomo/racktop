/* 
    BUAT FUNGSI PADA BAGIAN TOMBOL DI FAQ
    JIKA TOMBOL DI KLIK PENJELASANNYA MUNCUL 
*/
const accordionUtils = (elements, toggleEl, icons) => {
    elements.forEach((element) => {
        element.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('active-accordion');
        });
    });
};

/* 
    FUNGSI UNTUK MEMBUAT
    TAHUN UNTUK COPY RIGHT
*/
const copyright = (element) => {
    const year = new Date().getFullYear();
    element.innerText = year;
};

/* 
    FUNGSI UNTUK TOOGLE NAV
    SAAT DI KLIK NAVIGASINYA MUNCUL,
    DIKLIK LAGI HIDE
*/
const toggleNav = (element) => {
    element.classList.toggle('active-nav');
};

export { accordionUtils, copyright, toggleNav };

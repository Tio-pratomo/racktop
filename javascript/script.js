$(document).ready(function () {
    $('.icon').click(function () {
        $('.navbar').slideToggle(1000);
    });

    $('.navbar li:nth-child(3)').click(function () {
        $('.modal').slideDown(500);
    });

    $('.close').click(function () {
        $('.modal').hide('fast');
    });

    $('.modal').click(function () {
        $(this).hide('fast');
    });
});
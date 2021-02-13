$(document).ready(function () {
    $('.icon').click(function () {
        $('.navbar').slideToggle(700);
    });

    $('.navbar li:nth-child(3)').click(function () {
        $('.modal').slideDown(500);
    });

    $('.close').click(function () {
        $('.modal').hide('fast');
    });

    const products = [
        $('.product-content1'),
        $('.product-content2'),
        $('.product-content3'),
        $('.product-content4'),
    ];
    products.forEach(function (product) {
        $(product).hover(
            function () {
                $(this).css({
                    transform: 'scale(1.1)',
                });
            },
            function () {
                $(this).css({
                    transform: 'none',
                });
            }
        );
    });

    const years = new Date();
    $('.copyright span').text(years.getFullYear());
});

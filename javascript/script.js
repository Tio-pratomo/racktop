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

    const products = [$('.product-content1'), $('.product-content2'), $('.product-content3'), $('.product-content4')];

    products.forEach(function (product) {
        $(product).hover(function () {
            $(this).css({
                'transform': 'scale(1.1)'
            });
        }, function () {
            $(this).css({
                'transform': 'none'
            });
        });
    });

    products[0].click(function () {
        $('.mod-img-1').show(400);
    });

    products[1].click(function () {
        $('.mod-img-2').show(400);
    });

    products[2].click(function () {
        $('.mod-img-3').show(400);
    });

    products[3].click(function () {
        $('.mod-img-4').show(400);
    });

    $('.close-modal-image').click(function () {
        $('.mod-img-1').hide(400);
    });

    $('.close-modal-image').click(function () {
        $('.mod-img-2').hide(400);
    });

    $('.close-modal-image').click(function () {
        $('.mod-img-3').hide(400);
    });

    $('.close-modal-image').click(function () {
        $('.mod-img-4').hide(400);
    });
});
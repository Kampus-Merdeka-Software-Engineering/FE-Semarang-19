// menu

const tombolMenu = $(".tombol-menu");
const menu = $("nav .menu ul");

function klikMenu(params) {
    tombolMenu.click(function (params) {
        menu.toggle();
    });
    menu.click(function (params) {
        menu.toggle();
    });
}
$(document).ready(function(params) {
    let width = $(window).width();
    if (width < 999) {
        klikMenu();
    }
});

// check lebar
$(window).resize(function (params) {
    let width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
    }else{
        menu.css("display", "none");
    }
    klikMenu();
});

// efek scrol
$(document).ready(function(params) {
    let scroll_pos = 0;
    $(document).scroll(function(params) {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.black").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.black").hide();
            $("nav img.putih").show();
        }
    })
});
// efek scrol
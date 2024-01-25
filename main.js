$(function(){
    const menu_btn = document.querySelector(".hamburger");
    
    $(".hamburger").on('click', function(event) {
        $(".hamburger").toggleClass('is-active');
        $(".mobile-nav").toggleClass('is-active');
    });
});

function scrollDown(className) {
    const about_page = document.querySelector(className);
    about_page.scrollIntoView();

}

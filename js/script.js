$(function () {
    const animationSpeed = 500;
    $('.title').click(function (event) {
        const element = $(event.currentTarget);
        const content = element.next('.content');
        if(content.css('display') == 'none'){
            content.slideDown(animationSpeed);
            element.addClass('titleShow');
        }else{
            content.slideUp(animationSpeed);
            element.removeClass('titleShow');
        }
    });
})
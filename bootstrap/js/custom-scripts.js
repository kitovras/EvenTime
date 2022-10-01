$(document ).ready(function() {
    $("#moveUp").hide();
});

//Отслеживаем скрол и отображаем 
//кнопку навигации по условию
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if(scrollTop >= 500){
        $('#moveUp').fadeIn();
    }
    else {
        $('#moveUp').fadeOut();
    }
});

//Сбрасываем скрол при нажатии на кнопку
$("#moveUp a").click(function () {
    var button = $(this).attr("href");
    var destination = $(button).offset().top;

    $('html').animate({ scrollTop: destination}, 100);
});

function cardDetailsVisible(isCardDetailsVisible){
    var cardDetails = $("#cardDetails");
    var content = $("#content");

    if(!isCardDetailsVisible){
        cardDetails.hide();
        content.show();
        return;
    }

    cardDetails.show();
    content.hide();
}
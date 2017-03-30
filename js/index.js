$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8'],
        'navigation': false,
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
        'loopTop': false,
        'loopBottom': true,
        'fitToSection': true,
        paddingTop: '50px',
        'animateAnchor': true,
        'slidesNavPosition': top
    });
});

//手风琴
$(".accordionList li").mouseover(function(){
    $(".accordionList li").each(function(){
        $(this).stop().animate({
            'width':100
        });
    });
    $(this).stop().animate({
        'width':800
    });
});

$(".accordionList li").mouseout(function(){
    $(".accordionList li").each(function(){
        $(this).stop().animate({
            'width':240
        });
    });

});

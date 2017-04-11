$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['home', 'overview', 'suit', 'career','course','actual','works','contact'],
        'navigation': false,
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
        'loopTop': false,
        'loopBottom': false,
        'fitToSection': true,
        paddingTop: '50px',
        'animateAnchor': true,
        'slidesNavPosition': top,
        menu: '#menu',
        //滚动到某一屏后的回调函数
        afterLoad: function(anchorLink, index){
            //咨询菜单的回到顶部按钮
            if(index == 1){
                $('#toTop').hide();
            }else{
                $('#toTop').show();
            }

            if(index == 1){   //首页屏
                //互联网
                $('.con').find('.hd1').delay(500).css({
                    left:'-2200px',
                    display:'block'
                }).animate({
                    left: '0'
                }, 1000, 'easeOutExpo');
                //大趋势
                $('.con').find('.hd2').delay(500).css({
                    right:'-2200px',
                    display:'block'
                }).animate({
                    right: '160px'
                }, 1000, 'easeOutExpo');
                //火箭
                $('.ban').find('.banImg').delay(500).css({
                    top:'2200px',
                    display:'block'
                }).animate({
                    top: '0'
                }, 1000, 'easeOutExpo');
            }
            if(index == 2){
                $('.boxName2').find('h2').delay(200).css({
                    display:'block'
                }).animate({
                   top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==3){
                $('.boxName3').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==4){
                $('.boxName4').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==5){//课程
                //公共title
                $('.boxName5').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
                //区块儿
                $('.course_li_1').delay(100).css({
                    top:'-800px',
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
                $('.course_li_2').delay(300).css({
                    top:'-800px',
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
                $('.course_li_3').delay(500).css({
                    top:'-800px',
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
                $('.course_li_4').delay(700).css({
                    top:'-800px',
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
                $('.course_li_5').delay(900).css({
                    top:'-800px',
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==6){
                $('.boxName6').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==7){
                $('.boxName7').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
            if(index ==8){
                $('.boxName8').find('h2').delay(100).css({
                    display:'block'
                }).animate({
                    top:'0'
                }, 1000, 'easeOutExpo');
            }
        },
        onLeave: function(index, direction){
            if(index == 5){
                $('.course_li_1').delay(1500).css({
                    display:'none'
                });
                $('.course_li_2').delay(1500).css({
                    display:'none'
                });
                $('.course_li_3').delay(1500).css({
                    display:'none'
                });
                $('.course_li_4').delay(1500).css({
                    display:'none'
                });
                $('.course_li_5').delay(1500).css({
                    display:'none'
                });
            }
        }
    });
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 1500);
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



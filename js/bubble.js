/**
 * Created by water on 2017/4/20.
 */
//canvas气泡效果
var canvas=document.getElementById("bubble");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight+400;
var context=canvas.getContext('2d');
var balls=[];
var colors=['#69D2E7','#A7DBD8','#E0E4CC','#F38630','#FA6900','#FF4E50','#F9D423'];
var timer;

/*
 * 一个圆
 * 	1、半径不同
 * 	2、颜色不同
 * 	3、位置不同
 * 	4、速度不同
 *
 * var ball={
 *	x:x轴的位置,
 * 	y:y轴的位置,
 * 	r:圆的半径,
 * 	vx:x轴的速度,
 * 	vy:y轴的速度,
 * 	color:颜色
 * }
 *
 * 角度转弧度
 * 		角度*π/180
 * 		360*π/180
 */

//在canvas上画圆
function draw(ball){
    context.beginPath();		//开始的路径
    //arc(x轴位置,y轴位置,半径,起始弧度,结束弧度)
    context.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
    context.fillStyle=ball.corlor;	//给圆填充颜色
    context.globalCompositeOperation='lighter';		//合成
    context.fill();
}

//取x到y之间随机数：Math.round(Math.random()*(y-x)+x)
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//给canvas添加移动事件
var on=true;		//用来让鼠标移动的时候定时器也可以跑
//canvas.onmousemove=function(ev){
canvas.addEventListener("touchmove", bubble, false);
function bubble(ev){
    //在移动的时候创建两个圆就够了
    for(var i=0;i<2;i++){
        var ball={
            x:random(-5,5)+ev.clientX,
            y:random(-5,5)+ev.clientY+window.pageYOffset,
            r:random(10,45),
            vx:Math.random()-0.5,
            vy:Math.random()-0.5,
            corlor:colors[random(0,colors.length-1)]
        };

        balls.push(ball);
        if(balls.length>300){
            balls.shift();
        }
    }

    //让定时器只开启一次
    if(on){
        clearInterval(timer);
        timer=setInterval(drallBall,30);
        on=false;
    }


    function drallBall(){
        context.clearRect(0,0,canvas.width,canvas.height);

        for(var i=0;i<balls.length;i++){
            //需要在画的时候把球的位置还有半径都改了，这样的话看上去球才会动
            balls[i].x+=balls[i].vx*8;		//通过速度改变x轴的位置
            balls[i].y+=balls[i].vy*8;		//通过速度改变y轴的位置
            balls[i].r=balls[i].r*0.94;		//改变球的半径

            balls[i].index=i;		//添加这个索引为了在下面能够找到它并删除

            //如果小球的半径小于1的话，就不让canvas再画它了
            if(balls[i].r<1){
                balls.splice(balls[i].index,1);
                continue;		//如果小球已经被删了，下面的代码就不用再走了
            }
            draw(balls[i]);
            //如果balls的数组里已经没有东西了，就把定时器清除掉
            if(!balls.length){
                clearInterval(timer);
                on=true;		//让on的值与定时器保持一致
            }
        }
    }
}

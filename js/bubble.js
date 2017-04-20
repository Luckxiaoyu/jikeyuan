/**
 * Created by water on 2017/4/20.
 */
//canvas����Ч��
var canvas=document.getElementById("bubble");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight+400;
var context=canvas.getContext('2d');
var balls=[];
var colors=['#69D2E7','#A7DBD8','#E0E4CC','#F38630','#FA6900','#FF4E50','#F9D423'];
var timer;

/*
 * һ��Բ
 * 	1���뾶��ͬ
 * 	2����ɫ��ͬ
 * 	3��λ�ò�ͬ
 * 	4���ٶȲ�ͬ
 *
 * var ball={
 *	x:x���λ��,
 * 	y:y���λ��,
 * 	r:Բ�İ뾶,
 * 	vx:x����ٶ�,
 * 	vy:y����ٶ�,
 * 	color:��ɫ
 * }
 *
 * �Ƕ�ת����
 * 		�Ƕ�*��/180
 * 		360*��/180
 */

//��canvas�ϻ�Բ
function draw(ball){
    context.beginPath();		//��ʼ��·��
    //arc(x��λ��,y��λ��,�뾶,��ʼ����,��������)
    context.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
    context.fillStyle=ball.corlor;	//��Բ�����ɫ
    context.globalCompositeOperation='lighter';		//�ϳ�
    context.fill();
}

//ȡx��y֮���������Math.round(Math.random()*(y-x)+x)
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//��canvas����ƶ��¼�
var on=true;		//����������ƶ���ʱ��ʱ��Ҳ������
//canvas.onmousemove=function(ev){
canvas.addEventListener("touchmove", bubble, false);
function bubble(ev){
    //���ƶ���ʱ�򴴽�����Բ�͹���
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

    //�ö�ʱ��ֻ����һ��
    if(on){
        clearInterval(timer);
        timer=setInterval(drallBall,30);
        on=false;
    }


    function drallBall(){
        context.clearRect(0,0,canvas.width,canvas.height);

        for(var i=0;i<balls.length;i++){
            //��Ҫ�ڻ���ʱ������λ�û��а뾶�����ˣ������Ļ�����ȥ��Żᶯ
            balls[i].x+=balls[i].vx*8;		//ͨ���ٶȸı�x���λ��
            balls[i].y+=balls[i].vy*8;		//ͨ���ٶȸı�y���λ��
            balls[i].r=balls[i].r*0.94;		//�ı���İ뾶

            balls[i].index=i;		//����������Ϊ���������ܹ��ҵ�����ɾ��

            //���С��İ뾶С��1�Ļ����Ͳ���canvas�ٻ�����
            if(balls[i].r<1){
                balls.splice(balls[i].index,1);
                continue;		//���С���Ѿ���ɾ�ˣ�����Ĵ���Ͳ���������
            }
            draw(balls[i]);
            //���balls���������Ѿ�û�ж����ˣ��ͰѶ�ʱ�������
            if(!balls.length){
                clearInterval(timer);
                on=true;		//��on��ֵ�붨ʱ������һ��
            }
        }
    }
}

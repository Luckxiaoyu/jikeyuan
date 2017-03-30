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
var myChart = echarts.init(document.getElementById('main'));

var itemStyle = {
    normal: {
        opacity: 0.7,
        color:'#007FFF',
        borderWidth: 2,
        borderColor: '#235894'
    }
};
option = {
    backgroundColor:'#FFF45C',
    title: {
        textStyle: {
            color: '#235894'
        }
    },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            normal: {
                textStyle: {
                    fontSize: 18,
                    color: '#235894'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#235894'
                }
            }
        },
        data:[
            {value:2, name:'4.5k-6k'},
            {value:7.7, name:'6k-8k'},
            {value:12.2, name:'8k-10k'},
            {value:35.7, name:'10k-15k'},
            {value:25.1, name:'15k-20k'},
            {value:15.3 ,name:'20k-30k'},
            {value:2 ,name:'30k-50k'}
        ],
        itemStyle: itemStyle
    }]
};
myChart.setOption(option);

(function(){
    //创建舞台
    var stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
    });

    //舞台中心，也是旋转的中心
    var groupX = stage.width() / 2,
        groupY = stage.height() / 2,
        L3_Radius = 217,
        L2_Radius = 125,
        L1_Radius = 90,
        L0_Radius = 66;


    //背景层
    var bgLayer = new Konva.Layer({
        hitGraphEnabled : false//don’t need event on layer set
    });
    //绘制背景圆形 3环
    var circle_L3 = new Konva.Circle({
        x: groupX,
        y: groupY,
        radius: L3_Radius,
        stroke: '#a0a0a0',
        stokeWidth: 2,
        opacity: .3,
        dash: [10,4]
    });
    bgLayer.add(circle_L3);

    //绘制背景圆形 2环
    var circle_L2 = new Konva.Circle({
        x: groupX,
        y: groupY,
        radius: L2_Radius,
        stroke: '#2A3466',
        stokeWidth: 2,
        opacity: .3,
        dash: [10,4]
    });
    bgLayer.add(circle_L2);

    //绘制背景中心区域
    var cneterCircleText = new CircleText({
        text: "WEB全栈",
        innerRadius: L0_Radius,
        outerRadius: L1_Radius,
        fontSize: 17,
        fontFamily: '微软雅黑',
        fontFill: "#fff",
        fontX: -41,
        fontY: -8,
        x: groupX,
        y: groupY,
        innerFill: "#2A3466",
        outerFill: "#ddd",
        opacity: .8
    });
    var centerGroup = cneterCircleText.createCircleText();
    bgLayer.add(centerGroup);

    stage.add(bgLayer);



    //动画层
    var layer = new Konva.Layer({
        // hitGraphEnabled : false
    });
    stage.add(layer);


    //创建整体的动画组
    var group = new Konva.Group({
        x: groupX,
        y: groupY,
        rotation: 0
    });

    //要创建的5个3环的对象数据设置
    var L3CircleData = [{
        text: "WebApp",//创建webapp的圆心组合 1
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "#fff",
        fontX: -30,
        fontY: -7,
        x: L3_Radius,
        y: 0,
        x: (Math.cos(20 * Math.PI / 180) * L3_Radius),
        y: (Math.sin(20 * Math.PI / 180) * L3_Radius),
        innerFill: "#CF2782",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "canvas",//动态创建第2个group
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 16	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -28,
        fontY: -7,
        x: 0,
        y: L3_Radius,
        innerFill: "#7CB9CE",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "ReactJS",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 16	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -30	,
        fontY: -7,
        x: -L3_Radius,
        y: 0,
        innerFill: "#68AAFC",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "NodeJS",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 16	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -30	,
        fontY: -7,
        x: (Math.cos(-115 * Math.PI / 180) * L3_Radius),
        y: (Math.sin(-115 * Math.PI / 180) * L3_Radius),
        innerFill: "yellow",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "HTML5",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 16	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -30	,
        fontY: -7,
        x: (Math.cos(-45 * Math.PI / 180) * L3_Radius),
        y: (Math.sin(-45 * Math.PI / 180) * L3_Radius),
        innerFill: "green",
        outerFill: "#ddd",
        opacity: .7
    }];

    for( var i = 0; i < L3CircleData.length; i++ ) {
        var tempCircleText = new CircleText(L3CircleData[i]);
        var circleTextGroup = tempCircleText.createCircleText();
        group.add(circleTextGroup);
    }

    layer.add(group);


    //绘制第二层动画层
    var groupL2 = new Konva.Group({
        x: groupX,
        y: groupY,
        rotation: 0
    });

    // 绘制第二层的一个圆形
    var zeptoJSCircleText = new CircleText({
        text: "zeptoJS",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -26	,
        fontY: -7,
        x: (Math.cos(-75 * Math.PI / 180) * L2_Radius),
        y: (Math.sin(-75 * Math.PI / 180) * L2_Radius),
        innerFill: "orange",
        outerFill: "#ddd",
        opacity: .7
    });
    var groupZepto = zeptoJSCircleText.createCircleText();
    groupL2.add(groupZepto);


    var CSS3CircleText = new CircleText({
        text: "CSS3",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -20	,
        fontY: -7,
        x: (Math.cos(105 * Math.PI / 180) * L2_Radius),
        y: (Math.sin(105 * Math.PI / 180) * L2_Radius),
        innerFill: "pink",
        outerFill: "#ddd",
        opacity: .7
    });
    var groupC3 = CSS3CircleText.createCircleText();
    groupL2.add(groupC3);

    layer.add(groupL2);

    layer.batchDraw();

    //动画处理层
    var angularSpeed = 60;//每秒旋转的角度
    var anim = new Konva.Animation(function(frame) {
        //计算每一帧旋转的角度
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        //三环进行旋转
        group.rotate(angleDiff);
        //
        group.getChildren().each(function(value, index){
            value.rotate(-angleDiff)
        });

        //2环 旋转
        groupL2.rotate(-angleDiff);
        //2环内的 组合进行反向旋转
        groupL2.getChildren().each(function(value, index){
            value.rotate(angleDiff)
        });

    }, layer);
    anim.start();


    // 动画事件处理
    group.on('mouseover touchstart',function(e){
        angularSpeed = 10;
    });

    group.on('mouseleave touchend',function(e){
        angularSpeed = 60;
    });
})();

//旋转图像的组合对象
function CircleText(option) {
    // 文字内容
    // 圆的半径
    // 默认坐标位置
    // 颜色圆
    // 颜色光环
    // 透明度
    option = option || {};
    option.text = option.text || "canvas";
    option.innerRadius = option.innerRadius || 40;
    option.outerRadius = option.outerRadius || 60;
    option.fontSize =  option.fontSize || 14;
    option.fontWeight = option.fontWeight || "bold";
    option.fontFamily = option.fontFamily || '微软雅黑';
    option.fontFill = option.fontFill || "#FFF";
    option.fontX = option.fontX ||-20;
    option.fontY = option.fontY ||-7;
    option.x = option.x === 0 ? 0 : option.x || 217;
    option.y = option.y === 0 ? 0 : option.y || 217;
    option.innerFill = option.innerFill || "teal";
    option.outerFill = option.outerFill || "#ddd";
    option.opacity = option.opacity || .5;

    //创建旋转组合对象的 组
    this.createCircleText = function() {
        var group = new Konva.Group({
            x: option.x,
            y: option.y,
            rotation: 0
        });

        //内圆
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: option.innerRadius,
            fill: option.innerFill,
            opacity: option.opacity,
            perfectDrawEnabled : false
        });
        group.add(innerCircle);

        //环形
        var outerRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: option.innerRadius,
            outerRadius: option.outerRadius,
            fill: option.outerFill,
            opacity: option.opacity,
            perfectDrawEnabled: false

        });

        group.add(outerRing);

        //文字
        var text = new Konva.Text({
            text: option.text,
            fontSize: option.fontSize,
            fontFamily: option.fontFamily,
            fontStyle: 'bold',
            fill: option.fontFill,
            x: option.fontX,
            y: option.fontY,
            align: 'left'
        });
        group.add(text);

        return group;
    }
}
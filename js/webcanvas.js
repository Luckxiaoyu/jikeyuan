(function(){
    //������̨
    var stage = new Konva.Stage({
        container: 'container',
        width: 600,
        height: 520
    });

    //��̨���ģ�Ҳ����ת������
    var groupX = stage.width() / 2,
        groupY = stage.height() / 2,
        L3_Radius = 217,
        L2_Radius = 125,
        L1_Radius = 90,
        L0_Radius = 66;
    //������
    var bgLayer = new Konva.Layer({
        hitGraphEnabled : false//don��t need event on layer set
    });
    //���Ʊ���Բ�� 3��
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

    //���Ʊ���Բ�� 2��
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

    //���Ʊ�����������
    var cneterCircleText = new CircleText({
        text: "前端开发",
        innerRadius: L0_Radius,
        outerRadius: L1_Radius,
        fontSize: 17,
        fontFamily: '微软雅黑',
        fontFill: "#fff",
        fontX: -36,
        fontY: -8,
        x: groupX,
        y: groupY,
        innerFill: "green",
        outerFill: "#ddd",
        opacity: .8
    });
    var centerGroup = cneterCircleText.createCircleText();
    bgLayer.add(centerGroup);
    stage.add(bgLayer);
    //������
    var layer = new Konva.Layer({
        // hitGraphEnabled : false
    });
    stage.add(layer);
    //��������Ķ�����
    var group = new Konva.Group({
        x: groupX,
        y: groupY,
        rotation: 0
    });

    //Ҫ������5��3���Ķ�����������
    var L3CircleData = [{
        text: "大数据可视化",//����webapp��Բ����� 1
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "#fff",
        fontX: -42,
        fontY: -7,
        x: L3_Radius,
        y: 0,
        x: (Math.cos(20 * Math.PI / 180) * L3_Radius),
        y: (Math.sin(20 * Math.PI / 180) * L3_Radius),
        innerFill: "#CF2782",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "微信小程序",//��̬������2��group
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -36,
        fontY: -7,
        x: 0,
        y: L3_Radius,
        innerFill: "#7CB9CE",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "VR视图",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -23,
        fontY: -7,
        x: -L3_Radius,
        y: 0,
        innerFill: "#68AAFC",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "游戏开发",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -28	,
        fontY: -7,
        x: (Math.cos(-115 * Math.PI / 180) * L3_Radius),
        y: (Math.sin(-115 * Math.PI / 180) * L3_Radius),
        innerFill: "yellow",
        outerFill: "#ddd",
        opacity: .7
    },{
        text: "Nodejs后端开发",
        innerRadius: 40,
        outerRadius: 50,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "purple",
        fontX: -52,
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


    //���Ƶڶ��㶯����
    var groupL2 = new Konva.Group({
        x: groupX,
        y: groupY,
        rotation: 0
    });

    // ���Ƶڶ����һ��Բ��
    var zeptoJSCircleText = new CircleText({
        text: "应用程序界面",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -42,
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
        text: "酷炫网页开发",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -42,
        fontY: -7,
        x: (Math.cos(105 * Math.PI / 180) * L2_Radius),
        y: (Math.sin(105 * Math.PI / 180) * L2_Radius),
        innerFill: "pink",
        outerFill: "#ddd",
        opacity: .7
    });
    var groupC3 = CSS3CircleText.createCircleText();
    groupL2.add(groupC3);

    //ng
    var ngCircleText = new CircleText({
        text: "跨平台移动APP",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -50,
        fontY: -7,
        x: (Math.cos(15 * Math.PI / 180) * L2_Radius),
        y: (Math.sin(15 * Math.PI / 180) * L2_Radius),
        innerFill: "pink",
        outerFill: "#ddd",

        opacity: .7
    });
    var groupNg = ngCircleText.createCircleText();
    groupL2.add(groupNg);
    //jquery
    var jqCircleText = new CircleText({
        text: "HTML5",
        innerRadius: 30,
        outerRadius: 40,
        fontSize: 14	,
        fontFamily: '微软雅黑',
        fontFill: "blue",
        fontX: -25,
        fontY: -7,
        x: (Math.cos(-175 * Math.PI / 180) * L2_Radius),
        y: (Math.sin(-175 * Math.PI / 180) * L2_Radius),
        innerFill: "pink",
        outerFill: "#ddd",
        opacity: .7
    });
    var groupJq = jqCircleText.createCircleText();
    groupL2.add(groupJq);

    layer.add(groupL2);

    layer.batchDraw();

    //���������
    var angularSpeed = 60;//ÿ����ת�ĽǶ�
    var anim = new Konva.Animation(function(frame) {
        //����ÿһ֡��ת�ĽǶ�
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        //����������ת
        group.rotate(angleDiff);
        //
        group.getChildren().each(function(value, index){
            value.rotate(-angleDiff)
        });

        //2�� ��ת
        groupL2.rotate(-angleDiff);
        //2���ڵ� ��Ͻ��з�����ת
        groupL2.getChildren().each(function(value, index){
            value.rotate(angleDiff)
        });

    }, layer);
    anim.start();
    // �����¼�����
    group.on('mouseover touchstart',function(e){
        angularSpeed = 10;
    });

    group.on('mouseleave touchend',function(e){
        angularSpeed = 60;
    });
})();

//��תͼ�����϶���
function CircleText(option) {
    // ��������
    // Բ�İ뾶
    // Ĭ������λ��
    // ��ɫԲ
    // ��ɫ�⻷
    // ͸����
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

    //������ת��϶���� ��
    this.createCircleText = function() {
        var group = new Konva.Group({
            x: option.x,
            y: option.y,
            rotation: 0
        });

        //��Բ
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: option.innerRadius,
            fill: option.innerFill,
            opacity: option.opacity,
            perfectDrawEnabled : false
        });
        group.add(innerCircle);

        //����
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

        //����
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

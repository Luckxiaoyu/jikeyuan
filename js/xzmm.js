var wrap = document.getElementById("automatic");  // �����
var arrow = document.getElementById("arrow");  // ����
var slider = document.getElementById("slide");
var lis = slider.getElementsByTagName("li");  // ����Ҫ�����ĺ���
wrap.onmouseover = function() {  // ��꾭����ʾ������ ����������ͷ
	animate(arrow,{'opacity':100});
}
wrap.onmouseout = function() {
	animate(arrow,{'opacity':0});
}
//  �洢��ÿ��ͼƬ����Ϣ
var json = [
	{   //  0
		width:200,
		top:-20,
		left:100,
		opacity:10,
		z:1
	},
	{   //  1
		width:400,
		top:20,
		left:50,
		opacity:20,
		z:2
	},
	{  // 2
		width:600,
		top:70,
		left:0,
		opacity:80,
		z:3
	},
	{   // 3
		width:800,
		top:100,
		left:200,
		opacity:100,
		z:4
	},
	{  // 4
		width:600,
		top:70,
		left:600,
		opacity:80,
		z:3
	},
	{   //5
		width:400,
		top:20,
		left:750,
		opacity:20,
		z:2
	},
	{   //6
		width:200,
		top:-20,
		left:900,
		opacity:10,
		z:1
	}
];
//  ������ť����¼�
// ��������
var jieliu = true; //  �������ƺ�������� ����
var as = arrow.children;
change();
for(var k in as)
{
	as[k].onclick = function() {
		if(this.className == "prev")
		{
			//  alert("���")  �Ƴ���һ��   �ŵ�json ���һ��
			if(jieliu == true)
			{
				change(false);
				jieliu = false;  // ������֮������ȡ��
			}

		}
		else
		{
			// alert('�Ҳ�');   �� ���һ��json ɾ��   ���Ұ����һ����ӵ�json ��һ��λ��
			if(jieliu == true)
			{
				change(true);
				jieliu = false;  // ������֮������ȡ��
			}
		}
	}
}

function change(flag) {
	//  ���ж�
	if(flag)
	{
		// �� ���һ��json ɾ��   ���Ұ����һ����ӵ�json ��һ��λ��
		json.unshift(json.pop());
	}
	else
	{
		//   �Ƴ���һ��   �ŵ�json ���һ��
		json.push(json.shift());
	}
	// Ϊʲô��for�أ� ��Ϊ���ǵ�json ��5��  ����li �� 5��
	for(var i=0;i<json.length; i++)
	{
		animate(lis[i],{
			width: json[i].width,
			top: json[i].top,
			left: json[i].left,
			opacity:json[i].opacity,
			zIndex:json[i].z
		},function(){ jieliu = true;})  // �ص������ǵȶ���ִ�����  ����
	}
}
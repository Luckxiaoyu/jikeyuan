
//Í¼±í²å¼þ
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

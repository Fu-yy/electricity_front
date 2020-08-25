// JavaScript Document
//行业用电量关联性分析图表js
var dom = document.getElementById("relationcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
option = null;
option = {

	backgroundColor: '#f5f9ff',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['汽车制造', '城市轨道交通设备制造', '改装汽车制造', '低速汽车制造', '汽车车身、挂车制造', '汽车零部件及配件制造']
    },
    series: [
        {
            name: '用电量',
            type: 'pie',
            radius: '86%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '汽车制造'},
                {value: 310, name: '城市轨道交通设备制造'},
                {value: 234, name: '改装汽车制造'},
                {value: 135, name: '低速汽车制造'},
                {value: 1548, name: '汽车车身、挂车制造'},
                {value: 1548, name: '汽车零部件及配件制造'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
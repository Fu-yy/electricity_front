// JavaScript Document
//需求侧用电量优化图表js
//时段用电量表格第一列固定
function aa(){
	var a=document.getElementById("tablecontent").scrollTop;
    var b=document.getElementById("tablecontent").scrollLeft;
    document.getElementById("freezelist").scrollTop=a;
    document.getElementById("tabletitlebox").scrollLeft=b;
}


//实际总用电量与优化后总用电量对比图表
var dom = document.getElementById("needcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
option = null;
option = {
	backgroundColor: '#f5f9ff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['实际总用电量', '优化后总用电量']
    },
	grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    },
    yAxis: {
		 name: '电量(×10^6kWh)',
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name: '实际总用电量',
            type: 'line',
            data: [25351, 25331, 24775, 24548, 24549, 24983, 26375, 28587, 31361, 32697, 32741, 28642, 30361, 31564, 31608, 31838, 31817, 29726, 30034, 29875, 29498, 29545, 28118, 26380],
        },
        {
            name: '优化后总用电量',
            type: 'line',
           data: [24766,
					24766,
					24766,
					24766,
					25964,
					28906,
					28906,
					31990,
					31990,
					31990,
					31990,
					28174,
					29328,
					29328,
					29328,
					29328,
					29328,
					29328,
					29328,
					29328,
					29328,
					29328,
					29026,
					29026
					           ],
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
// JavaScript Document
//行业分时用电量优化图表js
//三个行业分时用电量图表  开始
var timedom = document.getElementById("timecontainer");
var timemyChart = echarts.init(timedom, 'light');
var timeapp = {};
timeoption = null;
var colors = ['#558ed5', '#ffc000','#00b050',];

timeoption = {
	backgroundColor: '#f5f9ff',
    color: colors,

    tooltip: {
        trigger: 'axis',
    },
   grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    legend: {
        data: ['汽车制造业', '航空制造业','机械制造业']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
           data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        }
    ],
    yAxis: [
        {
            name: '电量(×10^6kWh)',
            type: 'value'
        }
    ],
    series: [
        {
            name: '汽车制造业',
            type: 'bar',
            data: [3187,
					2661,
					2171,
					3975,
					3975,
					3617,
					3975,
					3636,
					2043,
					497,
					1107,
					2912,
					3242,
					1437,
					987,
					1652,
					1353,
					1644,
					691,
					497,
					1178,
					2983,
					3975,
					3975
					]
        },
        {
            name: '航空制造业',
            type: 'bar',
            data: [317,
					136,
					326,
					517,
					517,
					326,
					517,
					326,
					252,
					62,
					252,
					443,
					252,
					62,
					252,
					62,
					252,
					62,
					252,
					62,
					136,
					326,
					517,
					497
					]
        }
        ,
        {
            name: '机械制造业',
            type: 'bar',
            data: [1142,
					940,
					1858,
					2333,
					2333,
					1415,
					2333,
					1415,
					498,
					247,
					799,
					1716,
					799,
					247,
					247,
					1165,
					2082,
					1165,
					2082,
					1373,
					823,
					1741,
					2333,
					2333
					]
        }
    ]
};
;
if (timeoption && typeof timeoption === "object") {
    timemyChart.setOption(timeoption, true);
};
//三个行业分时用电量图表  结束


//三个行业累计分时用电量图表  开始
var totaldom = document.getElementById("totalcontainer");
var totalmyChart = echarts.init(totaldom, 'light');
var totalapp = {};
totaloption = null;
totaloption = {
	backgroundColor: '#f5f9ff',
	 color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['汽车制造业', '航空制造业', '机械制造业']
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        }
    ],
    yAxis: [
        {
			name: '电量(×10^6kWh)',
            type: 'value'
        }
    ],
    series: [
        {
            name: '汽车制造业',
            type: 'bar',
            stack: '用电量',
            data: [3187,
					2661,
					2171,
					3975,
					3975,
					3617,
					3975,
					3636,
					2043,
					497,
					1107,
					2912,
					3242,
					1437,
					987,
					1652,
					1353,
					1644,
					691,
					497,
					1178,
					2983,
					3975,
					3975
					]
        },
        {
            name: '航空制造业',
            type: 'bar',
            stack: '用电量',
            data: [317,
					136,
					326,
					517,
					517,
					326,
					517,
					326,
					252,
					62,
					252,
					443,
					252,
					62,
					252,
					62,
					252,
					62,
					252,
					62,
					136,
					326,
					517,
					497
					]
        },
        {
            name: '机械制造业',
            type: 'bar',
            stack: '用电量',
            data: [1142,
					940,
					1858,
					2333,
					2333,
					1415,
					2333,
					1415,
					498,
					247,
					799,
					1716,
					799,
					247,
					247,
					1165,
					2082,
					1165,
					2082,
					1373,
					823,
					1741,
					2333,
					2333
					]
        }
    ]
};
;
if (totaloption && typeof totaloption === "object") {
    totalmyChart.setOption(totaloption, true);
};
//三个行业累计分时用电量图表  结束
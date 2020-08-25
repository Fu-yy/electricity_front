// JavaScript Document
//峰谷平电价和行业分时电价图表js
//峰谷平电价和汽车制造业分时电价  开始
var qcdom = document.getElementById("qccontainer");
var qcmyChart = echarts.init(qcdom, 'light');
var qcapp = {};
qcoption = null;
qcoption = {
    backgroundColor: '#f5f9ff',
    color: ['#008bde', '#ffc000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    legend: {
        data: ['峰谷平电价', '汽车制造业分时电价']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        }
    ],
    yAxis: [
        {
			name: '电价(元/kWh)',
            type: 'value'
        }
    ],
    series: [
        {
            name: '峰谷平电价',
            type: 'bar',
            data: [0.41, 0.41, 0.41, 0.41, 0.41, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23,0.82,0.41,0.41]
        },
        {
            name: '汽车制造业分时电价',
            type: 'bar',
            data: [0.42,
					0.41,
					0.40 ,
					0.40 ,
					0.42 ,
					0.83 ,
					0.82 ,
					1.22 ,
					1.22 ,
					1.22 ,
					1.24 ,
					0.82 ,
					0.83 ,
					0.81 ,
					0.83 ,
					0.83 ,
					0.79 ,
					1.25 ,
					1.20 ,
					1.25 ,
					1.23 ,
					0.81 ,
					0.42 ,
					0.41
					]
        }
    ]
};;
if (qcoption && typeof qcoption === "object") {
    qcmyChart.setOption(qcoption, true);
}
//峰谷平电价和汽车制造业分时电价  结束


//峰谷平电价和航空制造业分时电价  开始
var hkdom = document.getElementById("hkcontainer");
var hkmyChart = echarts.init(hkdom, 'light');
var hkapp = {};
hkoption = null;
hkoption = {
    backgroundColor: '#f5f9ff',
    color: ['#008bde', '#ffc000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    legend: {
        data: ['峰谷平电价', '航空制造业分时电价']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        }
    ],
    yAxis: [
        {
			name: '电价(元/kWh)',
            type: 'value'
        }
    ],
    series: [
        {
            name: '峰谷平电价',
            type: 'bar',
            data: [0.41, 0.41, 0.41, 0.41, 0.41, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23,0.82,0.41,0.41]
        },
        {
            name: '航空制造业分时电价',
            type: 'bar',
            data: [0.41,
					0.41,
					0.42,
					0.42,
					0.41,
					0.82,
					0.81,
					1.22,
					1.26,
					1.20,
					1.27,
					0.84,
					0.84,
					0.78,
					0.86,
					0.82,
					0.83,
					1.23,
					1.24,
					1.20,
					1.21,
					0.85,
					0.42,
					0.40
					 ]
        }
    ]
};;
if (hkoption && typeof hkoption === "object") {
    hkmyChart.setOption(hkoption, true);
}
//峰谷平电价和航空制造业分时电价  结束


//峰谷平电价和机械制造业分时电价  开始
var jxdom = document.getElementById("jxcontainer");
var jxmyChart = echarts.init(jxdom, 'light');
var jxapp = {};
jxoption = null;
jxoption = {
    backgroundColor: '#f5f9ff',
    color: ['#008bde', '#ffc000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    legend: {
        data: ['峰谷平电价', '机械制造业分时电价']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        }
    ],
    yAxis: [
        {
			name: '电价(元/kWh)',
            type: 'value'
        }
    ],
    series: [
        {
            name: '峰谷平电价',
            type: 'bar',
            data: [0.41, 0.41, 0.41, 0.41, 0.41, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23, 0.82, 0.82, 0.82, 0.82, 0.82, 0.82, 1.23, 1.23, 1.23, 1.23,0.82,0.41,0.41]
        },
        {
            name: '机械制造业分时电价',
            type: 'bar',
            data: [0.41 ,
					0.41 ,
					0.41 ,
					0.41 ,
					0.42 ,
					0.82 ,
					0.81 ,
					1.19 ,
					1.21 ,
					1.28 ,
					1.23 ,
					0.83 ,
					0.81 ,
					0.82 ,
					0.80 ,
					0.81 ,
					0.87 ,
					1.21 ,
					1.22 ,
					1.27 ,
					1.22 ,
					0.83 ,
					0.40 ,
					0.41
					]
        }
    ]
};;
if (jxoption && typeof jxoption === "object") {
    jxmyChart.setOption(jxoption, true);
}
//峰谷平电价和机械制造业分时电价  结束


//行业间分时电价对比  开始
var duibidom = document.getElementById("duibicontainer");
var duibimyChart = echarts.init(duibidom, 'light');
var duibiapp = {};
duibioption = null;
duibioption = {
	backgroundColor: '#f5f9ff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['汽车制造业', '航空制造业', '机械制造业']
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    },
    yAxis: {
        name: '电价(元/kWh)',
        type: 'value'
    },
    series: [
        {
            name: '汽车制造业',
            type: 'line',
            data: [0.42,
					0.41,
					0.40 ,
					0.40 ,
					0.42 ,
					0.83 ,
					0.82 ,
					1.22 ,
					1.22 ,
					1.22 ,
					1.24 ,
					0.82 ,
					0.83 ,
					0.81 ,
					0.83 ,
					0.83 ,
					0.79 ,
					1.25 ,
					1.20 ,
					1.25 ,
					1.23 ,
					0.81 ,
					0.42 ,
					0.41
					]
        },
        {
            name: '航空制造业',
            type: 'line',
            data: [0.41,
					0.41,
					0.42,
					0.42,
					0.41,
					0.82,
					0.81,
					1.22,
					1.26,
					1.20,
					1.27,
					0.84,
					0.84,
					0.78,
					0.86,
					0.82,
					0.83,
					1.23,
					1.24,
					1.20,
					1.21,
					0.85,
					0.42,
					0.40
					 ]
        },
        {
            name: '机械制造业',
            type: 'line',
            data: [0.41 ,
					0.41 ,
					0.41 ,
					0.41 ,
					0.42 ,
					0.82 ,
					0.81 ,
					1.19 ,
					1.21 ,
					1.28 ,
					1.23 ,
					0.83 ,
					0.81 ,
					0.82 ,
					0.80 ,
					0.81 ,
					0.87 ,
					1.21 ,
					1.22 ,
					1.27 ,
					1.22 ,
					0.83 ,
					0.40 ,
					0.41
					]
        }
    ]
};
;
if (duibioption && typeof duibioption === "object") {
    duibimyChart.setOption(duibioption, true);
}
//行业间分时电价对比  结束
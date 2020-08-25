// JavaScript Document
//行业用电趋势预测图表js
//年月范围选择
laydate.render({
  elem: '#trenddate'
  ,type: 'month'
  ,range: true //或 range: '~' 来自定义分割字符
});


//行业用电趋势预测图标表
var dom = document.getElementById("trendcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
option = null;
option = {
    backgroundColor: '#f5f9ff',
    tooltip: {
        trigger: 'axis'
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
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04']
    },
    yAxis: {
		name: '电量(×10^4kWh)',
        type: 'value'
    },
    series: [
        {
            name: '汽车制造业',
            type: 'line',
            data: [105863526.7,
105961735.6,
96706757.01,
105499093.6,
101447040.8,
90298341.8,
98781114.04,
109290975.7
],
            lineStyle: {
                width: 4
            }
        },
        {
            name: '航空制造业',
            type: 'line',
            data: [12551691.92,
14090252.19,
11368380.07,
12909742.93,
12330608.39,
11773732.22,
13382761.78,
12857381.92
],
            lineStyle: {
                width: 4
            }
        },
        {
            name: '机械制造业',
            type: 'line',
            data: [104124003.6,
108695070.7,
79923325.04,
101375439.4,
99943565.22,
94696416.68,
97324843.84,
99853081.52
],
            lineStyle: {
                width: 4
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
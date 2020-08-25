// JavaScript Document
//行业用电量关联性分析图表js
var dom = document.getElementById("relationcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
var m=$("#monthrange .select_showbox").text();
d.put("1月份",[
                {value: 356197, name: '铁路、船舶、航空航天等运输设备修理'},
                {value: 25569411, name: '航空、航天器及设备制造'},
            ]);
 d.put("2月份",[
                {value: 132427, name: '铁路、船舶、航空航天等运输设备修理'},
                {value: 21737131, name: '航空、航天器及设备制造'},
            ]);
 d.put("3月份",[
                {value: 130825, name: '铁路、船舶、航空航天等运输设备修理'},
                {value: 27947388, name: '航空、航天器及设备制造'},
            ]);
 d.put("4月份",[
                {value: 100957, name: '铁路、船舶、航空航天等运输设备修理'},
                {value: 25821139, name: '航空、航天器及设备制造'},
            ]);
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
        data: ['铁路、船舶、航空航天等运输设备修理', '航空、航天器及设备制造']
    },
    series: [
        {
            name: '用电量',
            type: 'pie',
            radius: '86%',
            center: ['50%', '50%'],
            data: d.get(m),
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
// JavaScript Document
//行业用电量关联性分析图表js
var dom = document.getElementById("relationcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
var m=$("#monthrange .select_showbox").text();
d.put("1月份",[
                {value: 238735, name: '文化、办公用机械制造'},
                {value: 66225, name: '增材制造装备制造'},
                {value: 5794424, name: '特种陶瓷制品制造'},
                {value: 123187665, name: '金属加工机械制造'},
                {value: 38269055, name: '泵、阀门、压缩机及类似机械制造'},
                {value: 21395244, name: '电子和电工机械专用设备制造'},
                {value: 2782773, name: '农、林、牧、渔专用机械制造'},
                {value: 13020442, name: '其他电气机械及器材制造'}
            ]);
 d.put("2月份",[
                {value: 284549, name: '文化、办公用机械制造'},
                {value: 68685, name: '增材制造装备制造'},
                {value: 6944972, name: '特种陶瓷制品制造'},
                {value: 129390451, name: '金属加工机械制造'},
                {value: 39772528, name: '泵、阀门、压缩机及类似机械制造'},
                {value: 21210317, name: '电子和电工机械专用设备制造'},
                {value: 2849099, name: '农、林、牧、渔专用机械制造'},
                {value: 13164356, name: '其他电气机械及器材制造'}
            ]);
 d.put("3月份",[
                {value: 252211, name: '文化、办公用机械制造'},
                {value: 58920, name: '增材制造装备制造'},
                {value: 6419210, name: '特种陶瓷制品制造'},
                {value: 130212709, name: '金属加工机械制造'},
                {value: 40678487, name: '泵、阀门、压缩机及类似机械制造'},
                {value: 21115125, name: '电子和电工机械专用设备制造'},
                {value: 3114787, name: '农、林、牧、渔专用机械制造'},
                {value: 12838386, name: '其他电气机械及器材制造'}
            ]);
 d.put("4月份",[
                {value: 211678, name: '文化、办公用机械制造'},
                {value: 61785, name: '增材制造装备制造'},
                {value: 7082083, name: '特种陶瓷制品制造'},
                {value: 119221390, name: '金属加工机械制造'},
                {value: 37070972, name: '泵、阀门、压缩机及类似机械制造'},
                {value: 17704318, name: '电子和电工机械专用设备制造'},
                {value: 2883390, name: '农、林、牧、渔专用机械制造'},
                {value: 11526588, name: '其他电气机械及器材制造'}
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
        data: ['文化、办公用机械制造', '增材制造装备制造','特种陶瓷制品制造', '金属加工机械制造', '泵、阀门、压缩机及类似机械制造', '电子和电工机械专用设备制造','农、林、牧、渔专用机械制造','其他电气机械及器材制造']
    },
    series: [
        {
            name: '用电量',
            type: 'pie',
            radius: '80%',
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
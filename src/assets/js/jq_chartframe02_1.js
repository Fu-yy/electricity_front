// JavaScript Document
//行业用电量关联性分析图表js
var dom = document.getElementById("relationcontainer");
var myChart = echarts.init(dom, 'light');
var app = {};
option = null;
var d = new Dictionary();
var m=$("#monthrange .select_showbox").text();
d.put("1月份",[
                {value: 139956527, name: '汽车制造'},
                {value: 5760832, name: '城市轨道交通设备制造'},
                {value: 940738, name: '改装汽车制造'},
                {value: 67548, name: '低速汽车制造'},
                {value: 1548194, name: '汽车车身、挂车制造'},
                {value: 96264486, name: '汽车零部件及配件制造'}
            ]);
 d.put("2月份",[
                {value: 136003018, name: '汽车制造'},
                {value: 4453338, name: '城市轨道交通设备制造'},
                {value: 744283, name: '改装汽车制造'},
                {value: 40955, name: '低速汽车制造'},
                {value: 1286916, name: '汽车车身、挂车制造'},
                {value: 78813428, name: '汽车零部件及配件制造'}
            ]);
 d.put("3月份",[
                {value: 152852177, name: '汽车制造'},
                {value: 7460663, name: '城市轨道交通设备制造'},
                {value: 717466, name: '改装汽车制造'},
                {value: 41222, name: '低速汽车制造'},
                {value: 1510741, name: '汽车车身、挂车制造'},
                {value: 91992956, name: '汽车零部件及配件制造'}
            ]);
 d.put("4月份",[
                {value: 140326837, name: '汽车制造'},
                {value: 7445822, name: '城市轨道交通设备制造'},
                {value: 572220, name: '改装汽车制造'},
                {value: 33525, name: '低速汽车制造'},
                {value: 1292473, name: '汽车车身、挂车制造'},
                {value: 90057198, name: '汽车零部件及配件制造'}
            ]);
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

function Dictionary(){
	 this.data = new Array();

	 this.put = function(key,value){
	  this.data[key] = value;
	 };

	 this.get = function(key){
	  return this.data[key];
	 };

	 this.remove = function(key){
	  this.data[key] = null;
	 };

	 this.isEmpty = function(){
	  return this.data.length == 0;
	 };

	 this.size = function(){
	  return this.data.length;
	 };
}
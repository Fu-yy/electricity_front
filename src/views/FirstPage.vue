<template>
  <div>
    <div id="myChart" :style="{width: '800px', height: '400px'}"></div>
  </div>
</template>

<script>

export default {
  name: "FirstPage",
  data: "",
  data () {
    return {
      msg: 'evaluation'
    }
  },
  mounted() {
    this.drawLine();
    
  },
  methods:{
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // let myPie = this.$echarts.init(document.getElementById('pie'))
        let _this = this
        // 绘制饼图
        myChart.setOption({
            title : {
            text: '被评价次数分布情况',
            // subtext: '纯属虚构',
            x:'center'
            },
            tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
            orient: 'vertical',
            left: 'left',
            data: ['汽车行业','航空','机械']
            },
            series : [
                // {
                //     name: '评价次数',
                //     type: 'pie',
                //     radius : '55%',
                //     center: ['50%', '60%'],
                //     data:[
                //         // {value:"1", name:'华夏银行'},{value:"4", name:'农业银行'},{value:"3", name:'招商银行'}
                //     ],
                //     itemStyle: {
                //         emphasis: {
                //             shadowBlur: 10,
                //             shadowOffsetX: 0,
                //             shadowColor: 'rgba(0, 0, 0, 0.5)'
                //         }
                //     }
                // }
            ]
        });




      this.$axios
      .get("/findEletrictPastList")
      .then(response => {
        console.log(response);
        console.log(response.data.data);
        console.log(response.data.data.time);
        var timeList = response.data.data.time;

        let chartData = [];
        let dataList = [];

        let machineData = response.data.data.machine;
        let carData = response.data.data.car;
        let avitationtData = response.data.data.avitation;

        dataList.push(machineData);
        dataList.push(carData);
        dataList.push(avitationtData);


      dataList.forEach(function(item){
        console.log(item);
        timeList.forEach(function(index){
          let outObj = {};
          // let valueKey = Object.keys(i);
          // console.log("俩面")
          // console.log(item)
          // console.log(valueKey)
          // console.log("外面")

          // outObj.name =item.key ;
          outObj.value = item.index;
          chartData.push(outObj);
        })

      })

        // let seriesData = [];


        // chartData.forEach(function(item){
        //   let outObj = {};
        //   let valueKey = Object.keys(item);
        //   // console.log("俩面")
        //   // console.log(item)
        //   // console.log(valueKey)
        //   // console.log("外面")

        //   outObj.name = item[valueKey[0]];
        //   outObj.value = valueKey[1];
        //   seriesData.push(outObj);
        // })
        console.log("chartData");
        console.log(chartData);
        myChart.setOption({
          // data: ['华夏银行','农业银行','招商银行'],
          // legend:{
          //   data: timeList
          // },
          series:[{
                    name: '评价次数',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[{value:"1", name:'华夏银行'},{value:"4", name:'农业银行'},{value:"3", name:'招商银行'}],
                    // data:seriesData,

                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
          ]
        })
        });
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div id="testChart" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart2" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart3" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart4" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart5" :style="{ height: '500px'}"></div>
      </el-col>

      <el-col :span="8">
        <div id="testChart6" :style="{ height: '500px'}"></div>
      </el-col>

      <el-col :span="8">
        <div id="testChart7" :style="{ height: '500px'}"></div>
      </el-col>

      <el-col :span="8">
        <div id="testChart8" :style="{ height: '500px'}"></div>
      </el-col>

      <el-col :span="8">
        <div id="testChart9" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart10" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart11" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart12" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart13" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart14" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart15" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart16" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart17" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart18" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart19" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart20" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart21" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart22" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart23" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart24" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart25" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart26" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart27" :style="{ height: '500px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id="testChart28" :style="{ height: '500px'}"></div>
      </el-col>
            <el-col :span="8">
        <div id="testChart29" :style="{ height: '500px'}"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "testPage",

  mounted() {
    this.drawCharts();
    this.drawChart3();
    this.drawChart4();
    this.drawChart5();
    this.drawChart6();
    this.drawChart7();
    this.drawChart8();
    this.drawChart9();
    this.drawChart10();
    this.drawChart11();
    this.drawChart12();
    this.drawChart13();
    this.drawChart14();
    this.drawChart15();
    this.drawChart16();
    this.drawChart17();
    this.drawChart18();
    this.drawChart19();
    this.drawChart20();
    this.drawChart21();
    this.drawChart22();
    this.drawChart23();
    this.drawChart24();
    this.drawChart25();
    this.drawChart26();
    this.drawChart27();
    this.drawChart28();
    this.drawChart29();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("testChart")).resize();
      that.$echarts.init(document.getElementById("testChart2")).resize();
      that.$echarts.init(document.getElementById("testChart3")).resize();
      that.$echarts.init(document.getElementById("testChart4")).resize();
      that.$echarts.init(document.getElementById("testChart5")).resize();
      that.$echarts.init(document.getElementById("testChart6")).resize();
      that.$echarts.init(document.getElementById("testChart7")).resize();
      that.$echarts.init(document.getElementById("testChart8")).resize();
      that.$echarts.init(document.getElementById("testChart9")).resize();
      that.$echarts.init(document.getElementById("testChart10")).resize();
      that.$echarts.init(document.getElementById("testChart11")).resize();
      that.$echarts.init(document.getElementById("testChart12")).resize();
      that.$echarts.init(document.getElementById("testChart13")).resize();
      that.$echarts.init(document.getElementById("testChart14")).resize();
      that.$echarts.init(document.getElementById("testChart15")).resize();
      that.$echarts.init(document.getElementById("testChart16")).resize();
      that.$echarts.init(document.getElementById("testChart17")).resize();
      that.$echarts.init(document.getElementById("testChart18")).resize();
      that.$echarts.init(document.getElementById("testChart19")).resize();
      that.$echarts.init(document.getElementById("testChart20")).resize();
      that.$echarts.init(document.getElementById("testChart21")).resize();
      that.$echarts.init(document.getElementById("testChart22")).resize();
      that.$echarts.init(document.getElementById("testChart23")).resize();
      that.$echarts.init(document.getElementById("testChart24")).resize();
      that.$echarts.init(document.getElementById("testChart25")).resize();
      that.$echarts.init(document.getElementById("testChart26")).resize();
      that.$echarts.init(document.getElementById("testChart27")).resize();
      that.$echarts.init(document.getElementById("testChart28")).resize();
      that.$echarts.init(document.getElementById("testChart29")).resize();
    };
  },
  methods: {
    drawCharts() {
      var testTime = ["2020.1", "2020.2", "2020.3"];
      var testType = ["汽车", "航空"];
      var num = {
        car: [10, 20, 30],
        hangkong: [40, 50, 55]
      };

      // this.testChart = this.$echarts.init(this.$refs.testChart);

      let testChart = this.$echarts.init(document.getElementById("testChart"));
      let testChart2 = this.$echarts.init(
        document.getElementById("testChart2")
      );
      testChart.setOption({
        title: {
          text: "堆叠区域图"
        },
        xAxis: {
          type: "category",
          data: testTime
        },
        legend: {
          data: testType
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "汽车",
            data: num.car,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          },
          {
            name: "航空",
            data: num.hangkong,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      });
      // testChart2 = this.$echarts.init(this.$refs.testChart2);
      testChart2.setOption({
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: testType
        },
        toolbox: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: testTime
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "汽车",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: num.car
          },
          {
            name: "航空",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: num.hangkong
          }
        ]
      });
    },

    drawChart3() {
      let testChart3 = this.$echarts.init(
        document.getElementById("testChart3")
      );
      var t = this;

      // Generate data
      var category = [];
      var dottedBase = [];
      var lineData = [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        69521,
        77560,
        85038,
        92477,
        102268
      ];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        35800,
        45400,
        59810
      ];
      var rateData = [];

      for (var i = 0; i < 17; i++) {
        var date = i + 2001;
        category.push(date);
        var rate = barData[i] / lineData[i];
        rateData[i] = rate.toFixed(2);
      }

      // option
      testChart3.setOption({
        title: {
          text: "Trtgedtertdfgdfg阿萨ing",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        backgroundColor: "#191E40",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: [
            "Average house price per square meter",
            "Average annual income",
            "Housing price-income ratio"
          ],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "7%"
        },
        grid: {
          x: "12%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} CNY"
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} ㎡"
            }
          }
        ],

        series: [
          {
            name: "Housing price-income ratio",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: rateData
          },

          {
            name: "Average house price per square meter",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },
            data: barData
          },

          {
            name: "Average annual income",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(156,107,211,0.5)" },
                  { offset: 0.2, color: "rgba(156,107,211,0.3)" },
                  { offset: 1, color: "rgba(156,107,211,0)" }
                ])
              }
            },
            z: -12,

            data: lineData
          }
        ]
      });
    },
    drawChart4() {
      let testChart4 = this.$echarts.init(
        document.getElementById("testChart4")
      );
      var option = {};

      var xAxisData = ["3月", "4月", "5月", "6月", "7月", "8月", "9月"];
      var firstLineData = [90, 50, 39, 50, 120, 85, "_"];
      var firstLineDottedData = ["_", "_", "_", "_", "_", 85, 100];
      var sendLineData = [70, 50, 50, 87, 90, 42, "_"];
      var sendLineDottedData = ["_", "_", "_", "_", "_", 42, 65];
      var threeLineData = [220, 182, 191, 234, 290, 78, "_"];
      var threeLineDottedData = ["_", "_", "_", "_", "_", 78, 180];

      var dataValue = 100;

      var firstPieData = 42;

      var sendPieData = 44;

      var threePieData = 43;

      var dataxAxis = 30;
      var datayAxis = 67.1;

      var labelTop = {
        normal: {
          label: {
            show: true,
            fontSize: 14,
            position: "center",
            formatter: "{b}",
            textStyle: {
              baseline: "bottom",
              color: "#8cd2ff"
            }
          },
          labelLine: {
            show: false
          }
        }
      };

      var labelTopUpdata = {
        normal: {
          label: {
            show: true,
            fontSize: 14,
            position: "center",
            formatter: "{b}",
            textStyle: {
              baseline: "bottom",
              color: "#fff"
            }
          },
          labelLine: {
            show: false
          }
        }
      };

      var labelFromatter = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00fff6" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#005aff" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          }
        }
      };
      var labelFromatter1 = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#ffea00" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#ff00c0" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          }
        }
      };
      var labelFromatter2 = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#70fc1d" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#5d7f00" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          shadowColor: "#0c3da3",
          shadowBlur: 10,
          shadowOffsetX: 1,
          shadowOffsetY: 1
        }
      };
      var labelBottom = {
        normal: {
          color: "rgba(12, 61, 163, 1)",
          position: "none",
          label: {
            show: true,
            position: "center"
          },
          labelLine: {
            show: false
          }
        }
      };

      var lineitemStyle2 = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: "#66ff00",
          borderColor: "rgba(102, 255, 0, 0.5)",
          borderWidth: 10
        }
      };
      var lineitemStyle1 = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: "#ffea00",
          borderColor: "rgba(255, 234, 0, 0.5)",
          borderWidth: 10
        }
      };
      var lineitemStyle = {
        normal: {
          label: {
            formatter: function(params) {
              return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: "#fff",
            textStyle: {
              baseline: "top"
            }
          },
          color: "#01f2ee",
          borderColor: "rgba(1, 242, 238, 0.5)",
          borderWidth: 10
        }
      };

      var radius = [30, 60];
      option = {
        backgroundColor: "#293042",
        tooltip: {
          show: true,
          trigger: "item"
        },
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        grid: {
          left: "4%",
          right: "0",
          top: "25%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#6995aa"
            },
            onZero: true
          },
          axisLabel: {
            fontSize: 11,
            color: "#A5CADB"
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#1978D9"
            }
          },
          data: xAxisData
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#6995aa"
            },
            onZero: false
          },
          axisLabel: {
            fontSize: 11,
            color: "#A5CADB"
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#1978D9"
            }
          },
          scale: true
        },
        series: [
          {
            name: "第一产业",
            smooth: true,
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            itemStyle: lineitemStyle,
            data: firstLineData
          },
          {
            name: "第一产业",
            smooth: true,
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            itemStyle: lineitemStyle,
            lineStyle: {
              normal: {
                type: "dotted"
              }
            },
            tooltip: {
              formatter: "{b0},{a0}: {c0}<br />{b2}"
            },
            data: firstLineDottedData
          },
          {
            name: "第二产业",
            smooth: true,
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            itemStyle: lineitemStyle1,
            data: sendLineData
          },
          {
            name: "第二产业",
            smooth: true,
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            itemStyle: lineitemStyle1,
            lineStyle: {
              normal: {
                type: "dotted"
              }
            },
            data: sendLineDottedData
          },
          {
            type: "line",
            name: "第三产业",
            smooth: true,
            symbolSize: 5,
            symbol: "circle",
            itemStyle: lineitemStyle2,
            data: threeLineData
          },
          {
            type: "line",
            name: "第三产业",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            itemStyle: lineitemStyle2,
            lineStyle: {
              normal: {
                type: "dotted"
              }
            },
            data: threeLineDottedData
          },
          {
            type: "pie",
            center: ["15%", "10%"],
            startAngle: 180,
            radius: radius,
            clockwise: false,
            itemStyle: labelFromatter,
            data: [
              {
                name: "第一产业",
                value: dataValue - firstPieData,
                itemStyle: labelBottom
              },
              {
                name: "第一产业",
                value: firstPieData,
                itemStyle: labelTop
              }
            ],
            markLine: {
              silent: true,
              symbolSize: 0,
              data: [
                {
                  0: {
                    x: 15 - (60 / testChart4.getWidth()) * 100 + "%",
                    y: "10%",
                    lineStyle: {
                      normal: {
                        color: "#ccc",
                        width: 1,
                        type: "solid"
                      }
                    }
                  },
                  1: {
                    x: "15%",
                    y: "10%"
                  }
                }
              ]
            }
          },
          {
            type: "pie",
            center: ["45%", "10%"],
            radius: radius,
            startAngle: 180,
            clockwise: false,
            itemStyle: labelFromatter1,
            data: [
              {
                name: "第二产业",
                value: dataValue - sendPieData,
                itemStyle: labelBottom
              },
              {
                name: "第二产业",
                value: sendPieData,
                itemStyle: labelTop
              }
            ],
            markLine: {
              silent: true,
              symbolSize: 0,
              data: [
                {
                  0: {
                    x: 45 - (60 / testChart4.getWidth()) * 100 + "%",
                    y: "10%",
                    lineStyle: {
                      normal: {
                        color: "#ccc",
                        width: 1,
                        type: "solid"
                      }
                    }
                  },
                  1: {
                    x: "45%",
                    y: "10%"
                  }
                }
              ]
            }
          },
          {
            type: "pie",
            center: ["75%", "10%"],
            radius: radius,
            startAngle: 180,
            clockwise: false,
            itemStyle: labelFromatter2,
            data: [
              {
                name: "第三产业",
                value: dataValue - threePieData,
                itemStyle: labelBottom
              },
              {
                name: "第三产业",
                value: threePieData,
                itemStyle: labelTop
              }
            ],
            markLine: {
              silent: true,
              symbolSize: 0,
              data: [
                {
                  0: {
                    x: 75 - (60 / testChart4.getWidth()) * 100 + "%",
                    y: "10%",
                    lineStyle: {
                      normal: {
                        color: "#ccc",
                        width: 1,
                        type: "solid"
                      }
                    }
                  },
                  1: {
                    x: "75%",
                    y: "10%"
                  }
                }
              ]
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      testChart4.setOption(option);
      testChart4.on("click", function(params) {
        if (params.seriesType === "pie") {
          console.log(params);
          // 点击到了 markPoint 上
          if (params.name === "第一产业") {
            testChart4.setOption({
              series: [
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [21, 12, 11, 234, 290, 100, "_"]
                },
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 100, 200]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [42, 12, 19, 234, 290, 120, "_"]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 120, 9]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [63, 12, 11, 234, 290, 123, "_"]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 123, 3]
                },
                {
                  type: "pie",
                  center: ["15%", "10%"],
                  startAngle: 180,
                  radius: radius,
                  clockwise: false,
                  itemStyle: labelFromatter,
                  data: [
                    {
                      name: "第一产业",
                      value: dataValue - firstPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第一产业",
                      value: firstPieData,
                      itemStyle: labelTopUpdata
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["45%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter1,
                  data: [
                    {
                      name: "第二产业",
                      value: dataValue - sendPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第二产业",
                      value: sendPieData,
                      itemStyle: labelTop
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["75%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter2,
                  data: [
                    {
                      name: "第三产业",
                      value: dataValue - threePieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第三产业",
                      value: threePieData,
                      itemStyle: labelTop
                    }
                  ]
                }
              ]
            });
          } else if (params.name === "第二产业") {
            testChart4.setOption({
              series: [
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [21, 12, 11, 234, 290, 100, "_"]
                },
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 100, 30]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [42, 12, 19, 234, 290, 120, "_"]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 120, 991]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [63, 12, 11, 234, 290, 123, "_"]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 123, 131]
                },
                {
                  type: "pie",
                  center: ["15%", "10%"],
                  startAngle: 180,
                  radius: radius,
                  clockwise: false,
                  itemStyle: labelFromatter,
                  data: [
                    {
                      name: "第一产业",
                      value: dataValue - firstPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第一产业",
                      value: firstPieData,
                      itemStyle: labelTop
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["45%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter1,
                  data: [
                    {
                      name: "第二产业",
                      value: dataValue - sendPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第二产业",
                      value: sendPieData,
                      itemStyle: labelTopUpdata
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["75%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter2,
                  data: [
                    {
                      name: "第三产业",
                      value: dataValue - threePieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第三产业",
                      value: threePieData,
                      itemStyle: labelTop
                    }
                  ]
                }
              ]
            });
          } else {
            testChart4.setOption({
              series: [
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [21, 12, 11, 234, 290, 100, "_"]
                },
                {
                  // type: 'line',
                  name: "第一产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 100, 120]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [42, 12, 19, 234, 290, 120, "_"]
                },
                {
                  // type: 'line',
                  name: "第二产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 120, 45]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: [63, 12, 11, 234, 290, 123, "_"]
                },
                {
                  //type: 'line',
                  name: "第三产业",
                  // 通过饼图表现单个柱子中的数据分布
                  data: ["_", "_", "_", "_", "_", 123, 89]
                },
                {
                  type: "pie",
                  center: ["15%", "10%"],
                  startAngle: 180,
                  radius: radius,
                  clockwise: false,
                  itemStyle: labelFromatter,
                  data: [
                    {
                      name: "第一产业",
                      value: dataValue - firstPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第一产业",
                      value: firstPieData,
                      itemStyle: labelTop
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["45%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter1,
                  data: [
                    {
                      name: "第二产业",
                      value: dataValue - sendPieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第二产业",
                      value: sendPieData,
                      itemStyle: labelTop
                    }
                  ]
                },
                {
                  type: "pie",
                  center: ["75%", "10%"],
                  radius: radius,
                  startAngle: 180,
                  clockwise: false,
                  itemStyle: labelFromatter2,
                  data: [
                    {
                      name: "第三产业",
                      value: dataValue - threePieData,
                      itemStyle: labelBottom
                    },
                    {
                      name: "第三产业",
                      value: threePieData,
                      itemStyle: labelTopUpdata
                    }
                  ]
                }
              ]
            });
          }
        }
      });
    },

    drawChart5() {
      let testChart5 = this.$echarts.init(
        document.getElementById("testChart5")
      );
      var option = {};

      var confirmed = [217, 440, 571, 830, 1287, 1975];
      var similar = [7, 30, 393, 1072, 1965, 2684];
      var heavy = [0, 0, 95, 177, 237, 324];
      var death = [0, 9, 17, 25, 41, 56];
      var total = [];
      var total1 = [214, 479, 1000];
      var myColor = ["#FE5656", "#3DD1F9", "#FFAD05", "#906BF9"];
      var Datedata = ["20日", "21日", "22日", "23日", "24日", "25日"];
      var situation = ["确诊", "疑似", "病重", "死亡"];
      var confirmedtotal = confirmed[confirmed.length - 1];
      var similartotal = similar[similar.length - 1];
      var deathtotal = death[death.length - 1];
      var heavytotal = heavy[heavy.length - 1];
      var data = [
        [217, 7, 0, 0],
        [440, 30, 95, 17],
        [571, 393, 95, 17],
        [830, 1072, 177, 25],
        [1287, 1965, 237, 41],
        [1975, 2684, 324, 56]
      ];

      var data2 = [
        [
          { name: "确诊", value: 217 },
          { name: "疑似", value: 7 },
          { name: "病重", value: 0 },
          { name: "死亡", value: 0 }
        ],
        [
          { name: "确诊", value: 440 },
          { name: "疑似", value: 30 },
          { name: "病重", value: 95 },
          { name: "死亡", value: 17 }
        ],
        [
          { name: "确诊", value: 571 },
          { name: "疑似", value: 393 },
          { name: "病重", value: 95 },
          { name: "死亡", value: 17 }
        ],
        [
          { name: "确诊", value: 830 },
          { name: "疑似", value: 1072 },
          { name: "病重", value: 177 },
          { name: "死亡", value: 25 }
        ],
        [
          { name: "确诊", value: 1287 },
          { name: "疑似", value: 1965 },
          { name: "病重", value: 237 },
          { name: "死亡", value: 41 }
        ],
        [
          { name: "确诊", value: 1975 },
          { name: "疑似", value: 2684 },
          { name: "病重", value: 324 },
          { name: "死亡", value: 56 }
        ]
      ];
      option = {
        baseOption: {
          timeline: { data: Datedata },
          title: {
            text: "疫情感染情况",
            subtext: "数据来源：中国国家卫生健康委员会",
            left: "center",
            textStyle: { color: "#eee" }
          },
          backgroundColor: "#0B1837",
          color: ["#FE5656", "#3DD1F9", "#FFAD05", "#906BF9"],
          xAxis: {
            axisLabel: {
              textStyle: { color: "#eee" }
            },
            splitLine: { show: false },
            min: 0,
            max: 3000
          },
          yAxis: {
            show: true,
            position: "right",
            splitLine: { show: false }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: "65%",
            top: "10%",
            data: situation,
            textStyle: { color: "#eee" }
          },
          grid: {
            left: "center",

            top: "50%",
            bottom: "20%"
          },
          series: [
            {
              id: "bar",
              yAxisIndex: 0,
              type: "bar",
              name: "情况",
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                  }
                }
              }
            },
            {
              id: "pie",
              name: "数据比重",
              type: "pie",
              roseType: "radius",
              center: ["50%", "30%"],
              radius: ["20%", "30%"],
              label: {
                formatter: "{abg|}\n\n  {b|{b}：} {c|{c}}",
                avoidLabelOverlap: true,
                borderWidth: 1,
                borderRadius: 3,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center"
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  c: {
                    color: "#eee",
                    backgroundColor: "#5045f6",
                    fontSize: 25,
                    padding: [3, 20],
                    borderRadius: 30
                  }
                }
              },
              data: []
            }
          ]
        },
        options: []
      };
      for (var i = 0; i < 6; i++) {
        option.options.push({
          yAxis: {
            type: "category",
            axisLabel: {
              textStyle: { color: "#eee" }
            },
            data: data2[i].map(function(ele) {
              return ele.name;
            })
          },
          series: [
            {
              id: "bar",
              data: data2[i].map(function(ele) {
                return ele.value;
              })
            },
            {
              id: "pie",
              data: data2[i]
            }
          ]
        });
      }

      testChart5.setOption(option);
    },

    drawChart6() {
      let testChart6 = this.$echarts.init(
        document.getElementById("testChart6")
      );
      var option = {};

      testChart6.setOption({
        backgroundColor: "black",
        normal: {
          top: 200,
          left: 300,
          width: 500,
          height: 400,
          zIndex: 6,
          backgroundColor: ""
        },
        color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        title: {
          show: true,
          text: "基础雷达图",
          left: "40%",
          top: "1%",
          textStyle: {
            fontSize: 18,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show: true,
          icon: "circle",
          left: "35%",
          top: "90%",
          orient: "horizontal",
          textStyle: {
            fontSize: 14,
            color: "#fff"
          },
          data: ["数据1", "数据2"]
        },
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 18,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "grey" //
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "grey" //
            }
          },
          indicator: [
            {
              name: "道路结冰",
              max: 88
            },
            {
              name: "暴雪",
              max: 88
            },
            {
              name: "暴雨",
              max: 88
            },
            {
              name: "冰雹",
              max: 88
            },
            {
              name: "大风",
              max: 88
            },
            {
              name: "大雾",
              max: 88
            },
            {
              name: "高温",
              max: 88
            },
            {
              name: "干旱",
              max: 88
            },
            {
              name: "寒潮",
              max: 88
            },
            {
              name: "雷电",
              max: 88
            },
            {
              name: "霾",
              max: 88
            },
            {
              name: "沙尘暴",
              max: 88
            },
            {
              name: "霜冻",
              max: 88
            },
            {
              name: "台风",
              max: 88
            },
            {
              name: "洪水",
              max: 88
            }
          ]
        },
        series: [
          {
            name: "数据1",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            areaStyle: {
              normal: {
                color: "rgba(245, 166, 35, 0.4)"
              }
            },
            itemStyle: {
              color: "rgba(245, 166, 35, 1)",
              borderColor: "rgba(245, 166, 35, 0.3)",
              borderWidth: 10
            },
            lineStyle: {
              normal: {
                type: "dashed",

                color: "rgba(245, 166, 35, 1)",
                width: 2
              }
            },
            data: [[80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]]
          },
          {
            name: "数据2",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: "rgba(19, 173, 255, 1)",
                borderColor: "rgba(19, 173, 255, 0.4)",
                borderWidth: 10
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(19, 173, 255, 0.5)"
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 2,
                type: "dashed"
              }
            },
            data: [[60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]]
          }
        ]
      });
    },
    drawChart7() {
      let testChart7 = this.$echarts.init(
        document.getElementById("testChart7")
      );
      var t = this;
      var option = {};

      //echarts折线图

      let dataList = [
        {
          name: "2020-06-10",
          value: "150"
        },
        {
          name: "2020-06-11",
          value: "170"
        },
        {
          name: "2020-06-12",
          value: "210"
        },
        {
          name: "2020-06-13",
          value: "240"
        },
        {
          name: "2020-06-14",
          value: "320"
        },
        {
          name: "2020-06-15",
          value: "272"
        },
        {
          name: "2020-06-16",
          value: "220"
        },
        {
          name: "2020-06-17",
          value: "160"
        }
      ];
      let dataList2 = [
        {
          name: "2020-06-10",
          value: "240"
        },
        {
          name: "2020-06-11",
          value: "220"
        },
        {
          name: "2020-06-12",
          value: "185"
        },
        {
          name: "2020-06-13",
          value: "175"
        },
        {
          name: "2020-06-14",
          value: "220"
        },
        {
          name: "2020-06-15",
          value: "310"
        },
        {
          name: "2020-06-16",
          value: "222"
        },
        {
          name: "2020-06-17",
          value: "135"
        }
      ];

      option = {
        backgroundColor: "#11183c",
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["摸鱼时长", "学习时长"],
          textStyle: {
            color: "#fff"
          }
        },
        title: {
          text: "今天你摸鱼了吗",
          left: 26,
          top: 26,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 50000,
            fontFamily: "PingFang SC"
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "5%",
          top: "8%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: dataList.length > 15 ? 35 : 100
          }
        ],
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#397cbc"
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          //轴线上的字
          axisLabel: {
            show: true,
            textStyle: {
              color: "#cecece",
              fontSize: "14"
            }
          },
          data: [
            "2020-06-10",
            "2020-06-11",
            "2020-06-12",
            "2020-06-13",
            "2020-06-14",
            "2020-06-15",
            "2020-06-16",
            "2020-06-17"
          ]
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 4,
            axisTick: {
              show: false
            },
            //轴线上的字
            axisLabel: {
              textStyle: {
                fontSize: "12",
                color: "#cecece"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#397cbc"
              }
            },
            //网格线
            splitLine: {
              lineStyle: {
                color: "#11366e"
              }
            }
          }
        ],
        series: [
          {
            name: "摸鱼时长",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            markPoint: {
              data: [
                {
                  name: "周最高",
                  value: 320,
                  xAxis: 4,
                  yAxis: 320
                }
              ]
            },
            itemStyle: {
              color: "#3eb5dd",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#57b3e5" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#31a9ea" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(249,165,137, 0.5)",
                shadowBlur: 30,
                shadowOffsetY: 5
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(58,182,224, 0.6)"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(58,182,224, 0.2)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(58,182,224, 0.01)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(58,182,224, 0.1)",
                shadowBlur: 6
              }
            },
            data: dataList
          },
          {
            name: "学习时长",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            itemStyle: {
              color: "#ff6b71",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },
            markPoint: {
              data: [{ name: "周最高", value: 310, xAxis: 5, yAxis: 310 }]
            },
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#ff874b" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#ff6b71" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(255,107,113, 0.5)",
                shadowBlur: 12,
                shadowOffsetY: 5
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,107,113, 0.6)"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(255,107,113, 0.2)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,107,113, 0.01)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(255,107,113, 0.4)",
                shadowBlur: 6
              }
            },
            data: dataList2
          }
        ]
      };

      testChart7.setOption(option);
    },
    drawChart8() {
      let testChart8 = this.$echarts.init(
        document.getElementById("testChart8")
      );
      var t = this;

      var option = {};
      var scale = 1;
      var echartData = [
        {
          value: 2154,
          name: "曲阜师范大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#E58B44" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3854,
          name: "潍坊学院",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#D95CFF" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3515,
          name: "青岛职业技术学院",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#06A3F4" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3515,
          name: "淄博师范高等专科",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#29AF62" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3854,
          name: "鲁东大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FF3939" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 2154,
          name: "山东师范大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#0b5263" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        }
      ];
      var total_datas = 0;
      for (var i = 0; i < echartData.length; i++) {
        total_datas += echartData[i].value;
      }

      var rich = {
          yellow: {
            color: "#ffc72b",
            fontSize: 15 * scale,
            // padding: [21, 0],
            align: "center"
          },
          total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: "center"
          },

          blue: {
            color: "#49dff0",
            fontSize: 16 * scale,
            align: "center"
          },
          hr: {
            borderColor: "#0b5263",
            width: "100%",
            borderWidth: 1,
            height: 0
          }
        },
        option = {
          backgroundColor: "#060d22",
          title: {
            text: "总数",
            subtext: total_datas,
            textStyle: {
              color: "#f2f2f2",
              fontSize: 40,
              align: "center"
            },
            subtextStyle: {
              fontSize: 30,
              color: ["#ff9d19"]
            },
            x: "center",
            y: "center"
          },
          legend: {
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
            orient: "vertical",
            // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            x: "left",
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            y: "center",
            itemWidth: 24, // 设置图例图形的宽
            itemHeight: 18, // 设置图例图形的高
            textStyle: {
              color: "#666" // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            data: [
              "曲阜师范大学",
              "潍坊学院",
              "青岛职业技术学院",
              "淄博师范高等专科",
              "鲁东大学",
              "山东师范大学"
            ]
          },

          series: [
            {
              name: "总考生数量",
              type: "pie",
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  borderColor: "#030d22"
                }
              },
              radius: ["38%", "50%"],
              hoverAnimation: false,
              color: [
                "#c487ee",
                "#deb140",
                "#49dff0",
                "#034079",
                "#6f81da",
                "#00ffb4"
              ],
              label: {
                normal: {
                  formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                      total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return (
                      "{yellow|" + params.value + "}\n{blue|" + percent + "%}"
                    );
                  },
                  rich: rich
                }
              },
              labelLine: {
                normal: {
                  length: 55 * scale,
                  length2: 10,
                  lineStyle: {
                    color: "#0b5263"
                  }
                }
              },
              data: echartData
            }
          ]
        };
      testChart8.setOption(option);
    },
    drawChart9() {
      let testChart9 = this.$echarts.init(
        document.getElementById("testChart9")
      );

      var option = {};
      var t = this;

      var scale = 1;
      var echartData = [
        {
          value: 2154,
          name: "曲阜师范大学"
        },
        {
          value: 3854,
          name: "潍坊学院"
        },
        {
          value: 3515,
          name: "青岛职业技术学院"
        },
        {
          value: 3515,
          name: "淄博师范高等专科"
        },
        {
          value: 3854,
          name: "鲁东大学"
        },
        {
          value: 2154,
          name: "山东师范大学"
        }
      ];
      var rich = {
        yellow: {
          color: "#ffc72b",
          fontSize: 30 * scale,
          padding: [5, 4],
          align: "center"
        },
        total: {
          color: "#ffc72b",
          fontSize: 40 * scale,
          align: "center"
        },
        white: {
          color: "#fff",
          align: "center",
          fontSize: 14 * scale,
          padding: [21, 0]
        },
        blue: {
          color: "#49dff0",
          fontSize: 16 * scale,
          align: "center"
        },
        hr: {
          borderColor: "#0b5263",
          width: "100%",
          borderWidth: 1,
          height: 0
        }
      };
      option = {
        backgroundColor: "#031f2d",
        title: {
          text: "总考生数",
          left: "center",
          top: "53%",
          padding: [24, 0],
          textStyle: {
            color: "#fff",
            fontSize: 18 * scale,
            align: "center"
          }
        },
        legend: {
          selectedMode: false,
          formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
              total += value.value;
            });
            return "{total|" + total + "}";
          },
          data: [echartData[0].name],
          // data: ['高等教育学'],
          // itemGap: 50,
          left: "center",
          top: "center",
          icon: "none",
          align: "center",
          textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
          }
        },
        series: [
          {
            name: "总考生数量",
            type: "pie",
            radius: ["42%", "50%"],
            hoverAnimation: false,
            color: [
              "#c487ee",
              "#deb140",
              "#49dff0",
              "#034079",
              "#6f81da",
              "#00ffb4"
            ],
            label: {
              normal: {
                formatter: function(params, ticket, callback) {
                  var total = 0; //考生总数量
                  var percent = 0; //考生占比
                  echartData.forEach(function(value, index, array) {
                    total += value.value;
                  });
                  percent = ((params.value / total) * 100).toFixed(1);
                  return (
                    "{white|" +
                    params.name +
                    "}\n{hr|}\n{yellow|" +
                    params.value +
                    "}\n{blue|" +
                    percent +
                    "%}"
                  );
                },
                rich: rich
              }
            },
            labelLine: {
              normal: {
                length: 55 * scale,
                length2: 0,
                lineStyle: {
                  color: "#0b5263"
                }
              }
            },
            data: echartData
          }
        ]
      };

      testChart9.setOption(option);
    },
    drawChart10() {
      let testChart10 = this.$echarts.init(
        document.getElementById("testChart10")
      );
      var option = {};
      var t = this;
      //数据
      var XName = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      var data1 = [
        [123, 154, 234, 321, 120, 390, 634],
        [63, 194, 234, 321, 278, 110, 534],
        [53, 254, 234, 321, 118, 240, 434],
        [23, 354, 334, 221, 178, 190, 234]
      ];
      var Line = [
        "云篆山水路线",
        "昕博朗学校路线",
        "新华小学路线",
        "云锦五路路线"
      ];
      var img = [
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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",
        "image://data:image/png;base64,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"
      ];
      var color = ["#00f8ff", "#00f15a", "#0696f9", "#dcf776"];

      //数据处理
      var datas = [];
      Line.map((item, index) => {
        datas.push({
          symbolSize: 150,
          symbol: img[index],
          name: item,
          type: "line",
          yAxisIndex: 1,
          data: data1[index],
          itemStyle: {
            normal: {
              borderWidth: 5,
              color: color[index]
            }
          }
        });
      });

      option = {
        backgroundColor: "#0e2147",
        grid: {
          left: "5%",
          top: "5%",
          bottom: "5%",
          right: "5%"
        },
        legend: {
          type: "scroll",
          data: Line,
          itemWidth: 18,
          itemHeight: 12,
          textStyle: {
            color: "#00ffff",
            fontSize: 14
          }
        },
        yAxis: [
          {
            type: "value",
            position: "right",
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          {
            type: "value",
            position: "left",
            nameTextStyle: {
              color: "#00FFFF"
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(135,140,147,0.8)"
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: "{value}",
              color: "#fff",
              fontSize: 14
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#6A989E"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#fff", // x轴颜色
                fontWeight: "normal",
                fontSize: "14",
                lineHeight: 22
              }
            },
            data: XName
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            //-----
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
          }
        ],
        series: datas
      };
      //当点击legend选项时折线上的小图片会消失，为避免这种情况，可以采取以下初始化方法 使用svg
      //var testChart4s = echarts.init(document.getElementById('AnalysisChartLine'), null, {renderer: 'svg'});
      //testChart4s.clear();
      //testChart4s.setOption(option)
      // testChart10.clear();
      testChart10.setOption(option);
    },
    drawChart11() {
      let testChart11 = this.$echarts.init(
        document.getElementById("testChart10")
      );
      var option = {};
      var t = this;

      let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      let xData = [
        "01:00",
        "03:00",
        "05:00",
        "07:00",
        "09:00",
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00"
      ];

      for (var i = 0; i < xData.length; i++) {
        dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
        dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
        dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
        dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
        dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
        dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      }
      console.log(dataC1);
      console.log(dataC2);
      console.log(dataC3);
      console.log(dataD1);
      console.log(dataD2);
      console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "#11183c",
        grid: {
          left: "5%",
          right: "2%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          data: ["C1", "C2", "C3", "D1", "D2", "D3"],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "35%", //距离右侧
          top: "5%"
          // left : '50%'
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#65aaf1"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1
              }
            },
            /*axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },*/
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: 'kw/h',
            nameTextStyle: {
              color: "#65aaf1",
              fontStyle: "normal"
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#65aaf1"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0a2b52"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        series: [
          {
            name: "C1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: dataC1
          },
          {
            name: "C2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC2
          },
          {
            name: "C3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC3
          },
          {
            name: "D1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,46,101,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD1
          },
          {
            name: "D2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "#6FE81A",
                lineStyle: {
                  color: "#6FE81A",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD2
          },
          {
            name: "D3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD3
          }
        ]
      };
      testChart11.setOption(option);
    },
    drawChart12() {
      let testChart12 = this.$echarts.init(
        document.getElementById("testChart12")
      );
      var option = {};
      var t = this;
      var img =
        "data:image/png;base64,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";
      var trafficWay = [
        {
          name: "向消防英雄致敬",
          value: 30.8
        },
        {
          name: "可敬的英雄战士、祖国和人民永远记得您们",
          value: 49.2
        },
        {
          name: "英雄家属节哀",
          value: 30
        },
        {
          name: "消防战士永垂不朽",
          value: 25.5
        },
        {
          name: "多灾多难",
          value: 55
        },
        {
          name: "祈求平安",
          value: 125
        },
        {
          name: "不要再有牺牲",
          value: 92
        },
        {
          name: "天佑四川、天佑西昌",
          value: 66
        },
        {
          name: "尽量减少人员伤亡和财产损失",
          value: 89
        },
        {
          name: "尽快灭火",
          value: 75
        },
        {
          name: "痛心、悲痛",
          value: 75
        },
        {
          name: "灭火英雄平安回来",
          value: 275.5
        },
        {
          name: "研究科学灭火方法",
          value: 35.7
        },
        {
          name: "严惩纵火者",
          value: 49.3
        },
        {
          name: "测查起火原因",
          value: 35
        }
      ];

      var lengArr = [];
      for (var k = 0; k < trafficWay.length; k++) {
        lengArr.push(trafficWay[k].name);
      }
      var data = [];
      var color = [
        "#006ced",
        "#006ced",
        "#006ced",
        "#006ced",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ffa800",
        "#ff3000",
        "#ff3000",
        "#ff3000"
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0
              }
            }
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [105, 109],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + "占百分比：" + percent + "%";
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: "#00ffff"
              }
            }
          },
          data: data
        }
      ];
      option = {
        backgroundColor: "#0A2E5D",
        color: color,
        title: {
          text: "舆论态势分布",
          top: "48%",
          textAlign: "center",
          left: "49.5%",
          textStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "400"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                image: img,
                width: 178,
                height: 178
              },
              left: "center",
              top: "center",
              position: [100, 100]
            }
          ]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'center',
          data: lengArr,
          bottom: 150,
          textStyle: {
            color: "#fff"
          },
          itemGap: 20
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: seriesOption
      };
      testChart12.setOption(option);
    },
    drawChart13() {
      let testChart13 = this.$echarts.init(
        document.getElementById("testChart13")
      );
      var option = {};
      var t = this;
      var legend = [
        "特色产业扶贫",
        "生态补偿扶贫",
        "劳务协助扶贫",
        "社会保障兜底扶贫",
        "危房改造脱贫",
        "医疗保障与社会保障扶贫",
        "教育助学扶贫",
        "异地搬迁扶贫",
        "金融扶贫",
        "饮水安全"
      ];

      var data = [];
      for (let i = 0; i < legend.length; i++) {
        data.push({
          name: legend[i],
          value: (Math.random() * 100000).toFixed(0)
        });
      }

      option = {
        backgroundColor: "#05274C",
        color: [
          "#2AC9FD",
          "#76FBC0",
          "#35C96E",
          "#FCC708",
          "#48B188",
          "#5957C2",
          "#4A5D73"
        ],
        tooltip: {
          //提示框
          trigger: "item",
          triggerOn: "mousemove",
          backgroundColor: "rgba(1,70,86,1)",
          borderColor: "rgba(0,246,255,1)",
          borderWidth: 0.5,
          textStyle: {
            fontSize: 14
          }
        },
        title: [
          {
            text: 18653,
            subtext: "救助人口",
            textStyle: {
              fontSize: 20,
              color: "#fff"
            },
            subtextStyle: {
              fontSize: 20,
              color: "#fff"
            },
            textAlign: "center",
            x: "50%",
            y: "47%"
          }
        ],
        series: [
          {
            color: [
              "#2AC9FD",
              "#76FBC0",
              "#35C96E",
              "#FCC708",
              "#48B188",
              "#5957C2"
            ],
            type: "pie",
            radius: ["62", "100"],
            labelLine: {
              normal: {
                length: 25,
                length2: 120,
                lineStyle: {
                  type: "solid"
                }
              }
            },
            label: {
              normal: {
                formatter: params => {
                  console.log(params);
                  return (
                    "{b| " +
                    params.name +
                    "}  " +
                    "{c|" +
                    params.percent.toFixed(0) +
                    "%}"
                  );
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -86],
                height: 70,
                fontSize: 13,
                align: "center",
                color: "#3494BD",
                rich: {
                  b: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: "#41B3DC",
                    padding: [0, 0, 5, 0]
                  },
                  c: {
                    fontSize: 20,
                    lineHeight: 20,
                    color: "orange"
                  }
                }
              }
            },
            data: data
          },
          {
            type: "pie",
            radius: ["50", "51"],
            data: [100],
            label: {
              show: false
            }
          }
        ]
      };
      testChart13.setOption(option);
    },
    drawChart14() {
      let testChart14 = this.$echarts.init(
        document.getElementById("testChart14")
      );
      var option = {};
      var t = this;
      function data() {
        var d = [];
        for (var i = 0; i < 24; i++) {
          d.push({ name: i + "~" + (i + 1), value: Math.random() * 100 });
        }
        return d;
      }

      option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          position: ["48.5%", "49.2%"],
          backgroundColor: "rgba(50,50,50,0)",
          textStyle: {
            color: "yellow",
            fontWeight: "bold"
          },
          formatter: "{d}%"
        },
        series: [
          {
            name: "上网时间",
            type: "pie",
            radius: ["5%", "70%"],
            roseType: "area",
            color: ["#3fa7dc"],
            data: data(),
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "",
            type: "gauge",
            min: 0,
            max: 24,
            startAngle: 90,
            endAngle: 449.9,
            radius: "82%",
            splitNumber: 24,
            clockwise: false,
            animation: false,
            detail: {
              formatter: "{value}",
              textStyle: {
                color: "#63869e"
              }
            },
            detail: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: [
                  [0.25, "#63869e"],
                  [0.75, "#ffffff"],
                  [1, "#63869e"]
                ],
                width: "40%",
                shadowColor: "#0d4b81", //默认透明
                shadowBlur: 40,
                opacity: 1
              }
            },
            splitLine: {
              length: 5,
              lineStyle: {
                color: "#ffffff",
                width: 2
              }
            },
            axisLabel: {
              formatter: function(v) {
                return v ? v : "";
              },
              textStyle: {
                color: "red",
                fontWeight: 700
              }
            },
            itemStyle: {
              normal: {
                color: "green",
                width: 2
              }
            }
          },
          {
            name: "",
            type: "gauge",
            min: 0,
            max: 24,
            startAngle: 90,
            endAngle: 449.9,
            radius: "72%",
            splitNumber: 24,
            clockwise: false,
            animation: false,
            detail: {
              formatter: "{value}",
              textStyle: {
                color: "#63869e"
              }
            },
            detail: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: [[1, "#E8E8E8"]],
                width: "10%",
                opacity: 0.8
              }
            },
            splitLine: {
              show: true,
              length: "92%",
              lineStyle: {
                color: "grey",
                width: "1"
              }
            },
            axisLabel: {
              show: false,
              formatter: function(v) {
                return v ? v : "";
              },
              textStyle: {
                color: "#fb5310",
                fontWeight: 700
              }
            },
            itemStyle: {
              normal: {
                color: "green",
                width: 2,
                borderWidth: 3
              }
            }
          }
        ]
      };

      testChart14.setOption(option);
    },
    drawChart15() {
      let testChart15 = this.$echarts.init(
        document.getElementById("testChart15")
      );
      var option = {};
      var t = this;

      option = {
        backgroundColor: "#404A59",
        color: ["#ffd285", "#ff733f", "#ec4863"],

        title: [
          {
            text: "城市宝周新增用户报表",
            left: "1%",
            top: "6%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            text: "用户来源占比",
            left: "83%",
            top: "6%",
            textAlign: "center",
            textStyle: {
              color: "#fff"
            }
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: 300,
          top: "7%",
          textStyle: {
            color: "#ffd285"
          },
          data: ["在大理", "标准版", "潍V"]
        },
        grid: {
          left: "1%",
          right: "35%",
          top: "16%",
          bottom: "6%",
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#FF4500"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          type: "value"
        },
        series: [
          {
            name: "在大理",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [90, 50, 39, 50, 120, 82, 80]
          },
          {
            name: "标准版",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [70, 50, 50, 87, 90, 80, 70]
          },
          {
            name: "潍V",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [290, 200, 20, 132, 15, 200, 90]
          },
          {
            type: "pie",
            center: ["83%", "33%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 335,
                name: "用户来源分析",
                itemStyle: {
                  normal: {
                    color: "#ffd285"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#ffd285",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 180,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#ffd285"
                    },
                    formatter: "\n手机号注册"
                  }
                }
              }
            ]
          },

          {
            type: "pie",
            center: ["83%", "72%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 435,
                name: "用户来源分析",
                itemStyle: {
                  normal: {
                    color: "#ff733f"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#ff733f",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 100,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#FF4500"
                    },
                    formatter: "\n三方快捷登陆"
                  }
                }
              }
            ]
          }
        ]
      };
      testChart15.setOption(option);
    },
    drawChart16() {
      let testChart16 = this.$echarts.init(
        document.getElementById("testChart16")
      );
      var option = {};
      var t = this;

      var scale = 1;
      var echartData = [
        {
          value: 2154,
          name: "曲阜师范大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#E58B44" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3854,
          name: "潍坊学院",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#D95CFF" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3515,
          name: "青岛职业技术学院",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#06A3F4" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3515,
          name: "淄博师范高等专科",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#29AF62" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 3854,
          name: "鲁东大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FF3939" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        },
        {
          value: 2154,
          name: "山东师范大学",
          itemStyle: {
            normal: {
              //颜色渐变
              color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#0b5263" },
                { offset: 1, color: "transparent" }
              ])
            }
          }
        }
      ];
      var total_datas = 0;
      for (var i = 0; i < echartData.length; i++) {
        total_datas += echartData[i].value;
      }

      var rich = {
          yellow: {
            color: "#ffc72b",
            fontSize: 15 * scale,
            // padding: [21, 0],
            align: "center"
          },
          total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: "center"
          },

          blue: {
            color: "#49dff0",
            fontSize: 16 * scale,
            align: "center"
          },
          hr: {
            borderColor: "#0b5263",
            width: "100%",
            borderWidth: 1,
            height: 0
          }
        },
        option = {
          backgroundColor: "#060d22",
          title: {
            text: "总数",
            subtext: total_datas,
            textStyle: {
              color: "#f2f2f2",
              fontSize: 40,
              align: "center"
            },
            subtextStyle: {
              fontSize: 30,
              color: ["#ff9d19"]
            },
            x: "center",
            y: "center"
          },
          legend: {
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
            orient: "vertical",
            // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            x: "left",
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            y: "center",
            itemWidth: 24, // 设置图例图形的宽
            itemHeight: 18, // 设置图例图形的高
            textStyle: {
              color: "#666" // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            data: [
              "曲阜师范大学",
              "潍坊学院",
              "青岛职业技术学院",
              "淄博师范高等专科",
              "鲁东大学",
              "山东师范大学"
            ]
          },

          series: [
            {
              name: "总考生数量",
              type: "pie",
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  borderColor: "#030d22"
                }
              },
              radius: ["38%", "50%"],
              hoverAnimation: false,
              color: [
                "#c487ee",
                "#deb140",
                "#49dff0",
                "#034079",
                "#6f81da",
                "#00ffb4"
              ],
              label: {
                normal: {
                  formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                      total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return (
                      "{yellow|" + params.value + "}\n{blue|" + percent + "%}"
                    );
                  },
                  rich: rich
                }
              },
              labelLine: {
                normal: {
                  length: 55 * scale,
                  length2: 10,
                  lineStyle: {
                    color: "#0b5263"
                  }
                }
              },
              data: echartData
            }
          ]
        };
      testChart16.setOption(option);
    },
    drawChart17() {
      let testChart17 = this.$echarts.init(
        document.getElementById("testChart17")
      );
      var option = {};
      var t = this;

      var data = [
        {
          name: "1",
          value: 10
        },
        {
          name: "2",
          value: 10
        },
        {
          name: "3",
          value: 10
        },
        {
          name: "4",
          value: 10
        },
        {
          name: "5",
          value: 10
        },
        {
          name: "6",
          value: 20
        },
        {
          name: "7",
          value: 30
        }
      ];

      option = {
        color: [
          "#A0CE3A",
          "#31C5C0",
          "#1E9BD1",
          "#0F347B",
          "#585247",
          "#7F6AAD",
          "#009D85",
          "rgba(250,250,250,0.3)"
        ],
        backgroundColor: "#000",
        title: {
          text: "总数",
          subtext: 7789,
          textStyle: {
            color: "#f2f2f2",
            fontSize: 40
            // align: 'center'
          },
          subtextStyle: {
            fontSize: 30,
            color: ["#ff9d19"]
          },
          x: "center",
          y: "center"
        },
        grid: {
          bottom: 150,
          left: 100,
          right: "10%"
        },
        legend: {
          orient: "vertical",
          top: "middle",
          right: "5%",
          textStyle: {
            color: "#f2f2f2",
            fontSize: 25
          },
          icon: "roundRect",
          data: data
        },
        series: [
          // 主要展示层的
          {
            radius: ["30%", "61%"],
            center: ["50%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: true,
                formatter: "{c}%",
                textStyle: {
                  fontSize: 30
                },
                position: "outside"
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: true
              }
            },
            name: "民警训练总量",
            data: data
          },
          // 边框的设置
          {
            radius: ["30%", "34%"],
            center: ["50%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  color: "rgba(250,250,250,0.3)"
                }
              }
            ]
          },
          {
            name: "外边框",
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ["50%", "50%"],
            radius: ["65%", "65%"],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 9,
                name: "",
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    borderColor: "#0b5263"
                  }
                }
              }
            ]
          }
        ]
      };
      testChart17.setOption(option);
    },
    drawChart18() {
      let testChart18 = this.$echarts.init(
        document.getElementById("testChart18")
      );
      var option = {};
      var t = this;

      var scaleData = [
        {
          name: "工程建设",
          value: 10
        },
        {
          name: "产权交易",
          value: 10
        },
        {
          name: "土地交易",
          value: 10
        },
        {
          name: "其他交易",
          value: 10
        },
        {
          name: "土地交易",
          value: 10
        },
        {
          name: "其他交易",
          value: 10
        }
      ];
      var rich = {
        white: {
          color: "#ddd",
          align: "center",
          padding: [3, 0]
        }
      };
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        }
      };
      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000"
      ];
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: "",
            itemStyle: placeHolderStyle
          }
        );
      }
      var seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [195, 200],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + "\n{white|" + "占比" + percent + "%}";
                  } else {
                    return "";
                  }
                },
                rich: rich
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: "#00ffff"
              }
            }
          },
          data: data
        }
      ];
      option = {
        backgroundColor: "#04243E",
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      };
      testChart18.setOption(option);
    },
    drawChart19() {
      let testChart19 = this.$echarts.init(
        document.getElementById("testChart19")
      );
      var option = {};
      var t = this;

      var colorArr = [
        "#218de0",
        "#01cbb3",
        "#85e647",
        "#5d5cda",
        "#05c5b0",
        "#c29927"
      ];
      var colorAlpha = [
        "rgba(60,170,211,0.05)",
        "rgba(1,203,179,0.05)",
        "rgba(133,230,71,0.05)",
        "rgba(93,92,218,0.05)",
        "rgba(5,197,176,0.05)",
        "rgba(194,153,39,0.05)"
      ];
      option = {
        backgroundColor: "#090e36",
        grid: {
          left: -100,
          top: 50,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: false
        },

        polar: {},
        angleAxis: {
          interval: 1,
          type: "category",
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B4A6B",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: 20,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B3E5E",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#07385e",
              width: 2,
              type: "dashed"
            }
          }
        },
        calculable: true,
        series: [
          {
            stack: "a",
            type: "pie",
            radius: "80%",
            roseType: "radius",
            zlevel: 10,
            startAngle: 100,
            label: {
              normal: {
                formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
                rich: {
                  b: {
                    color: "#3bd2fe",
                    fontSize: 14,
                    lineHeight: 20
                  },
                  d: {
                    color: "#d0fffc",
                    fontSize: 14,
                    height: 20
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 45,
                lineStyle: {
                  color: "#0096b1"
                }
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 63,
                name: "容量小设备老旧",
                itemStyle: {
                  borderColor: colorArr[0],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: "#41a8f8",
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[0]
                }
              },
              {
                value: 27,
                name: "季节性企业用电",
                itemStyle: {
                  borderColor: colorArr[1],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: colorArr[1],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[1]
                }
              },
              {
                value: 7,
                name: "企业用电高峰",
                itemStyle: {
                  borderColor: colorArr[2],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: colorArr[2],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[2]
                }
              },
              {
                value: 13,
                name: "节假日",
                itemStyle: {
                  borderColor: colorArr[3],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: colorArr[3],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[3]
                }
              },
              {
                value: 10,
                name: "临时用电",
                itemStyle: {
                  borderColor: colorArr[4],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: colorArr[4],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[4]
                }
              },
              {
                value: 6,
                name: "三相用电不平衡",
                itemStyle: {
                  borderColor: colorArr[5],
                  borderWidth: 2,
                  shadowBlur: 20,
                  shadowColor: colorArr[5],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color: colorAlpha[5]
                }
              }
            ]
          }
        ]
      };
      testChart19.setOption(option);
    },
    drawChart20() {
      let testChart20 = this.$echarts.init(
        document.getElementById("testChart20")
      );
      var option = {};
      var t = this;

      var scaleData = [
        {
          name: "工程建设",
          value: 10
        },
        {
          name: "产权交易",
          value: 20
        },
        {
          name: "土地交易",
          value: 20
        },
        {
          name: "其他交易",
          value: 27
        },
        {
          name: "政府采购",
          value: 23
        }
      ];
      var rich = {
        white: {
          color: "#ddd",
          align: "center",
          padding: [5, 0]
        }
      };
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        }
      };
      var data = [];
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 30,
                borderColor: new t.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#7777eb"
                  },
                  {
                    offset: 1,
                    color: "#70ffac"
                  }
                ]),
                shadowColor: "rgba(142, 152, 241, 0.6)"
              }
            }
          },
          {
            value: 4,
            name: "",
            itemStyle: placeHolderStyle
          }
        );
      }
      var seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [195, 200],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + "\n{white|" + "占比" + percent + "%}";
                  } else {
                    return "";
                  }
                },
                rich: rich
              },
              labelLine: {
                show: false
              }
            }
          },
          data: data
        }
      ];
      option = {
        backgroundColor: "#04243E",
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      };
      testChart20.setOption(option);
    },
    drawChart21() {
      let testChart21 = this.$echarts.init(
        document.getElementById("testChart21")
      );
      var option = {};
      var t = this;

      // Generate data
      var category = [
        "0:00",
        "1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
      ];
      var dottedBase = [];
      var lineData = [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        59521,
        67560,
        18092,
        20728,
        24045,
        28348
      ];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        4555
      ];
      var rateData = [
        1832,
        2028,
        2445,
        2838,
        3288,
        3607,
        3967,
        4415,
        4844,
        5045,
        5061,
        6677,
        5521,
        6560,
        1092,
        2028,
        2045,
        2348
      ];
      var rateData1 = [
        460,
        500,
        550,
        1500,
        750,
        850,
        900,
        1200,
        1400,
        2150,
        2320,
        2445,
        2550,
        330,
        460,
        500,
        550,
        455
      ];

      // option
      option = {
        title: {
          text: "商城流量统计",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        backgroundColor: "#191E40",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["line", "bar", "tiled"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ["浏览量", "商品浏览量", "访客数", "商品访问数"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "7%"
        },
        grid: {
          x: "12%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],

        series: [
          {
            name: "浏览量",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(156,107,211,0.5)"
                  },
                  {
                    offset: 0.2,
                    color: "rgba(156,107,211,0.3)"
                  },
                  {
                    offset: 1,
                    color: "rgba(156,107,211,0)"
                  }
                ])
              }
            },
            z: -12,

            data: lineData
          },
          {
            name: "商品浏览量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#956FD4"
                  },
                  {
                    offset: 1,
                    color: "#3EACE5"
                  }
                ])
              }
            },
            data: barData
          },
          {
            name: "访客数",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: rateData
          },
          {
            name: "商品访问数",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#00ca95"
              }
            },
            data: rateData1
          }
        ]
      };
      testChart21.setOption(option);
    },
    drawChart22() {
      let testChart22 = this.$echarts.init(
        document.getElementById("testChart22")
      );
      var option = {};
      var t = this;

      // Generate data
      var category = [];
      var dottedBase = +new Date();
      var lineData = [];
      var barData = [];

      for (var i = 0; i < 20; i++) {
        var date = new Date((dottedBase += 1000 * 3600 * 24));
        category.push(
          [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
        );
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
      }

      // option
      option = {
        backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#333"
            }
          }
        },
        legend: {
          data: ["line", "bar"],
          textStyle: {
            color: "#ccc"
          }
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        series: [
          {
            name: "line",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 15,
            data: lineData
          },
          {
            name: "bar",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#14c8d4" },
                  { offset: 1, color: "#43eec6" }
                ])
              }
            },
            data: barData
          },
          {
            name: "line",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(20,200,212,0.5)" },
                  { offset: 0.2, color: "rgba(20,200,212,0.2)" },
                  { offset: 1, color: "rgba(20,200,212,0)" }
                ])
              }
            },
            z: -12,
            data: lineData
          },
          {
            name: "dotted",
            type: "pictorialBar",
            symbol: "rect",
            itemStyle: {
              normal: {
                color: "#0f375f"
              }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
          }
        ]
      };
      testChart22.setOption(option);
    },
    drawChart23() {
      let testChart23 = this.$echarts.init(
        document.getElementById("testChart23")
      );
      var option = {};
      var t = this;
      // Generate data
      var category = [
        "市区",
        "万州",
        "江北",
        "南岸",
        "北碚",
        "綦南",
        "长寿",
        "永川",
        "璧山",
        "江津",
        "城口",
        "大足",
        "垫江",
        "丰都",
        "奉节",
        "合川",
        "江津区",
        "开州",
        "南川",
        "彭水",
        "黔江",
        "石柱",
        "铜梁",
        "潼南",
        "巫山",
        "巫溪",
        "武隆",
        "秀山",
        "酉阳",
        "云阳",
        "忠县",
        "川东",
        "检修"
      ];
      var dottedBase = [];
      var lineData = [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        59521,
        67560,
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        36097,
        39867,
        44715,
        48444,
        50415,
        50061,
        32677,
        49521,
        32808
      ];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        22500,
        14000,
        21500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
      ];
      var rateData = [];
      32808;
      for (var i = 0; i < 33; i++) {
        // var date = i+2001;
        // category.push(date)
        var rate = barData[i] / lineData[i];
        rateData[i] = rate.toFixed(2);
      }

      // option
      option = {
        title: {
          text: "增量设备贯通情况-单位",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        backgroundColor: "#191E40",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["已贯通", "计划贯通", "贯通率"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "7%"
        },
        grid: {
          x: "12%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],

        series: [
          {
            name: "贯通率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: rateData
          },

          {
            name: "已贯通",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },
            data: barData
          },

          {
            name: "计划贯通",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(156,107,211,0.5)" },
                  { offset: 0.2, color: "rgba(156,107,211,0.3)" },
                  { offset: 1, color: "rgba(156,107,211,0)" }
                ])
              }
            },
            z: -12,

            data: lineData
          }
        ]
      };
      testChart23.setOption(option);
    },
    drawChart24() {
      let testChart24 = this.$echarts.init(
        document.getElementById("testChart24")
      );
      var option = {};
      var t = this;

      var data = [];
      var labelData = [];
      for (var i = 0; i < 24; ++i) {
        data.push({
          value: Math.random() * 10 + 10 - Math.abs(i - 12),
          name: i + ":00"
        });
        labelData.push({
          value: 1,
          name: i + ":00"
        });
      }

      option = {
        title: {
          text: "24小时用电量分析",
          left: "50%",
          textAlign: "center",
          top: "20%"
        },
        color: [
          "#27D38A",
          "#FFCA1C",
          "#5DD1FA",
          "#F88E25",
          "#47A0FF",
          "#FD6565"
        ],
        series: [
          {
            type: "pie",
            data: data,
            roseType: "area",
            itemStyle: {
              normal: {
                color: "white",
                borderColor: "#22C3AA"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            type: "pie",
            data: labelData,
            radius: ["75%", "100%"],
            zlevel: -2,
            itemStyle: {
              normal: {
                color: "#22C3AA",
                borderColor: "white"
              }
            },
            label: {
              normal: {
                position: "inside"
              }
            }
          }
        ]
      };

      testChart24.setOption(option);
    },
    drawChart25() {
      let testChart25 = this.$echarts.init(
        document.getElementById("testChart25")
      );
      var option = {};
      var t = this;

      var img =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAYAAACJm/9dAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAE/9JREFUeJztnXmQVeWZxn/dIA2UgsriGmNNrEQNTqSio0IEFXeFkqi4kpngEhXjqMm4MIldkrE1bnGIMmPcUkOiIi6gJIragLKI0Songo5ZJlHGFTADaoRuhZ4/nnPmnO4+l+7bfc85d3l+VV18373n3Ptyvve53/5+da1L6jDdYjgwBhgNHALMBn6Sq0VdcxlwGvACsAx4HliTq0VlRlNzY+LrfTO2o5LoDxwOHAmMA/4WiP+KzM3DqCJpAA4K/i4F2oBXgWbgWWAxsDEv48oZC6M9Q4EJwInAMcDAfM0pOXXA14K/y4FPgQXAfOBxYF1+ppUXFgYMBiYCp6PaoU+B694HFqEmyVJgVSbW9Y6bgCeBb6Am4GHALrH3B6L/+0RgM6pFHgQeAzZkaWi5UVejfYx64AjgXOAk1OToSCtqajyFHGZlVsalzH7oB+BYJJR+Cde0oKbi3cBCYEtWxmVNoT5GrQljGHAecD7wxYT3P0bNirlIEB9lZ1ouDEICOQk1H7dLuOYt4C7gZ8Da7EzLhloXxv7AJcCZdK4dWpAIHkDt7FrtjA5A/aszkFiSntP9wAzgP7M1LT0KCaM+YzuyZixy+leAb9O+sN9AHdDd0S/mbGpXFKD/+2z0LHZHz+aN2PsN6Bm+gjrsY7M2MEuqVRhHoU7yYjS6FPI5MAc4FNgHzUN4JKYz69Cz2Qc9qzno2YUcjZ7t8iBddVSbMEYDzwFPA6Nir28Afgx8CZiERpVM91iKntnfoGcYH606BNUez6GRr6qhWoSxF/AoKsQxsdfXAj9AHe2rgNXZm1Y1/A96hl8E/pn2HfExwBJUBntlb1rpqXRhbA/cDLyGxuJDPgSuBPYErqPGx+RLzAagCT3bK9GzDpmIyuJmVDYVS6UKow74e+APwPeIxuI/AX6Emkw3opldkw6fome8F3rmnwSv90Nl8gdURhU57FmJwtgHdfx+jpZwgCag7gW+DFyDa4gsWY+e+ZdRGYSTgUNRGS1GZVZRVJIwtgF+iMbQ4/2IF4ADgHOA93Kwy4j3UBkcgMokZAwqsx+iMqwIKkUYI4AXgelEzab1wAVoNOSVnOwynXkFlckFqIxAZTYdleGInOwqinIXRh1wMfASMDL2+hxgb+BOqngdTwWzBZXN3qisQkaisryYMu97lLMwhgHzgJ+ivRGgIcJJwd8HOdllus8HROUVDu/2R2U6D5VxWVKuwjgEVcnjY689jqrhOYl3mHJmDiq7x2OvjUdlfEguFnVBOQrju2gmdbcgvwmYitbweFtm5bIGleFUVKagMn4OlXlZUU7C6A/MQqs3w9GLN4ADgZloW6apbNpQWR5ItEBxG1Tms4iazLlTLsLYCW2IOTv22iNor3Il7JQzxbEKle0jsdfORj6wUy4WdaAchDEC+A1RW3MzcAVwKtW/UaiW+QiV8RWozEE+8Bu0yzBX8hbGwaiNuUeQ/xi1Q2/CTadaoA2V9Umo7EG+8Dw57/fIUxhHAs8AOwb5t9Cy8fm5WWTyYj4q+7eC/PZoOfspeRmUlzBOBn4FbBvkX0XVaLUEHDDFsxL5wG+DfAOKWHJOHsbkIYwpaAtluLRjEdol5nVO5j20tmpRkO+DAjFclLUhWQvjUhSSJYzdNA84DneyTcRHyCfmBfk64HYUbjQzshTGVOBWojUys9GoREuGNpjKoAX5xuwgXwfcQoY1R1bCmILWx4SimAWcBXyW0febyuMz5COzgnxYc0zJ4suzEMZEFKwrFMVDKAzL5oJ3GCM2I195KMjXIV86Ke0vTlsYR6CRhbBPMReYjEVhus9mNCseRpfvg5pYR6T5pWkKYz8UNSIcfVqIzmpoTfE7TXXyGfKdhUG+H/Kt1GbI0xLGMODXKJI4aIz6m1gUpue0Ih8Kw4MORj6Wyp6ONITRADyBwjyC4hEdjwMUmN6zAUU+fDPI7458LSlafa9IQxh3oZWToP/ICcDbKXyPqU3WouDT4Q/tQcjnSkqphXEJ6lyDOk2T8TIPU3pW0n4QZzLyvZJRSmGMQislQ65C1ZwxafAEioQYchPt4xX3ilIJYygaaw5HoB5BM5XGpMmtwMNBuh/ywaGFL+8+pRBGHYpAF+7R/h2anfR+CpM2bWj1bbhNdjfki70OzVMKYVxEFM1jE955Z7Il3AkYHvoznhKsqeqtML6KIluHfB93tk32rEK+F3Iz8s0e0xth9EXVVhjZ4QkUAcKYPPg3orhV/YH76MVx3b0RxhXA3wXpdehoYPcrTF60oRN5w6PjDkQ+2iN6Kox9UOj3kAtxMDSTP2uQL4ZcA+zbkw/qiTDqULUVTsM/RDRkZkzePEy0TL0B+WrRo1Q9Eca3iEKbrKfEM47GlIBLgP8N0mPQyU5FUawwdqDz7Lajjpty4wPg6lj+RqIwTd2iWGE0Ei3zXUEKi7eMKRF3IR8F+ew1W7m2E8UI4ytEEydbUIRqH9piypWOPnoR8uFuUYwwbiKKQj4LeLmIe43Jg5eJgilsQ/tuwFbprjBGEy37+IT27TdjypmriY5aHo/OB+yS7grjulj6JzhqoKkc3gNui+X/pTs3dUcYRxMNz/4FLyc3lcfNyHdBvnxMVzd0RxiNsfQNeO+2qTw2IN8N6XKEqithjCXaFbUWuKNndhmTOzOJ1lGNoovzN7oSxrRY+jbg057bZUyu/BX1j0OmFboQti6Mkah/AVr64SXlptKZiXwZ5NsjC124NWFcGkvfHftAYyqV9bRfrXFpoQvrWpckLjwcigKl9Qc+B74ErC6hgcbkxR7Af6NNTK3Abk3Njes6XlSoxvgO0c68R7EoTPWwGvk0KLLIBUkXJQmjHu3GC5lRWruMyZ24T58zbdy1nXSQJIxxwJ5B+nVgWentMiZXliHfBvn6kR0vSBJG/JTMu0tvkzFlQdy3O53S1LHzPRht8mhA56DtTjQpYkw1MQR4h8jXd25qbvz/kdeONcZEor3cT2FRmOrlQ3S+Bsjn2x1f1lEYZ8TSD6RolDHlwP2x9JnxN+JNqWHAu2h892NgZ7wExFQ3A4H3ge3QkQK7NjU3roH2NcaJRJHb5mNRmOrnU+TroEMvw8147YQxIZaeizG1QdzXTwwTYVNqAOpoD0Q99GGoOWVMtTMIRTBsQBHThzQ1N24Ma4zDkCgAFmNRmBqhqbnxI+C5IDsAOByiplR85m9BhnYZUw48FUsfCcnCeCYzc4wpD+I+Pw7UxxiOhqzq0HDtbgk3GlOVNDUrpMG0cde+A+yKjhPYuR7F2QknM57PxTpj8ifsZ9QBh9ajYGohS7O3x5iyIL6KfFQ9cHDsBQvD1Cpx3z+4LzAHnV3Whg75M6YWWQVciZpSrYX2fBtTE4Sd746U4pxvY6oOC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxLoC1wKNABtwC3A5lwtMiYHpo27tg/wPaAOaO0LnAqMCt5fAPw2J9uMyZMRwI+D9PJ6YEXszW9kb48xZUHc91fUA8sKvGlMLTE6ll5eDyxF/QuAMdnbY0xZMDb4tw1YUg+sAVYGL+6K2lrG1AzTxl07Avk+wMqm5sY14XBtc+y6o7I1y5jcift8M0TzGM/E3jgmM3OMKQ+OjaWfBahrXVIHMABYBwwEWoBhwMdZW2dMDgxC3YkGYCMwpKm5cWNYY2wEng7SDcBx2dtnTC4ci3weYEFTc+NGaL8k5IlY+qSsrDImZ+K+/qsw0VEYnwfpE1GzyphqZgDyddBSqMfDN+LCWAssCtLbAeMzMc2Y/DgB+TrAwqbmxjXhGx1X194fS5+WtlXG5MyZsfQD8Tc6CmMuGpUCOB4YkqJRxuTJEOTjIJ9/LP5mR2GsR+IA9dS/lappxuTHZKLRqLlNzY3r428mbVS6N5Y+Ny2rjMmZuG/f2/HNJGE8C7wZpPel/apDY6qB0cBXg/SbBLPdcZKEsQW4J5a/pORmGZMvcZ++p6m5cUvHCwrt+f53ok74N4E9SmyYMXmxB/JpgFbk650oJIx1wOwg3Rf4bklNMyY/LkY+DfBgU3PjuqSLthYl5LZY+lxg+xIZZkxeDAbOi+VvK3Th1oTxCtHCwu2BC3tvlzG5chHRD/wzyMcT6SquVFMsfRleP2Uql4HIh0Ou39rFXQnjOWB5kB4GTO25XcbkylTkwyCfXrSVa7sViXB6LH0VaqcZU0kMRr4b8qOubuiOMBagmgNgR+Dy4u0yJle+j3wX5MtPdXVDd2PX/iCWvhzYpTi7jMmNXVAY2pAfFLowTneFsZRoh9+2dNFxMaaMuB75LMiHl3bnpmKinf8T8FmQngwcUMS9xuTBAchXQb57RXdvLEYYvwNmxu77aZH3G5MlHX10JvBGMTcXw3S0BRbgYNrPIhpTTpyHfBS0xGn6Vq7tRLHC+AtqUoVcD+xU5GcYkzbDad8PvgL5brfpSVPoP4iGb3cA/rUHn2FMmsxAvgnwPPDzYj+gJ8JoQ+umwmXppwGn9OBzjEmDU4gCebQgX20rfHkyPe08/xft22wzUfVlTJ4MB+6I5acDr/fkg3ozqnQj8FKQHgbchc4vMyYP6pAPhj/QLyMf7RG9EcbnwLeBTUF+Al6abvLjQuSDoCbUPxBF1iya3s5DvEb7SZNbgP16+ZnGFMsI4OZY/irkmz2mFBN0twPzg3R/YA4KrW5MFgxCPjcgyD9JCUZKSyGMNmAK8E6Q/wqK0+P+hkmbOhTRZu8g/w5qQhU9CtWRUi3pWIuGyFqD/MnoMHFj0uRyoqmCVuSDawpf3n1KudZpGe1nxW/AEdNNeownOrAe5HvLClxbNKVeBDgD+EWQ7gPMwp1xU3r2Q77VJ8j/AvleyUhjdex5wItBejA6pWb3FL7H1CbD0AEv4RbrF0lhMWsawtiExpPfDvJfAH6N94qb3jMYhXTaM8i/jXxtU6Ebekpa+ynWoLMHNgT5/YBHgX4pfZ+pfvohH9o/yG9APlaSznZH0txotBLFCA1Hqo5AYT8tDlMs2yDfOSLItyLfWpnWF6a9A28hcBY6+A90Qma802RMV/RBnevwdNXN6IiwhWl+aRZbUx8GvkM06TIJuA+Lw3RNH+Qrk4J8G3A+8EjaX5zVnu170JkEoTgmA79EVaQxSWyDaoowmEEb8qFOpx+lQZbBDG5HM5WhOE4DHsJ9DtOZfsg3Tg/ybSho2u1ZGZB1lI/bUFUY73M8hRcdmohBaCFg2KdoQ+ez3JqlEXmEv7mb9uuqDkd7yB3d0OyMfCEcfdqMfkjvKHhHSuQVF+oR4ETgr0F+fxSB2stHapcRwAtE8xQtwBnohzRz8gyY9gxwJFFYkz3RIrAT8jLI5MYJ6IdxzyC/HjgO7bPIhbwjCa4ADgNWB/ntgHlopaT3c1Q/dahTPQ+VPcgXxtLF+RVpk7cwQLOXB6FqFDR2fSPeCVjthDvvbiKa01qBfOHVvIwKKQdhALyPOly/jL12Mlo5OSIXi0yajEBle3LstfvRQMz7uVjUgXIRBmiF5NnAPxJFVd8bhei5CDetqoE6VJYvEW1H/QyV+VmksEq2p5STMEJmoF+OcA95fzRcNxcHdatkhqMyvAOVKaiMD6PEm4xKQTkKAzQ6NRJtcgqZgPojp+ZikekNp6CymxB7bT4q4+WJd+RMuQoDFGBhPKpmwyp2OFoqMBtHWa8EhgMPok52WNtvQjPZE4iOlCg7ylkYoOUAM4ADaX9Y+SQUP/d8yv//UIvUo7J5gyjAMqgMD0Rrnnod4iZNKsWpVqFhvEaipSQ7AHcCS1CVbMqDkahM7iQKxd+Kyu4gVJZlT6UIAzR6MZ3owYeMQgF878HrrfJkF1QGL6MyCQl/uKYTjTaWPZUkjJDX0czoFHSEFOj/MQX4PXAtDryQJYPRM/89KoPQp9YF+bH0MBR/nlSiMEDt0/vQWPhMoqjW2wLXAH9Ey0oG5mJdbTAQPeM/omceHhn8OSqTfVAZlXVfohCVKoyQD4GpwNdQiJ6QoWhZyZ+BaXhpSSkZhJ7pn9EzHhp770lUFlOJavOKpNKFEfI6WqF5KO37H8OB69DCtBtQjCvTM76ADnxcjZ5pfLJ1CXr2x1OBzaYkqkUYIUuBMcAxRIsSQe3gK4E/oTmQ0dmbVrGMRs/sT+jciXj/bQVwLHrmS7M3LT2qTRghT6ORkcODdEhfNAeyFB0schmwY+bWlT9D0LN5DT2rSejZhTyNnu0hwILMrcuAahVGyGJUe3wdHWnbEntvX7SP+F3gMbTUZAC1ywAkgMfQGqZb0TMKaUHP8OvomS7O1rxsqWtdUlOLVoejGdnzgD0S3v8IreGZi4I0fJydabmwHWoKTUR9tKRBitXo0MefkVI4zDxpam5MfL3WhBFSj/Z/nI/W7DQkXNOCdpE9jbbhVsSMbTcYARwFHI2aQ4X+748jQTQDWzKzLmMKCaNv4qvVzxbg2eBve/SLeTowjmg3WQP6NT02yL+Lmg/Lgr9VRGGAypU+SAijg7/DgF0LXLsZiWA2Cp68PgP7ypZarTEKMQzVIOPRr+rWJgivRkPA5cxVaIi1EJ+i2vAJVEOU7WrXtHCN0T3WovU+96DO6OEoksk4FNqn0n9F2tC+iGZUWy4CNuZqUZliYRRmI5pND2fUd0JDwKPRMGVLgfvKiRa0EegF1PxbDnyQq0UVwv8BNYmwIpIWBvwAAAAASUVORK5CYII=";
      var trafficWay = [
        {
          name: "优秀学生",
          value: 20
        },
        {
          name: "获得荣誉",
          value: 10
        },
        {
          name: "论文著作",
          value: 30
        }
      ];

      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000"
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0
              }
            }
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [105, 109],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return (
                      params.name + "\n" + "\n" + "占百分比：" + percent + "%"
                    );
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: "#00ffff"
              }
            }
          },
          data: data
        }
      ];
      option = {
        backgroundColor: "#0A2E5D",
        color: color,
        title: {
          text: "广州市天河区教学成果分析",
          top: "48%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 14,
            fontWeight: "400"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                image: img,
                width: 178,
                height: 178
              },
              left: "center",
              top: "center",
              position: [100, 100]
            }
          ]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          data: ["优秀学生", "获得荣誉", "论文著作"],
          right: 250,
          bottom: 100,
          align: "right",
          textStyle: {
            color: "#fff"
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      };
      testChart25.setOption(option);
    },
    drawChart26() {
      let testChart26 = this.$echarts.init(
        document.getElementById("testChart26")
      );
      var option = {};
      var t = this;
      var xData = (function() {
        var data = [
          "新福利",
          "溢通公司",
          "南沙巴士",
          "从化分公司",
          "花都恒通",
          "二巴一分",
          "二巴二分",
          "番禺片区",
          "佛广集团",
          "客运旅包"
        ];
        return data;
      })();

      option = {
        backgroundColor: "RGBA(7, 28, 51, 1)",
        legend: {
          data: [
            "违反禁止标志、标线指示",
            "不按交通信号灯通行",
            "车辆交通事故,证据收集",
            "超速",
            "不按规定车道行驶",
            "其它",
            "上期宗数",
            "交通违法频率"
          ],
          left: "15%",
          top: 20,
          itemWidth: 60,
          itemHeight: 30,
          type: "plain",
          textStyle: {
            color: "RGBA(154, 209, 253, 1)"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.7)",
              fontSize: 18
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "RGBA(3, 75, 97, 1)"
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: 20
            },
            splitArea: {
              show: false
            }
          },
          {
            splitLine: {
              show: false
            },
            type: "value",
            min: 0,
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: 20
            }
          }
        ],
        series: [
          {
            name: "违反禁止标志、标线指示",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(48, 112, 255, 1)",
                opacity: 1
              }
            },
            data: [16, 11, 8, 14, 17, 16, 11, 8, 14, 17]
          },

          {
            name: "不按交通信号灯通行",
            type: "bar",
            stack: "1",
            itemStyle: {
              normal: {
                color: "rgba(43, 48, 235, 1)",
                opacity: 1
              }
            },
            data: [9, 7, 3, 2, 6, 9, 7, 3, 2, 6]
          },
          {
            name: "车辆交通事故,证据收集",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(229,99,135, 1)",
                opacity: 1
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "超速",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(64, 169, 255, 1)",
                opacity: 1
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "不按规定车道行驶",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(0, 215, 255, 1)"
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "其它",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(0, 255, 180, 1)",
                opacity: 1
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "上期宗数",
            type: "bar",
            stack: "2",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(92, 219, 211, 1)",
                opacity: 1
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "交通违法频率",
            type: "line",
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: "emptyCircle",
            itemStyle: {
              normal: {
                color: "rgba(192, 0, 255, 1)",
                barBorderRadius: "100%"
              },
              borderWidth: 5
            },
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(192, 0, 255, 0.5)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(192, 0, 255, 0.5)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            data: [25, 20, 16, 10, 5, 25, 20, 16, 10, 5]
          }
        ]
      };
      testChart26.setOption(option);
    },
    drawChart27() {
      let testChart27 = this.$echarts.init(
        document.getElementById("testChart27")
      );
      var option = {};
      var t = this;

      var option = {
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 160,
          boundaryGap: ["0", "100"],
          startAngle: 202.5
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [, , 40],
            coordinateSystem: "polar",
            barMaxWidth: 40,
            z: 2,
            name: "已交割",
            roundCap: true,
            color: "#4A90E2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 50],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "执行中",
            roundCap: true,
            color: "#3768a2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "C",
            roundCap: true,
            color: "#F1F3F8",
            barGap: "-100%"
          }
        ],
        legend: {
          show: true,
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20,
          textStyle: {
            fontSize: 16,
            color: "#c0c0c0"
          },
          top: "35%",
          left: "center",
          data: ["已交割", "执行中"]
        },
        tooltip: {
          show: false
        },
        graphic: [
          {
            type: "group",
            top: "middle",
            left: "center",
            id: "data",
            children: [
              {
                type: "text",
                id: "current",
                top: 0,
                style: {
                  text: "5,390",
                  font: 'bolder 4em "Microsoft YaHei", sans-serif',
                  fill: "#000000",
                  textAlign: "center"
                }
              },
              {
                type: "text",
                id: "all",
                top: 100,
                style: {
                  text: "of 10,000",
                  font: 'bolder 2em "Microsoft YaHei", sans-serif',
                  fill: "#c0c0c0",
                  textAlign: "center"
                }
              }
            ]
          },
          {
            type: "text",
            bottom: 390,
            left: 400,
            style: {
              text: "0%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          },
          {
            type: "text",
            bottom: 390,
            right: 400,
            style: {
              text: "100%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          }
        ]
      };
      testChart27.setOption(option);
    },
    drawChart28() {
      let testChart28 = this.$echarts.init(
        document.getElementById("testChart28")
      );
      var option = {};
      var t = this;

      option = {
        backgroundColor: "#080b30",
        title: {
          text: "哎呦,不错哦",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20
          },
          top: "5%",
          left: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)"
                  }
                ],
                global: false
              }
            }
          }
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "15%"
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00"
              }
            },
            axisLabel: {
              color: "#fff"
            },
            splitLine: {
              show: false
            },
            boundaryGap: false,
            data: ["A", "B", "C", "D", "E", "F"]
          }
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: {
                color: "#d1e6eb"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "注册总量",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 25,
            lineStyle: {
              normal: {
                color: "#6c50f3",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#6c50f3"
              }
            },
            itemStyle: {
              color: "#6c50f3",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(108,80,243,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(108,80,243,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(108,80,243, 0.9)",
                shadowBlur: 20
              }
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
          },
          {
            name: "注册总量1",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 25,
            lineStyle: {
              normal: {
                color: "#00ca95",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#00ca95"
              }
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,202,149,0.3)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20
              }
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14]
          }
        ]
      };
      testChart28.on("mouseover", function(params) {
        testChart28.setOption({
          series: {
            name: params.seriesName,
            symbolSize: 12,
            lineStyle: {
              width: 12
            }
          }
        });
      });
      testChart28.on("mouseout", function(params) {
        testChart28.setOption({
          series: {
            name: params.seriesName,
            symbolSize: 2,
            lineStyle: {
              width: 2
            }
          }
        });
      });
    
    },
    drawChart29(){
      let testChart29 = this.$echarts.init(document.getElementById("testChart29"));
      var t = this;
      var option = {};

    


    }
  }
};
</script>


<style scoped>
</style>
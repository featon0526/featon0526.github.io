// 就业行业
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: '1111',
        data: [
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
        axisTick: {
          // alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
          interval: 0,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            // width: 1,
            // type: "solid"
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "美国",
        type: "bar",
        barWidth: "15%",
        data: [19.48, 20.53, 21.38, 21.06, 23.32, 25.46],
        itemStyle: {
          barBorderRadius: 5,
          normal: {
            color: '#76da91'
          }, label: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
      },
      {
        name: "中国",
        type: "bar",
        barWidth: "15%",
        data: [12.31, 13.89, 14.28, 14.69, 17.82, 17.96,],
        itemStyle: {
          barBorderRadius: 5,
          normal: {
            color: '#f8cb7f'
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
      },
      {
        name: "俄罗斯",
        type: "bar",
        barWidth: "15%",
        data: [1.57, 1.66, 1.69, 1.49, 1.84, 2.24,],
        itemStyle: {
          barBorderRadius: 5,
          normal: {
            color: '#f89588'
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}'

          }
        },
      },
      {
        name: "法国",
        type: "bar",
        barWidth: "15%",
        data: [2.6, 2.79, 2.73, 2.64, 2.96, 2.78,],
        itemStyle: {
          barBorderRadius: 5,
          normal: {
            color: '#7cd6cf'
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
      },
    ],

  };
  // 把配置给实例对象
  myChart.setOption(option);
  // 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] },
  ];

  $(".bar h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var data = [70, 34, 60, 78, 69];
  var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
  var valdata = [702, 350, 610, 793, 664];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15,
            },
          },
        },
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            },
          },
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%",
          },
        },
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15,
          },
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();

// 人员变化
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // 准备数据
  var data = {
    year: [
      [19.48, 20.53, 21.38, 21.06, 23.32, 25.46,],
      [12.31, 13.89, 14.28, 14.69, 17.82, 17.96,],
      [1.57, 1.66, 1.69, 1.49, 1.84, 2.24],
      [2.6, 2.79, 2.73, 2.64, 2.96, 2.78,]
    ]
  };

  // 2. 指定配置和数据 -----折线图
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "美国",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "中国",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      },
      {
        name: "俄罗斯",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[2]
      },
      {
        name: "法国",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[3]
      },
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["2017", "2018", "2019", "2020", "2021", "2022"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 4, name: "2017" },
          { value: 4, name: "2018" },
          { value: 4, name: "2019" },
          { value: 4, name: "2020" },
          { value: 4, name: "2021" },
          { value: 4, name: "2022" },
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line2 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      // selectedMode: "single",
      selected: {
        "美国": true,
        "中国": true,
        "俄罗斯": false,
        "法国": false
      },
      data: ['美国', '中国', '俄罗斯', '法国'],
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "美国",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          19.48, 20.53, 21.38, 21.06, 23.32, 25.46
        ]
      },
      {
        name: "中国",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          12.31, 13.89, 14.28, 14.69, 17.82, 17.96,
        ]
      },
      {
        name: "俄罗斯",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.57, 1.66, 1.69, 1.49, 1.84, 2.24,
        ]
      },
      {
        name: "法国",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          2.6, 2.79, 2.73, 2.64, 2.96, 2.78,
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // var j = 1;
  // var timer = null; 
  // function moveLine() {
  //   clearTimeout(timer);
  //   timer = setTimeout(function() {
  //     var opt = myChart.getOption();
  //     var selected = {};
  //     for (var i = 0; i < opt.legend[0].data.length; i++) {
  //       if (j == i) {
  //         selected[opt.legend[0].data[i]] = true;
  //       } else {
  //         selected[opt.legend[0].data[i]] = false;
  //       }
  //     }
  //     myChart.clear();
  //     opt.legend[0].selected = selected;
  //     myChart.setOption(opt);
  //     j += 1;
  //     if (j == opt.legend[0].data.length) {
  //       j = 0;
  //     }
  //     moveLine();
  //   }, 5000);
  // }
  // moveLine();
  var maxCount = 4;
  var nowCount = 2;
  var timer = null;
  function moveLine() {
    clearTimeout(timer)
    timer = setTimeout(function () {
      var opt = myChart.getOption();
      var selected = {};
      for (var i = 0; i < maxCount; i++) {
        console.log(nowCount)
        if (i >= nowCount && i < nowCount + 2) {
          selected[opt.legend[0].data[i]] = true;
        } else {
          selected[opt.legend[0].data[i]] = false;
        }
      }
      myChart.clear();
      opt.legend[0].selected = selected;
      myChart.setOption(opt);
      console.log(selected);
      nowCount += 2;
      if (nowCount >= maxCount) {
        nowCount = 0;
      }
      moveLine();
    }, 5000);
  };
  moveLine();
})();

// 点位分布统计模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 19.48, name: "美国" },
          { value: 12.31, name: "中国" },
          { value: 1.57, name: "俄罗斯" },
          { value: 2.6, name: "法国" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
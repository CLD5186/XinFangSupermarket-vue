import Vue from "vue";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
// 首页--事件目的
const targetOptions = (data) => {
  let options = {
    color: ["#F25C5C", "#F2971C", "#E81583", "#907AFF", "#2C53F0", "#83D1EF"],

    legend: {
      orient: "vertical",
      left: "70%",
      align: "left",
      top: "middle",
      icon: "circle",
      textStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["35%", "65%"],
        center: ["35%", "55%"],
        label: {
          normal: {
            position: "inner",
            formatter: "{c}",
          },
        },
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: data,
      },
    ],
  };

  return options;
};

// 首页--事件类别
const typeOptions = ({ title, data, gradients }) => {
  const option = {
    xAxis: {
      show: false,
    },
    grid: {
      left: "30%",
    },
    yAxis: [
      {
        show: true,
        data: title,
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
          textStyle: {
            color: "#fff",
          },
          formatter: function(value) {
            return ["{title|" + value + "} "].join("\n");
          },
          rich: {},
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barWidth: 12,
        itemStyle: {
          normal: {
            barBorderRadius: 6,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 1,
                  color: gradients[0],
                },
                {
                  offset: 0,
                  color: gradients[1],
                },
              ],
              false
            ),
          },
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}",
          },
        },
      },
    ],
  };

  return option;
};

// 首页--来访情况
const situationOptions = (title, data) => {
  let option = {
    tooltip: {
      target: "axis",
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "6%",
      top: 30,
      padding: "0 0 10 0",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true, //坐标轴两边留白
        data: title,
        axisLabel: {
          //坐标轴刻度标签的相关设置。
          interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
          margin: 15,
          textStyle: {
            color: "#078ceb",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
        axisLine: {
          //坐标轴轴线相关设置
          show: false,
        },
        splitLine: {
          //坐标轴在 grid 区域中的分隔线。
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitNumber: 5,
        axisLabel: {
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
        axisLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
        },
      },
    ],
    series: [
      {
        name: "流入",
        type: "bar",
        data: data,
        barWidth: 20,
        barGap: 0, //柱间距离
        itemStyle: {
          //图形样式
          normal: {
            barBorderRadius: [10, 10, 10, 10],
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#F70E7A",
                },
                {
                  offset: 1,
                  color: "#4662EC",
                },
              ],
              false
            ),
          },
        },
      },
    ],
  };
  return option;
};

// 首页--问题总览
const questionOptions = (title, data) => {
  let option = {
    tooltip: {
      //提示框组件
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          backgroundColor: "#6a7985",
        },
      },
      textStyle: {
        color: "#fff",
        fontStyle: "normal",
        fontFamily: "微软雅黑",
        fontSize: 12,
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "6%",
      top: 30,
      padding: "0 0 10 0",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true, //坐标轴两边留白
        data: title,
        axisLabel: {
          //坐标轴刻度标签的相关设置。
          interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
          margin: 15,
          textStyle: {
            color: "#078ceb",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
          formatter: function(val) {
            let str = "";
            if (val.length > 3) {
              let num = val.length / 3;
              for (var i = 0; i < num + 1; i++) {
                str += val.slice(i * 3, (i + 1) * 3) + "\n";
              }
            }
            return str;
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
        axisLine: {
          //坐标轴轴线相关设置
          lineStyle: {
            color: "#fff",
            opacity: 0.2,
          },
        },
        splitLine: {
          //坐标轴在 grid 区域中的分隔线。
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitNumber: 5,
        axisLabel: {
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
          },
        },
        axisLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "流入",
        type: "bar",
        data: data,
        barWidth: 10,
        barGap: 0, //柱间距离
        label: {
          //图形上的文本标签
          normal: {
            show: true,
            position: "top",
            textStyle: {
              color: "#a8aab0",
              fontStyle: "normal",
              fontFamily: "微软雅黑",
              fontSize: 12,
            },
          },
        },
        itemStyle: {
          //图形样式
          normal: {
            barBorderRadius: [5, 5, 5, 5],
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#4BEBAF",
                },
                {
                  offset: 1,
                  color: "#134AAE",
                },
              ],
              false
            ),
          },
        },
      },
    ],
  };
  return option;
};

// 首页--年龄
const ageOptions = (data) => {
  let options = {
    color: ["#F25C5C", "#F2971C", "#E81583", "#907AFF", "#2C53F0", "#83D1EF"],

    legend: {
      orient: "vertical",
      left: "70%",
      align: "left",
      top: "middle",
      icon: "circle",
      textStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["35%", "55%"],
        center: ["35%", "55%"],
        label: {
          normal: {
            position: "inner",
            formatter: "{c}",
          },
        },
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: data,
      },
    ],
  };

  return options;
};

// 首页--属地
const addressOptions = (indicator, dataY) => {
  let option = {
    color: ["#F7DF0B", "#F7DF0B"],
    tooltip: {
      show: true,
      // eslint-disable-next-line no-unused-vars
      formatter(params) {
        var html = "企业概况" + "<br>";
        indicator.forEach((v, i) => {
          html += v.text + "：" + dataY[i] + "<br>";
        });
        return html;
      },
    },
    radar: {
      name: {
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      nameGap: 5,
      indicator: indicator,
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
        },
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: "#153269",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#E9E9E9", // 分隔线颜色
          width: 1, // 分隔线线宽
        },
      },
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        // symbol: 'angle',
        data: [
          {
            value: dataY,
            name: "企业概况",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#F7DF0B",
                  shadowColor: "#F6950A",
                  shadowBlur: 10,
                },
                shadowColor: "#F6950A",
                shadowBlur: 10,
              },
            },
            areaStyle: {
              normal: {
                // 单项区域填充样式
                color: {
                  type: "linear",
                  x: 0, //右
                  y: 0, //下
                  x2: 1, //左
                  y2: 1, //上
                  colorStops: [
                    {
                      offset: 0,
                      color: "#F7DF0B",
                    },
                    //  {
                    //     offset: 0.5,
                    //     color: 'rgba(0,0,0,0)'
                    // },
                    {
                      offset: 1,
                      color: "#F6950A",
                    },
                  ],
                  globalCoord: false,
                },
                opacity: 0.7, // 区域透明度
              },
            },
          },
        ],
      },
    ],
  };
  return option;
};

// 首页--问题所属部门
const sectionOptions = (title, data) => {
  const option = {
    xAxis: {
      show: false,
    },
    grid: {
      left: "30%",
    },
    yAxis: [
      {
        show: true,
        data: title,
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
          textStyle: {
            color: "#fff",
          },
          formatter: function(value) {
            return ["{title|" + value + "} "].join("\n");
          },
          rich: {},
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barWidth: 12,
        itemStyle: {
          normal: {
            barBorderRadius: 6,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 1,
                  color: "#FE9002",
                },
                {
                  offset: 0,
                  color: "#DADF67",
                },
              ],
              false
            ),
          },
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}",
          },
        },
      },
    ],
  };

  return option;
};

// 数据统计--圆饼
const pieOptions = (data) => {
  let options = {
    color: ["#F25C5C", "#F2971C", "#E81583", "#907AFF", "#2C53F0", "#83D1EF"],

    legend: {
      orient: "vertical",
      left: "60%",
      align: "left",
      top: "middle",
      icon: "circle",
      textStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        name: "11",
        type: "pie",
        radius: ["30%", "60%"],
        center: ["30%", "50%"],
        silent: true,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            name: "",
            value: 100,
            itemStyle: {
              shadowBlur: 20,
              shadowColor: "#41a8f8",
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "#000", // 0% 处的颜色
                  },
                  {
                    offset: 0.9,
                    color: "#14235E",
                  },
                  {
                    offset: 1,
                    color: "#283384", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
          },
        ],
      },
      {
        type: "pie",
        radius: "50%",
        center: ["30%", "50%"],
        itemStyle: {
          normal: {
            borderColor: "#14235E",
            borderWidth: 3,
          },
        },
        label: {
          normal: {
            position: "inner",
            formatter: "{d}%",
          },
        },
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: data,
      },
    ],
  };
  return options;
};

// 数据统计--折现
const lineOptions = ({ dataX, dataY1, dataY2 }) => {
  let option = {
    grid: {
      left: 50,
      top: 35,
      bottom: 25,
      right: 10,
    },
    legend: {
      data: ["受理量", "办结量"],
      textStyle: {
        color: "#7691DE",
        fontSize: 14,
      },
      right: 10,
      icon: "roundRect",
    },
    tooltip: {
      trigger: "axis",
      formatter: function(params) {
        var html = params[0].name + "<br>";
        html += params[0].seriesName + "：" + params[0].value + "<br>";
        if (params.length > 1) {
          html += params[1].seriesName + "：" + params[1].value + "";
        }
        return html;
      },
    },
    xAxis: {
      axisTick: {
        show: false,
      }, //不显示轴刻度
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: "#7691DE",
        },
      },
      data: dataX,
    },
    yAxis: {
      axisTick: {
        show: false,
      }, //不显示轴刻度
      axisLine: {
        lineStyle: {
          color: "#7691DE",
        },
      },
      splitLine: { show: false },
    },
    series: [
      {
        name: "受理量",
        type: "line",
        itemStyle: {
          normal: {
            color: "#F3AB45",
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#F3AB45",
              },
              {
                offset: 1,
                color: "#003BA4",
              },
            ]),
          },
        },
        data: dataY1,
      },
      {
        name: "办结量",
        type: "line",
        itemStyle: {
          normal: {
            color: "#16D8EF",
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#16D8EF",
              },
              {
                offset: 1,
                color: "#003BA4",
              },
            ]),
          },
        },
        data: dataY2,
      },
    ],
  };
  return option;
};

// 现场指标--折现
const lineOptions2 = ({
  legendData,
  colorData,
  timeData,
  lineChartData,
  unit = "%",
}) => {
  let option = {
    color: colorData,
    legend: {
      data: legendData,
      textStyle: {
        color: "#7691DE",
        fontSize: 14,
      },
      right: 10,
      icon: "roundRect",
    },
    grid: {
      left: 50,
      top: 35,
      bottom: 25,
      right: 10,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      }, //不显示轴刻度
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: "#7691DE",
        },
      },
      data: timeData,
    },
    yAxis: {
      axisTick: {
        show: false,
      }, //不显示轴刻度
      min: function (value) {
        return value.min - 1;
    },
      axisLine: {
        lineStyle: {
          color: "#7691DE",
        },
      },
      axisLabel: {
        formatter(value) {
          return value + unit;
        },
      },
      splitLine: { show: false },
    },
    series: lineChartData,
  };
  return option;
};

export {
  targetOptions,
  typeOptions,
  situationOptions,
  questionOptions,
  ageOptions,
  addressOptions,
  sectionOptions,
  pieOptions,
  lineOptions,
  lineOptions2,
};

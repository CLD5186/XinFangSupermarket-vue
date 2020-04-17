//现场办理率--type图表数据
const currentTypeData = [
  {
    name: "本月",
    gradients: ["#fe9103", "#dbdf67"],
    title: ["综合受理", "法律援助咨询", "司法鉴定", "法院立案", "劳动仲裁"],
    data: [98.5, 99.2, 99.5, 98.9, 99.1],
  },
  {
    name: "本年",
    gradients: ["#e91c7f", "#4b5eea"],
    title: ["综合受理", "法律援助咨询", "司法鉴定", "法院立案", "劳动仲裁"],
    data: [98.6, 99.1, 98.9, 99.1, 99],
  },
  {
    name: "总量",
    gradients: ["#0ec3e5", "#69da96"],
    title: ["综合受理", "法律援助咨询", "司法鉴定", "法院立案", "劳动仲裁"],
    data: [98.6, 99.1, 98.5, 99, 98.9],
  },
];

//现场办理率--line图表数据
const currentLineData = {
  legendData: [
    "司法鉴定",
    "法院立案",
    "劳动仲裁",
    "法律援助咨询",
    "综合受理",
    "平均值",
  ],
  colorData: ["#F6DB07", "#565AE3", "#DB9B44", "#5AD8A6", "#E51D82", "#6DC8EC"],
  timeData: ["2020-01", "2020-02", "2020-03", "2020-04"],
  lineChartData: [
    {
      name: "司法鉴定",
      type: "line",
      data: [98.9, 99.1, 98.3, 99.1],
    },
    {
      name: "法院立案",
      type: "line",
      data: [99, 99.2, 98.4, 98.9],
    },
    {
      name: "劳动仲裁",
      type: "line",
      data: [98.8, 99, 99, 98.3],
    },
    {
      name: "法律援助咨询",
      type: "line",
      data: [99.1, 98.9, 98.5, 98.7],
    },
    {
      name: "综合受理",
      type: "line",
      data: [98.5, 99.1, 98.9, 99.2],
    },
    {
      name: "平均值",
      type: "line",
      data: [98.86, 99.06, 98.62, 98.84],
    },
  ],
};
// 平均处理时长--type图表数据
const durationTypeData = [
  {
    name: "本月",
    gradients: ["#fe9103", "#dbdf67"],
    title: [
      "建设局",
      "人社局",
      "自然资源规划局",
      "环保局",
      "司法局",
      "农业农村局",
      "商务局",
    ],
    data: [3.1, 2.8, 2.7, 2.4, 2.1, 1.8, 1.9],
  },
  {
    name: "本年",
    gradients: ["#e91c7f", "#4b5eea"],
    title: [
      "建设局",
      "人社局",
      "自然资源规划局",
      "环保局",
      "司法局",
      "农业农村局",
      "商务局",
    ],
    data: [3, 2.9, 2.9, 2.6, 2.3, 1.8, 1.9],
  },
  {
    name: "总量",
    gradients: ["#0ec3e5", "#69da96"],
    title: [
      "建设局",
      "人社局",
      "自然资源规划局",
      "环保局",
      "司法局",
      "农业农村局",
      "商务局",
    ],
    data: [3, 2.9, 2.9, 2.6, 2.3, 1.8, 1.9],
  },
];

// 平均处理时长--line图表数据
const durationLineData = {
  legendData: ["平均值"],
  colorData: ["#F6DB07"],
  timeData: ["2020-01", "2020-02", "2020-03", "2020-04"],
  lineChartData: [
    {
      name: "平均值",
      type: "line",
      data: [2.4, 2.7, 2.1, 2.3],
    },
  ],
  unit: "天",
};
export { currentTypeData, durationTypeData, currentLineData, durationLineData };

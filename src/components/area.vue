<template>
  <div class="select_option">
    <div class="area" :class="val.open?'open':''" v-for="val in list" :key="val.title">
      <span>{{val.title}}</span>
      <div>
        <span
          :class="val.selected.includes(item)?'active':''"
          @click="add(val,item)"
          v-for="item in val.data"
          :key="item"
        >{{item}}</span>
      </div>
      <span @click="val.open=!val.open">
        {{val.open?'收起':'展开'}}
        <i :class="val.open?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "area111",
  methods: {
    //点击添加
    add(val, item) {
      if (val.selected.includes(item)) {
        for (let i = 0; i < val.selected.length; i++) {
          let cur = val.selected[i];
          if (cur == item) {
            val.selected.splice(i, 1);
            break;
          }
        }
      } else {
        val.selected.push(item);
      }
      this.$emit("change", {
        area: this.list[0].selected,
        department: this.list[1].selected
      });
    }
  },
  data() {
    return {
      list: [
        {
          title: "地区：",
          data: [
            "全部",
            "武康街道",
            "舞阳街道",
            "下渚湖街道",
            "阜溪街道",
            "康乾街道",
            "乾元镇",
            "新市镇",
            "洛舍镇",
            "钟管镇",
            "莫干山镇",
            "禹越镇",
            "新安镇",
            "雷甸镇"
          ],

          selected: [],
          open: false
        },
        {
          title: "部门：",
          data: [
            "全部",
            "市住房公积金管理中心德清分中心",
            "中国电信德清分公司",
            "德清县广播电视台",
            "德清县财政局",
            "德清县自然资源和规划局",
            "人民银行德清县支行",
            "德清县中国移动分公司",
            "湖州莫干山高新区管委会",
            "国家税务总局德清县税务局",
            "德清县水利局",
            "德清县农业农村局",
            "德清县政务服务管理办公室",
            "德清县民政局",
            "德清县卫生健康局",
            "德清县供销联社",
            "德清县交通水利集团",
            "县建发集团",
            "德清县退役军人事务局",
            "德清县医保局",
            "德清县司法局",
            "德清县委组织部",
            "德清县供电局",
            "德清县舞阳街道",
            "德清县邮政局",
            "德清县纪委、监察局",
            "德清县下渚湖街道",
            "德清县文旅集团",
            "德清县发展和改革局",
            "德清县武康街道",
            "德清县阜溪街道",
            "德清县综合行政执法局",
            "德清县商务局",
            "德清县应急管理局",
            "德清县科学技术局",
            "德清县拆迁办",
            "德清县人社局",
            "德清县市场监管局",
            "德清县公安局",
            "德清县交通运输局",
            "德清县残疾人联合会",
            "德清县金融办",
            "德清县教育局",
            "德清县文化广电旅游体育局",
            "德清县人民法院",
            "德清县慈善总会",
            "德清县地区管理员",
            "湖州市生态环境局德清分局",
            "德清县消防大队",
            "德清县住房和城乡建设局",
            "德清县烟草专卖局（分公司）",
            "德清县经济和信息化局",
            "德清县中国联通分公司",
            "德清县委统站部（台办、民宗局）"
          ],
          selected: [],
          open: false
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.select_option {
  padding-left: 3em;
  margin: 0 auto;
  .area {
    color: white;
    overflow: hidden;
    border-bottom: 1px dashed #00f8ff;
    height: 38px;
    max-height: 38px;
    margin-bottom: 20px;
    transition: all 0.3s;
    span,
    > div {
      float: left;
    }
    > span {
      padding: 5px 10px;
      cursor: pointer;
    }
    > div {
      width: 80%;

      span {
        background: #00184b;
        border: 2px solid #0f3055;
        border-radius: 15px;
        border-radius: 15px;
        margin-left: 15px;
        margin-bottom: 15px;
        font-size: 12px;
        padding: 5px 10px;
        color: #7392e6;
        cursor: pointer;
        font-size: 1.2rem;
      }
      .active {
        background-image: linear-gradient(90deg, #0bb4d6 0%, #115dbc 100%);
        color: #ffffff;
      }
    }
  }
  .open {
    height: auto;
    max-height: 600px;
  }
}
</style>

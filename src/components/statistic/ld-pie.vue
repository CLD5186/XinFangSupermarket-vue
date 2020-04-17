<template>
  <div style="position: relative;">
    <LdTitle :title="name" />
    <e-charts class="ld-pie" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { pieOptions } from "~utils/chart";

export default {
  props: {
    // 饼图数据
    pieData: {
      type: Array,
      default: () => {}
    },
    // 图表名称
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      options: {}
    };
  },
  components: {
    LdTitle,
    ECharts
  },
  mounted() {
    this.options = pieOptions(this.pieData);
  }
};
</script>
<style lang="less" scoped>
.ld-pie {
  width: 17.625vw;
  height: 26.14vh;
  margin-left: 20px;
}
</style>

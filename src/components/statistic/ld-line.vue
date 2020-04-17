<template>
  <div style="position: relative;">
    <LdTitle :title="name" v-if="name!==''"/>
    <e-charts class="ld-line" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { lineOptions } from "~utils/chart";

export default {
  props: {
    // 饼图数据
    lineData: {
      type: Object,
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
    this.options = lineOptions({ ...this.lineData });
  }
};
</script>
<style lang="less" scoped>
.ld-line {
  width: 700px;
  height: 250px;
  margin-top: 40px;
}
</style>
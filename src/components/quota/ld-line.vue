<template>
  <div style="position: relative;">
    <LdTitle :title="name" v-if="name!==''" />
    <e-charts class="ld-line" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { lineOptions2 } from "~utils/chart";

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
  watch: {
    lineData: function() {
      this.options = lineOptions2({ ...this.lineData });
    }
  },
  mounted() {
    this.options = lineOptions2({ ...this.lineData });
  }
};
</script>
<style lang="less" scoped>
.ld-line {
  width: 90vw;
  height: 280px;
  margin-top: 40px;
  margin-left: 30px;
}
</style>
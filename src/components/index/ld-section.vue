<template>
  <div style="position: relative;">
    <LdTitle title="问题所属部门" />
    <e-charts class="ld-section" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { sectionOptions } from "~utils/chart";

export default {
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
    let title = [
      "建设局",
      "人社局",
      "自然资源规划局",
      "环保局",
      "司法局",
      "农业农村局",
      "商务局"
    ];
    let data = [418, 388, 343, 194, 119, 89, 11];
    this.options = sectionOptions(title, data);
  }
};
</script>
<style lang="less" scoped>
.ld-section {
  width: 18.625vw;
  height: 24.04vh;
  margin-top: 2vh;
}
</style>
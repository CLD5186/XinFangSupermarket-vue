<template>
  <div style="position: relative;">
    <LdTitle title="事项目的" />
    <e-charts class="ld-target" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { targetOptions } from "~utils/chart";

export default {
  components: {
    LdTitle,
    ECharts
  },
  data() {
    return {
      options: {}
    };
  },
  mounted() {
    let targetData = [
      { name: "意见建议", value: 119 },
      { name: "申诉", value: 313 },
      { name: "求决", value: 283 },
      { name: "揭发控告", value: 10 },
      { name: "咨询", value: 621 },
      { name: "其他", value: 157 }
    ];
    this.options = targetOptions(targetData);
  }
};
</script>
<style lang="less" scoped>
.ld-target {
  width: 17.625vw;
  height: 26.14vh;
  margin-left: 20px;
}
</style>

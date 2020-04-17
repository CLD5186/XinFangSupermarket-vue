<template>
  <div style="position: relative;">
    <LdTitle title="问题属地" />
    <e-charts class="ld-address" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { addressOptions } from "~utils/chart";

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
    let indicatorData = [
      { text: "武康街道", max: 50 },
      { text: "舞阳街道", max: 50 },
      { text: "下渚湖街道", max: 50 },
      { text: "莫干山镇", max: 50 },
      { text: "新市镇", max: 50 }
    ];
    let dataY = [30, 27, 25, 20, 19];
    this.options = addressOptions(indicatorData, dataY);
  }
};
</script>
<style lang="less" scoped>
.ld-address {
  width: 15.52vw;
  height: 18.51vh;
  margin-top: 50px;
}
</style>
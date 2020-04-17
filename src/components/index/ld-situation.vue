<template>
  <div style="position: relative;">
    <LdTitle title="来访情况" />
    <e-charts class="ld-situation" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { situationOptions } from "~utils/chart";

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
    let title = ["来访总量", "个体访量", "集体访量", "重访量"];
    let data = [1494, 1387, 92, 15];
    this.options = situationOptions(title, data);
  }
};
</script>
<style lang="less" scoped>
.ld-situation {
  width: 17.625vw;
  height: 22.51vh;
  margin-top: 30px;
}
</style>
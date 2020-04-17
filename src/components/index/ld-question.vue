<template>
  <e-charts class="ld-question" :options="options" />
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import { questionOptions } from "~utils/chart";

export default {
  data() {
    return {
      options: {}
    };
  },
  components: {
    ECharts
  },
  mounted() {
    let title = [
      "农村土地征用",
      "城镇房屋拆迁",
      "土地承包经营",
      "涉法涉诉",
      "特殊利益群体",
      "农民工工资"
    ];
    let data = [53, 15, 31, 598, 59, 276];
    this.options = questionOptions(title, data);
  }
};
</script>
<style lang="less" scoped>
.ld-question {
  width: 20.83vw;
  height: 25vh;
  margin: 10px 0 0 10px;
}
</style>
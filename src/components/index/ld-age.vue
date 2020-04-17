<template>
  <div style="position: relative;">
    <LdTitle title="年龄分析" />
    <e-charts class="ld-age" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { ageOptions } from "~utils/chart";

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
  methods: {},
  mounted() {
    let data = [
      { name: "18岁以下", value: 2 },
      { name: "18-28岁", value: 119 },
      { name: "29-38岁", value: 373 },
      { name: "39-48岁", value: 448 },
      { name: "49岁以上", value: 552 }
    ];
    this.options = ageOptions(data);
  }
};
</script>
<style lang="less" scoped>
.ld-age {
  width: 17.625vw;
  height: 25vh;
}
</style>
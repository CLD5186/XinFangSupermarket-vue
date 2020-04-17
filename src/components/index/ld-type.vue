<template>
  <div style="position: relative;">
    <LdTitle :title="title" />
    <e-charts class="ld-state" :style="{width:width+'vw'}" :options="options" />
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import LdTitle from "../ld-title";
import { typeOptions } from "~utils/chart";

export default {
  props: {
    // 图表的宽
    width: {
      type: String,
      default: "18.625"
    },
    // 图表的名称
    title: {
      type: String,
      default: ""
    },
    // 数据及可配置参数
    typeData: {
      type: Object,
      default: () => {}
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
    typeData: function() {
      this.options = typeOptions({ ...this.typeData });
    }
  },
  mounted() {
    this.options = typeOptions({ ...this.typeData });
  }
};
</script>
<style lang="less" scoped>
.ld-state {
  height: 30.14vh;
}
</style>
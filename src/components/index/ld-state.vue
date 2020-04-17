<template>
  <div style="position: relative;">
    <LdTitle title="事件状态" />
    <div class="ld-table" style="background: #0d509a;">
      <div></div>
      <div>当天</div>
      <div>年度</div>
    </div>
    <div class="ld-table ld-table-row" v-for="(item,index) in stateData" :key="index">
      <div>{{item.title}}</div>
      <div>{{item.sameDay}}</div>
      <div>{{item.year}}</div>
    </div>
  </div>
</template>
<script>
import LdTitle from "../ld-title";
export default {
  components: {
    LdTitle
  },
  data() {
    return {
      stateData: [
        { title: "简单", sameDay: 8, year: 926 },
        { title: "一般", sameDay: 3, year: 314 },
        { title: "复杂", sameDay: 0, year: 209 },
        { title: "疑难", sameDay: 0, year: 45 }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.ld-table {
  display: flex;
  color: white;
  width: 20.83vw;

  padding: 8px;
  margin-top: 60px;
  font-size: 0.8rem;
  div {
    flex-grow: 1;
    width: 33.33%;
  }
}
.ld-table-row {
  margin-top: 0;
  border-bottom: 1px solid rgba(0, 248, 255, 0.2);
}
</style>
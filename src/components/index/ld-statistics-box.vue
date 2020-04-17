<template>
  <div class="statistics-box">
    <div class="statistics-content" v-for="(item,index) in statisticsData" :key="index">
      <img v-if="index%2===0" src="../../assets/23.png" />
      <img v-else src="../../assets/24.png" />
      <div>
        <p class="count">{{item.count}}</p>
        <p class="name">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statisticsData: [
        { count: "1494", name: "来访总量" },
        { count: "11", name: "今日来访量" },
        { count: "98.3%", name: "现场办结率" },
        { count: "99.2%", name: "办理满意率" },
        { count: "2.3", name: "平均处理时长" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.statistics-box {
  display: grid;
  margin: 4.63vh 1.87vw;
  justify-items: center;
  grid-template-columns: repeat(5, 20%);
  .statistics-content {
    color: white;
    display: flex;
    align-items: center;
    img {
      width: 1.56vw;
      height: 3.05vh;
      margin-right: 10px;
    }
    p {
      margin: 0;
    }
    .count {
      font-size: 1.875rem;
    }
    .name {
      font-size: 1.125rem;
    }
  }
}
</style>
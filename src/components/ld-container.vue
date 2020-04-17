<template>
  <header>
    <div class="ld-container-wrap">
      <img src="../assets/box-border-1.png" class="img-1" />
      <img src="../assets/box-border-1.png" class="img-2" />
      <img class="ld-container-logo" src="../assets/logo.jpg" />
      <section class="ld-container-right">
        <div class="ld-conatiner-tabs">
          <nav
            v-for="(item,index) in tabs"
            :key="index"
            :class="tabsIndex===index?'action':''"
            @click="linkHandle(index)"
          >
            <span>{{item.title}}</span>
            <img v-if="tabsIndex===index" src="../assets/star.png" />
          </nav>
        </div>
        <div class="ld-container-time">
          <i class="time-icon"></i>
          <span>{{time}}</span>
        </div>
      </section>
    </div>
    <template>
      <slot></slot>
    </template>
  </header>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      tabs: [
        { title: "首页", url: "index" },
        { title: "来访数据统计", url: "statistic" },
        { title: "现场指标", url: "quota" },
        { title: "预警人员", url: "warning" },
        { title: "部门属地", url: "department" },
        { title: "管控平台", url: "welcome" }
      ],
      tabsIndex: 0,
      time: ""
    };
  },
  methods: {
    linkHandle: function(i) {
      this.tabsIndex = i;
      this.$router.push(`/${this.tabs[i].url}`);
    }
  },
  mounted() {
    // 获取当前日期
    let weeks = ["一", "二", "三", "四", "五", "六", "日"];
    this.time = `${dayjs().format("YYYY年MM月DD日")} 星期${
      weeks[dayjs().format("d") - 1]
    }`;
    // 初始化tabs位置
    this.tabs.map((item, index) => {
      var i = window.location.pathname.indexOf(item.url);
      if (i != -1) this.tabsIndex = index;
    });
  }
};
</script>

<style lang="less">
header {
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
  background-image: url("../assets/main_bg.jpg");
  background-size: auto auto;
  width: 100vw;
  height: 100vh;
  .ld-container-wrap {
    position: relative;
    height: 9.25vh;
    margin: 18px 36px;
    color: white;
    display: flex;
    align-items: center;
  }
  .img-1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 2.58vw;
    height: 3.55vh;
    transform: rotate(180deg);
  }
  .img-2 {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 2.58vw;
    height: 3.55vh;
  }
  .ld-container-logo {
    height: 5.55vh;
  }
  .ld-container-right {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .ld-conatiner-tabs {
      display: flex;
      align-items: center;
      nav {
        width: 7.81vw;
        padding: 0 1.04vw;
        cursor: pointer;
        color: #8fa8e0;
        text-align: center;
      }
      .action {
        color: white;
        position: relative;
        img {
          position: absolute;
          width: 8.02vw;
          height: 7.4vh;
          bottom: -2.96vh;
          left: 0.72vw;
          z-index: -99;
          background-size: auto auto;
        }
      }
    }
    .ld-container-time {
      display: flex;
      align-items: center;
      margin-right: 30px;
      color: #258bac;
      font-size: 1rem;
    }
    .time-icon {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 15px;
      display: inline-block;
      background: url("../assets/time.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

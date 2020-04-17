<template>
  <div class="searchBox">
    <div class="left">
      <ul v-if="mode1" class="mode1">
        <li
          v-for="(v,i) in mode1"
          :class="{'active':searchItem.mode1==v.value }"
          :key="i"
          @click="modeClick(v,'mode1')"
        >{{v.name}}</li>
      </ul>
      <ul v-if="mode2" class="mode1 mode2">
        <li
          v-for="(v,i) in mode2"
          :class="{'active':searchItem.mode2==v.value }"
          :key="i"
          @click="modeClick(v,'mode2')"
        >{{v.name}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="myMonth">
        选择日期：
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="searchBtn" @click="searchList">
        <img src="@/assets/img/search.png" alt />
        搜索
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchItem", "mode1", "mode2"],
  data() {
    return {
      value1: []
    };
  },
  methods: {
    //选项切换
    modeClick(v, name) {
      this.searchItem[name] = v.value;
    },
    //搜索
    searchList() {
      var time = this.value1;
      time.forEach(v => (v = new Date(v).getTime()));
      var item = { ...this.searchItem, time };
      // console.log(11,item,this.value1);
      this.$emit("getList", item);
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PingFangSC-Regular, sans-serif;
}
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.searchBox {
  width: 92vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    .mode1 {
      margin-right: 1.5vw;
      li {
        cursor: pointer;
        display: inline-block;
        padding: 0 2.5vw;
        height: 30px;
        line-height: 30px;
        border: 1px solid #0f3055;
        border-radius: 15px;
        background: #00184b;
        text-align: center;
        color: #7392e6;
        font-size: 14px;
        margin-right: 2vw;
      }
      li.active {
        background-image: linear-gradient(90deg, #0bb6d7 0%, #115bbb 100%);
        border: 1px solid #0f3055;
        color: #fff;
      }
    }
    .mode2 {
      margin-right: 1vw;
      li {
        cursor: pointer;
        padding: 0 1vw;
      }
    }
  }
  .right {
    display: flex;
    .myMonth {
      margin-right: 3.5vw;
      position: relative;
      top: 6px;
    }
    .searchBtn {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 46px;
      text-align: center;
      padding: 0 1.5vw;
      background-image: linear-gradient(90deg, #0bb6d7 0%, #115bbb 100%);
      border-radius: 23px;
      border: 1px solid #0f3055;
      img {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 0.5vw;
      }
    }
  }
}
</style>
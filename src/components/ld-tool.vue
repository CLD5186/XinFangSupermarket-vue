<template>
  <div class="ld-tool">
    <LdTab :tabData="tabData" :tabIndex="tabIndex" @changeTab="changeTabHandle" />
    <div class="ld-date">
      <span>选择日期:</span>
      <vue-datepicker-local
        v-model="range"
        range-separator="至"
        inputClass="inputClass"
        popupClass="popupClass"
      />
      <div class="ld-search-btn">
        <img src="@/assets/img/search.png" alt />
        搜索
      </div>
    </div>
  </div>
</template>
<script>
import LdTab from "../components/ld-tab";
import VueDatepickerLocal from "vue-datepicker-local";

export default {
  data() {
    return {
      tabData: [
        { name: "今日", key: 1 },
        { name: "本周", key: 2 },
        { name: "本月", key: 3 }
      ],
      tabIndex: 1,
      range: [new Date(), new Date()]
    };
  },
  components: {
    LdTab,
    VueDatepickerLocal
  },
  methods: {
    changeTabHandle: function(index) {
      this.tabIndex = index;
    }
  }
};
</script>
<style lang="less">
.ld-tool {
  display: flex;
  align-items: center;
  padding-left: 50px;
  justify-content: space-between;
  color: #909495;
  flex-grow: 5;
  .ld-date {
    display: flex;
    align-items: center;
    .inputClass {
      border: 2px solid #1651e5;
      background-color: rgba(0, 0, 0, 0);
      margin: 0 10px;
    }
    .popupClass {
      background: #19377c;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      border-radius: 4px;
      border-width: 0px;
      .calendar-date-on {
        background-color: rgba(0, 0, 0, 0);
      }
      .calendar-date-disabled {
        background-color: rgba(0, 0, 0, 0) !important;
      }
    }
  }
  .ld-search-btn {
    width: 100px;
    margin-left: 50px;
    padding: 5px 25px;
    cursor: pointer;
    color: white;
    text-align: center;
    background-image: linear-gradient(90deg, #0bb2d6 0%, #115ebc 100%);
    border: 1px solid #1651e5;
    border-radius: 23px;
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 0.5vw;
    }
  }
}
</style>
<template>
  <div style="display:flex">
    <div class="ld-tab">
      <nav
        v-for="item in tabData"
        :key="item.key"
        :class="tabIndex===item.key?'action':''"
        @click="changeTabHandle(item.key)"
      >{{item.name}}</nav>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    // tab数据
    tabData: {
      type: Array,
      default: () => {}
    },
    // 默认选中
    tabIndex: {
      type: Number || String,
      default: 1
    },
    // 切换事件
    changeTab: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTabHandle: function(index) {
      this.$emit("changeTab", index);
    }
  }
};
</script>
<style lang="less" scoped>
.ld-tab {
  color: #7392e6;
  display: flex;
  flex-grow: 1;
  nav {
    padding: 5px 25px;
    margin-right: 20px;
    background: #00184b;
    border: 2px solid #0f3055;
    border-radius: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
  .action {
    color: white;
    background-image: linear-gradient(90deg, #0bb6d7 0%, #115bbb 100%);
  }
}
</style>
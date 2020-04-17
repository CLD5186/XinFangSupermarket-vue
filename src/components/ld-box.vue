<template>
  <div class="ld-box">
    <div class="ld-box-title">
      {{title}}
      <span style="color:#5E70A8;">{{subTitle}}</span>
    </div>
    <img src="../assets/1.png" v-if="decorate" />
    <div class="ld-box-border">
      <template>
        <slot></slot>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    decorate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.ld-box {
  display: flex;
  flex-direction: column;
  margin: 18px 36px;
  .ld-box-title {
    color: white;
    font-size: 18px;
    text-align: left;
    margin-bottom: 5px;
    span {
      font-size: 8px;
    }
  }
  img {
    margin-bottom: 10px;
    width: 265px;
    height: 8px;
  }
  .ld-box-border {
    min-height: 25.77vh;
    background: rgba(16, 40, 96, 0.4);
    position: relative;
    display: flex;
    border-radius: 14px;
  }

  .ld-box-border::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 114px;
    height: 100px;
    background: url("../assets/2.jpg") no-repeat;
  }
  .ld-box-border::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 114px;
    height: 100px;
    transform: rotate(180deg);
    background: url("../assets/2.jpg") no-repeat;
  }
}
</style>
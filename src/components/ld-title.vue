<template>
  <div class="ld-title">
    <img src="../assets/3.png" />
    <span>{{title}}</span>
  </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.ld-title {
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
}
</style>
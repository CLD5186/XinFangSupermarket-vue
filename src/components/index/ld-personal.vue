<template>
  <div style="position:relative">
    <LdTitle title="预警人员" />
    <div class="ld-address">
      <div>
        <p>3</p>
        <p>人</p>
      </div>
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
    return {};
  }
};
</script>
<style lang="less" scoped>
.ld-address {
  width: 160px;
  height: 160px;
  margin: 55px 60px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/4.png");
  background-size: 100% 100%;
  color: white;
  p {
    margin: 0;
  }
}
</style>
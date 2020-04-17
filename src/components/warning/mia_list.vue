<template>
  <div>
    <ul class="myList">
      <li>
        <span v-for="(v,i) in dataItem" :key="i">{{v.name}}</span>
      </li>
      <li v-if="!dataList.length" class="noMore">暂无数据</li>
      <li v-else v-for="(v,i) in dataList" :key="i">
        <span v-for="(v2,i2) in dataItem" :key="i2">
          <span
            v-if="!v2.pointer"
            :style="{color:(v2.color && v.color) ? v.color : '#30B3BC'}"
          >{{v[v2.field]}}</span>
          <span v-else @click="toHandle(v)" class="pointer">{{v[v2.field]}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["dataItem", "dataList"],
  data() {
    return {
      fieldList: []
    };
  },
  methods: {
    toHandle(v) {
      this.$emit("jumpToDetail", v);
    }
  },
  mounted() {}
};
</script>
<style lang='less' scoped>
.myList {
  font-size: 18px;
  color: #30b3bc;
  & > li {
    display: flex;
    align-items: center;
    padding: 15px 0;
    & > span {
      flex: 1;
      padding-left: 1vw;
      span {
        display: block;
      }
    }
    .pointer {
      cursor: pointer;
    }
  }
  & > li:nth-child(1) {
    background: rgba(143, 168, 224, 0.2);
  }
  .noMore {
    height: 300px;
    justify-content: center;
    line-height: 300px;
  }
}
</style>
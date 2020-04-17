<template>
  <div class="myPage">
    <Select @change="get_select" />
    <div class="listBox" v-loading="loading">
      <MiaList :dataItem="dataItem" :dataList="dataList" @jumpToDetail="jumpToDetail" />
    </div>
    <div class="myProjectPagination">
      <el-pagination
        @current-change="getListData"
        layout="prev, pager, next"
        :pager-count="5"
        :page-size="10"
        :current-page.sync="pagenation.currentPage"
        :total="pagenation.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import MiaList from "../components/warning/mia_list";
import Select from "../components/area";
export default {
  data() {
    return {
      loading: false,
      mode1List: [
        {
          name: "未解决",
          value: 1
        },
        {
          name: "已解决",
          value: 2
        }
      ],
      mode2List: [
        {
          name: "今日",
          value: 1
        },
        {
          name: "本周",
          value: 2
        },
        {
          name: "本月",
          value: 3
        }
      ],
      searchItem: {
        mode1: 1,
        mode2: 1
      }, //搜索内容
      /**
       * 表格数据
       */
      dataItem: [
        {
          name: "序号",
          field: "i1"
        },
        {
          name: "地区",
          field: "i2"
        },
        {
          name: "部门",
          field: "i3"
        },
        {
          name: "数量",
          field: "i4"
        },
        {
          name: "操作",
          field: "i5",
          pointer: true
        }
      ],
      dataList: [
        {
          i1: 1,
          i2: "武康街道",
          i3: "--",
          i4: "20",
          i5: "详情"
        },
        {
          i1: 2,
          i2: "--",
          i3: "中国电信德清分公司",
          i4: "28",
          i5: "详情"
        },
        {
          i1: 3,
          i2: "舞阳街道",
          i3: "--",
          i4: "23",
          i5: "详情"
        }
      ],
      pagenation: {
        total: 101,
        currentPage: 1
      }
    };
  },
  components: {
    Select,
    MiaList
  },
  methods: {
    //跳转到详情
    jumpToDetail() {
      this.$router.push("/departmentDetail");
    },
    //选中的数据
    get_select() {
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    getList(msg) {
      this.searchItem = msg;
      this.getListData();
    },
    //获取列表数据
    getListData() {
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped src="@/assets/css/index.less"></style>
<style lang='less' scoped>
.myPage {
  padding: 1vh 1vw 0;
  color: #fff;
  height: 82vh;
  overflow: auto;
  .listBox {
    margin-top: 2vh;
    height: 62vh;
    overflow: scroll;
    // background: #fff;
    .list {
      height: 100vh;
      background: pink;
    }
  }
  .myProjectPagination {
    text-align: right;
    margin-right: 3vw;
  }
}
</style>

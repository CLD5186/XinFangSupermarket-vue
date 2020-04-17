<template>
  <div>
    <!-- tabs区域 -->
    <div style="margin: 15px 36px;">
      <LdTab :tabData="tabData" :tabIndex="tabIndex" @changeTab="changeTabHandle" />
    </div>
    <div :class="tabIndex===2?'scroll':''">
      <!-- 数据区域 -->
      <div class="row">
        <LdBox :decorate="false" style="height:230px" v-for="(item,index) in typeData" :key="index">
          <LdType width="28" :title="item.name" :typeData="item" />
        </LdBox>
      </div>
      <!-- 图表区 -->
      <div :class="tabIndex===2?'animationHeightUp':'animationHeightDown'">
        <LdBox title="近十二个月平均办事率" subTitle="VISIT EVENT INFORMATION">
          <LdLine :lineData="lineData" />
        </LdBox>
      </div>
      <!-- 表格区 -->
      <div style="color:white;margin: 30px 36px;" v-if="tabIndex===2">
        <MiaSearch :searchItem="searchItem" :mode2="mode2List" @getList="getList" />
        <div class="listBox" v-loading="loading">
          <MiaList :dataItem="dataItem" :dataList="dataList" class="miaList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LdTab from "../components/ld-tab";
import LdBox from "../components/ld-box";
import LdLine from "../components/quota/ld-line";
import LdType from "../components/index/ld-type";
import MiaSearch from "../components/warning/mia_search";
import MiaList from "../components/warning/mia_list";
import {
  currentTypeData,
  durationTypeData,
  currentLineData,
  durationLineData
} from "../mock/quota";

export default {
  components: {
    LdBox,
    LdTab,
    LdLine,
    LdType,
    MiaSearch,
    MiaList
  },
  data() {
    return {
      tabData: [
        { name: "现场办理率", key: 1 },
        { name: "办理满意率", key: 2 },
        { name: "平均处理时长", key: 3 }
      ],
      tabIndex: 2,
      lineData: {},
      typeData: [],
      loading: false,
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
        mode2: 1,
        time: []
      },
      dataItem: [
        {
          name: "序号",
          field: "i1"
        },
        {
          name: "姓名",
          field: "i2"
        },
        {
          name: "来访时间",
          field: "i3"
        },
        {
          name: "反应内容",
          field: "i4"
        },
        {
          name: "联系方式",
          field: "i5"
        },
        {
          name: "家庭住址",
          field: "i6"
        },
        {
          name: "办理单位",
          field: "i7"
        },
        {
          name: "事项目的",
          field: "i8"
        }
      ],
      dataList: [
        //序号 姓名 来访时间 反应内容  联系方式  家庭住址 办理单位  事项目的
        {
          i1: 1,
          i2: "林雪",
          i3: "2020-04-03",
          i4: "拖欠农民工工资",
          i5: "13857684567",
          i6: "德清县下渚湖街道南路546号",
          i7: "司法局",
          i8: "申诉"
        },
        {
          i1: 2,
          i2: "吕笑笑",
          i3: "2020-04-06",
          i4: "拆迁",
          i5: "15845768798",
          i6: "德清县莫干山镇203号",
          i7: "人社局",
          i8: "咨询"
        }
      ]
    };
  },
  methods: {
    changeTabHandle: function(index) {
      this.typeData = index === 3 ? durationTypeData : currentTypeData;
      this.lineData = index === 3 ? durationLineData : currentLineData;
      this.tabIndex = index;
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
  mounted() {
    this.typeData = currentTypeData;
    this.lineData = currentLineData;
  }
};
</script>
<style lang="less" scoped>
.row {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33.33%);
}
.scroll {
  overflow-y: auto;
  height: 79vh;
  -ms-overflow-style: none;
}
.scroll::-webkit-scrollbar {
  display: none;
}
.miaList {
  overflow-y: auto;
  -ms-overflow-style: none;
}
.miaList::-webkit-scrollbar {
  display: none;
}
.animationHeightDown {
  animation: animationDown 1s;
  margin-top: 85px;
}
.animationHeightUp {
  animation: animationUp 1s;
  margin-top: 70px;
}
@keyframes animationUp {
  from {
    margin-top: 85px;
  }
  to {
    margin-top: 70px;
  }
}
@keyframes animationDown {
  from {
    margin-top: 70px;
  }
  to {
    margin-top: 85px;
  }
}
</style>

        
        
        
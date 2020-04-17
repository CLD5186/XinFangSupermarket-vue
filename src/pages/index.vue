<template>
  <div>
    <LdStatisticsBox />
    <LdBox title="来访事件信息" subTitle="VISIT EVENT INFORMATION">
      <div class="box-grid">
        <LdTarget />
        <LdState />
        <LdType title="事件类型" :typeData="typeData" />
        <LdSituation />
      </div>
    </LdBox>
    <div style="display:flex;margin-top:20px">
      <div style="width:470px;">
        <LdBox title="热点问题总览" subTitle="OVERVIEW OF HOT ISSUES">
          <LdQuestion />
        </LdBox>
      </div>
      <div style="width:100%">
        <LdBox title="信访人员分析" subTitle="OVERVIEW OF HOT ISSUES">
          <div class="box-grid">
            <LdAge />
            <LdPersonal />
            <LdAddress />
            <LdSection />
          </div>
        </LdBox>
      </div>
    </div>
  </div>
</template>
<script>
import LdStatisticsBox from "../components/index/ld-statistics-box";
import LdBox from "../components/ld-box";
import LdTarget from "../components/index/ld-target";
import LdState from "../components/index/ld-state";
import LdType from "../components/index/ld-type";
import LdSituation from "../components/index/ld-situation";
import LdQuestion from "../components/index/ld-question";
import LdAge from "../components/index/ld-age";
import LdPersonal from "../components/index/ld-personal";
import LdAddress from "../components/index/ld-address";
import LdSection from "../components/index/ld-section";

export default {
  data() {
    return {
      // 类型数据
      typeData: {
        gradients: ["#FE9002", "#DADF67"],
        title: [
          "信访接待",
          "专业调处",
          "公共法律服务",
          "行政争议调解",
          "诉讼服务",
          "社会心理服务",
          "劳动仲裁",
          "联合调处"
        ],
        data: [75, 76, 329, 119, 269, 29, 373, 224]
      }
    };
  },
  components: {
    LdStatisticsBox,
    LdBox,
    LdTarget,
    LdState,
    LdType,
    LdSituation,
    LdQuestion,
    LdAge,
    LdAddress,
    LdPersonal,
    LdSection
  }
};
</script>
<style lang="less" scoped>
.box-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 25%);
}
</style>
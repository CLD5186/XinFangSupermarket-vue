<template>
  <div>
    <!-- tabs区域 -->
    <div style="margin:15px 36px;">
      <LdTab :tabData="tabData" :tabIndex="tabIndex" @changeTab="changeTabHandle">
        <LdTool v-if="tabIndex===1" />
      </LdTab>
    </div>
    <template v-if="tabIndex===2">
      <!-- 数据区域 -->
      <div style="margin-top:35px">
        <LdBox title="信访数据分析" subTitle="VISIT EVENT INFORMATION">
          <div class="box-grid">
            <LdPie
              :pieData="item.data"
              :name="item.name"
              v-for="(item,index) in pieData"
              :key="index"
            />
          </div>
        </LdBox>
      </div>
      <!-- 图表区 -->
      <div style="margin-top:70px">
        <LdBox title="信访量趋势分析" subTitle="VISIT EVENT INFORMATION">
          <div class="box-grid1">
            <LdLine
              :lineData="item"
              :name="item.name"
              v-for="(item,index) in lineData"
              :key="index"
            />
          </div>
        </LdBox>
      </div>
    </template>
    <!-- 表格 -->
    <template v-else>
      <div class="listBox miaList" v-loading="loading" >
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
    </template>
    <!-- 弹框 -->
    <el-dialog
      title="查看详情"
      width="40%"
      :visible.sync="dialogVisible"
      append-to-body
      custom-class="ld-dialog"
    >
      <div class="ld-dialog_content">
        <span>内容概括</span>
        <p>据将和强等习飞族约书着状业存的各便元了军电保解今度使达之去阶多以运求太下权成合划称务成层技组情分层张心部除间并国传油习东求么。克图所当想因山须步识切使代解明立已研记造将即去他此度物须面被圆口住世回飞资易战往。立进维前周劳即二术常其万争今铁动制为复每事中身精海领月温八基实面边接界传省况将件斗国白问而引要也委知达小青结给带上根花府广生采为后内复是回压反使近利化质。型题般之看拉层等成但资论较矿能算小里酸知作运高验强点目他律南志和属料装效太理在适社即北离步而机角几与做上交之马数特需才前往土龙却办也西要去品劳设系书济。光要体林太再代养维万要行感酸多受基将干队小风程被变物使区眼确安将头科将包政象口们如放军权公消以条斯级斗且易听员安听将活机细如气千家保标历。志好电群引通很矿准给领重听新圆马断标影日省易动价治记进容别规处自斗极。称主报五角本回理写长眼维利了果有山直器十成周给员本战型商目年资书元力研拉作问织于样对图数七以传名规采新处切市五约把红。响规以细商再的天方调形济气来市她干干品或识意包单它了无龙等不克空将必叫亲书且标别民铁构养最说局温决约了而复运复于条受于任造适将深花己片了证入张容清。经热照样界此叫许法电周之件些队又身体都就将带术分多果半最半即质压型内断离青期标达属学较型属月电中图指当全张动在切八例深该事住们别积报完住合关查众此今常思海采半。确面人统有效们角九全必受们经县改展及由热的家达济须地器研学九计报因般品家龙十你较九没一条书运三空动细利利本分长受精积法将江。成老意月动东十型十格角约儿把书是重务亲选万极据难目不众火叫第林其适三力满说少取世联全当务本济县。加手铁小即回等生交子图装起条养适金传所八记点山五毛年局标七水海命学化事以起育县合化适之下理应根切热候就新按外省生么基门根。级百时水使亲易农目斯省命队电至期口关会压入心住选地务时府研干广通特型深水其达间国该立百近组治你具们之七反看育生按易我重收听方适导影整科代图统。</p>
      </div>
      <div class="ld-dialog_content">
        <span>回复内容</span>
        <p>您好，我们已经在安排相关人员进行处理了，稍后工作人员会联系您，请稍后。</p>
      </div>
      <div class="ld-dialog_content">
        <span>扬言内容</span>
        <p>再不受理，我就去省里投诉你们了。</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import LdTab from "../components/ld-tab";
import LdBox from "../components/ld-box";
import LdPie from "../components/statistic/ld-pie";
import LdLine from "../components/statistic/ld-line";
import LdTool from "../components/ld-tool";
import { pieData, lineData } from "../mock/statistic";
import MiaList from "../components/warning/mia_list";

export default {
  components: {
    LdTab,
    LdBox,
    LdPie,
    LdLine,
    LdTool,
    MiaList
  },
  data() {
    return {
      dialogVisible: false,
      tabData: [
        { name: "来访列表", key: 1 },
        { name: "来访数据分析", key: 2 }
      ],
      tabIndex: 2,
      pieData: [],
      lineData: [],
      loading: false,
      dataItem: [
        {
          name: "序号",
          field: "i1"
        },
        {
          name: "编号",
          field: "i2"
        },
        {
          name: "姓名",
          field: "i3"
        },
        {
          name: "来访时间",
          field: "i4"
        },
        {
          name: "地址",
          field: "i5"
        },
        {
          name: "问题归属地",
          field: "i6"
        },
        {
          name: "办理方式",
          field: "i7"
        },
        {
          name: "办理单位",
          field: "i8"
        },
        {
          name: "状态",
          field: "i9",
          color: true
        },
        {
          name: "事项目的",
          field: "i10"
        },
        {
          name: "内容分类",
          field: "i11"
        },
        {
          name: "是否扬言",
          field: "i12"
        },
        {
          name: "操作",
          field: "i13",
          pointer: true
        }
      ],
      dataList: [
        //序号 姓名 来访时间 反应内容  联系方式  家庭住址 办理单位  事项目的
        {
          i1: 1,
          i2: "20200403",
          i3: "韩冰",
          i4: "2020-04-03",
          i5: "德清县下渚湖街道南路546号",
          i6: "浙江省湖州市德清县",
          i7: "直接回复",
          i8: "建设局",
          i9: "完结",
          i10: "申诉",
          i11: "信访接待",
          i12: "否",
          i13: "详情",
          color: "#FFFFFF"
        },
        {
          i1: 2,
          i2: "20200406",
          i3: "李阳",
          i4: "2020-04-06",
          i5: "德清县莫干山镇北路203号",
          i6: "浙江省湖州市德清县",
          i7: "直接回复",
          i8: "人社局",
          i9: "未完结",
          i10: "咨询",
          i11: "公共法律服务",
          i12: "否",
          i13: "详情",
          color: "#BC7330"
        }
      ],
      pagenation: {
        total: 101,
        currentPage: 1
      }
    };
  },
  methods: {
    changeTabHandle: function(index) {
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
    },
    //跳转到详情
    jumpToDetail() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.pieData = pieData;
    this.lineData = lineData;
  }
};
</script>
<style lang="less" scoped>
.box-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33.33%);
}
.box-grid1 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 50%);
}
.listBox {
  margin: 2vh auto;
  height: 68vh;
  overflow: scroll;
  .list {
    height: 100vh;
    background: pink;
  }
}
.myProjectPagination {
  text-align: right;
  margin-right: 3vw;
}
.ld-dialog_content {
  display: grid;
  grid-template-columns: 80px auto;
  margin-bottom: 25px;
  span {
    color: #8fa8e0;
  }
  p {
    overflow-y: scroll;
    -ms-overflow-style: none;
    -ms-overflow-style: none;
    height: 60px;
    border: 2px solid #425adc;
    padding: 8px 5px;
    border-radius: 5px;
    margin: 0;
  }
  p::-webkit-scrollbar {
    display: none;
  }
}
.miaList {
  overflow-y: auto;
  -ms-overflow-style: none;
}
.miaList::-webkit-scrollbar {
  display: none;
}
</style>
<style lang="less">
.ld-dialog {
  border-radius: 10px;
  .el-dialog__header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: linear-gradient(to right, #3a50c2, #14234a);
    .el-dialog__title {
      color: white;
    }
  }
  .el-dialog__body {
    background: #233d7c;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
  }
}
</style>
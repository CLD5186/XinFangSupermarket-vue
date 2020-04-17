<template>
  <div  class="myPage">
    <MiaSearch :searchItem="searchItem" :mode1="mode1List" :mode2="mode2List" @getList="getList"/>
    <div class="listBox" v-loading="loading">
      <MiaList :dataItem="dataItem" :dataList="dataList"/>
    </div>
    <div class="myProjectPagination">
      <el-pagination
        @current-change="getListData"
        layout="prev, pager, next"
        :pager-count="5"
        :page-size="10"
        :current-page.sync="pagenation.currentPage"
        :total="pagenation.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import MiaSearch from '../components/warning/mia_search'
import MiaList from '../components/warning/mia_list'
export default {
  data (){
    return {
      loading:false,
      mode1List:[
        {
          name:'未解决',
          value:1
        },
        {
          name:'已解决',
          value:2
        },
      ],
      mode2List:[
        {
          name:'今日',
          value:1
        },
        {
          name:'本周',
          value:2
        },
        {
          name:'本月',
          value:3
        },
      ],
      searchItem:{
        mode1:1,
        mode2:1,
        time:[],
      },//搜索内容
      /**
       * 表格数据
       */
      dataItem:[
        {
          name:'序号',
          field:'i1'
        },
        {
          name:'姓名',
          field:'i2'
        },
        {
          name:'来访时间',
          field:'i3'
        },
        {
          name:'反应内容',
          field:'i4'
        },
        {
          name:'联系方式',
          field:'i5'
        },
        {
          name:'家庭住址',
          field:'i6'
        },
        {
          name:'办理单位',
          field:'i7'
        },
        {
          name:'事项目的',
          field:'i8'
        },
      ],
      dataList:[//序号 姓名 来访时间 反应内容  联系方式  家庭住址 办理单位  事项目的
        {
          i1:1,
          i2:'林雪',
          i3:'2020-04-03',
          i4:'拖欠农民工工资',
          i5:'13857684567',
          i6:'德清县下渚湖街道南路546号',
          i7:'司法局',
          i8:'求决'
        },
        {
          i1:2,
          i2:'吕笑笑',
          i3:'2020-04-06',
          i4:'拆迁',
          i5:'15845768798',
          i6:'德清县莫干山镇203号',
          i7:'人社局',
          i8:'咨询'
        },
      ],
      pagenation:{
        total:101,
        currentPage:1,
      }
    };
  },
  components:{
    MiaSearch,
    MiaList
  },
  methods:{
    getList(msg){
      this.searchItem=msg;
      this.getListData();
    },
    //获取列表数据
    getListData(){
      // var params={...this.searchItem,page:this.pagenation.currentPage};
      // console.log('搜索2',params);
      if(this.loading) return;
      this.loading=true;
      setTimeout(()=>{
        this.loading=false;
      },1000)
    },
  },
  mounted(){},
}

</script>
<style lang="less" scoped src="@/assets/css/index.less"></style>
<style lang='less' scoped>
.myPage{
  padding:1vh 1vw 0;
  color:#fff;
  height: 88vh;
  .listBox{
    margin:2vh auto;
    height:68vh;
    overflow: scroll;
    // background: #fff;
    .list{
      height: 100vh;
      background: pink;
    }
  }
  .myProjectPagination{
    text-align: right;
    margin-right: 3vw;
  }
  
}
</style>
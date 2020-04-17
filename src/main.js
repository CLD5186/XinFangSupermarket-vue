import Vue from "vue";
import index from "./App.vue";
import { createRouter } from "./route/index";
import VCharts from "v-charts";
import "@/assets/css/modify.less";

const router = createRouter();

import "element-ui/lib/theme-chalk/index.css";
import {
  Button,
  Message,
  DatePicker,
  Pagination,
  Loading,
  Table,
  TableColumn,
  Dialog,
} from "element-ui";
Vue.prototype.$message = Message;
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  render: (h) => h(index),
}).$mount("#app");

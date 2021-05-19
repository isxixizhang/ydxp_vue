import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import common from '@/common/common'
import define from '@/common/js/define'
import { get,post} from '@/request/http'
import Util from '@/request/util'
import message from '@/components/message'
import loading from '@/components/loading/index.js'
import bottom from '@/components/loadingBottom/index.js'
import scroll from '@/components/scroll'
import { Button } from 'vant';
import './common/stylus/index.styl'
Vue.config.productionTip = false;
//vue全局变量
Vue.prototype.common = common;
Vue.prototype.define = define;
Vue.prototype.post = post;
Vue.prototype.get = get;
Vue.prototype.util = Util;

let moduleList = [Button, message, scroll, loading, bottom]
moduleList.forEach(v => {
  Vue.use(v)
})



//调试插件
import Vconsole from 'vconsole/dist/vconsole.min'
if(process.env.NODE_ENV !== 'production'){
  new Vconsole()
}



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

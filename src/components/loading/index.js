import myLoading from '@/components/loading/loading'
const  loading ={
  install:function (Vue) {
    Vue.component('loading',myLoading)
  }
}
export default loading;

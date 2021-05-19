import myScroll from '@/components/scroll/scroll'

const  scroll ={
  install:function (Vue) {
    Vue.component('scroll',myScroll)
  }
}
export default scroll

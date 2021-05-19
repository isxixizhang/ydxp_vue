import myMessage from '@/components/message/message'

const  message ={
  install:function (Vue) {
    Vue.component('message',myMessage)
  }
}
export default message

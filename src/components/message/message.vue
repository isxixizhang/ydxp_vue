<template>
  <div class="message" v-show="showMessage">
    <div class="message-box">
      <h4>{{title}}</h4>
      <p>{{msg}}</p>
      <div v-if="showCancel" class="bottom" @click="confirm">确定</div>
      <div v-if="!showCancel" class="bottom clearfix" ><span @click="cancel">取消</span><span @click="confirm">确定</span></div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        title:{
          type:String,
          default:''
        },
        msg:{
          type:String,
          default:''
        },
        showMessage:{
          type:Boolean,
          default:false
        },
        showCancel:{
          type:Boolean,
          default:false
        }
      },
      methods:{
        confirm(){
          this.$emit('confirm')
        },
        cancel(){
          this.$emit('cancel')
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"
  .message
    position fixed
    top 0
    left  0
    height 100%
    width 100%
    z-index 1000
    background:rgba(0,0,0,0.6)
    display flex
    justify-content center
    align-items center
    .message-box
      border-radius 0.24rem
      width 5.4rem
      background $color-background-l
      overflow hidden
      h4
        line-height 1.14rem
        text-align center
        color $color-text-ll
        font-size $font-size-large
      p
        font-size $font-size-small
        color $color-text-d
        padding 0 0.4rem
        padding-bottom 0.88rem
      .bottom
        height 0.86rem
        border 1px solid $color-background
        line-height 0.86rem
        color $color-theme
        font-size $font-size-large
        span
          display block
          float left
          color $color-text-l
          width 49%
          &:last-child
            color $color-theme
            border-left 1px solid $color-background
</style>

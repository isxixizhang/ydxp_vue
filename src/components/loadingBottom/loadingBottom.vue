<template>
  <div>


  <div class="bottom" v-show="listData.length">
    <div class="loading clearfix" v-show="hasData">
      <span class="msg">正在加载</span>
      <i class="icon"></i>
    </div>
    <div class="no-data clearfix" v-show="!hasData">
     <h4>已经到底了...</h4>
    </div>
  </div>
    <pageTips
      :tipsPic="'order'"
      :msg="'暂无你要找的内容'"
      :showTips="!listData.length"/>
  </div>
</template>

<script>

  export default {
    props: {
      hasData: {
        type: Boolean,
        default: true
      },
      listData: {
        type: Array,
        default: []
      }
    }
  }

</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable.styl"
  @keyframes rotating{
    0% {transform:rotate(0deg)}
    100% {transform:rotate(360deg)}
  }
.bottom
  height 1rem
  .no-data
    h4
      text-align center
      font-size .28rem
      color #999
      padding 0 .3rem
  .loading
    width: 1.5rem
    margin 0 auto
    .msg
      line-height 0.6rem
      height 0.6rem
      font-size $font-size-small
      text-align center
      color $color-text-l
      float left
      display block
      padding-right 0.2rem
    .icon
      margin-top 0.14rem
      width 0.24rem
      height 0.24rem
      display block
      border 1px solid $color-text-ll
      float left
      border-radius 50%
      position relative
      animation rotating .8s linear infinite
      &::after
        content ''
        display block
        position absolute
        top -0.06rem
        left 0.06rem
        width 0.12rem
        height 0.12rem
        background $color-background
        border-radius 50%

</style>

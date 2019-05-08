<template>
  <nav>
    <div class="nav-icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.iconUrl" alt="navicon">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeNav',
  data () {
    return {
      iconList: [{
        id: "0001",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0002",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0003",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0004",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0005",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0006",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0007",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      },
      {
        id: "0008",
        iconUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  nav
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 50%
    // background: green
    .nav-icon
      position: relative
      overflow: hidden
      float: left 
      width: 25%
      height: 0
      padding-bottom: 25%
      // background: red
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 1.375rem
        box-sizing: border-box
        padding: .313rem
        // background: blue
        .icon-img-content
          display: block
          margin: 0 auto 
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 1.375rem
        line-height: 1.375rem
        text-align: center
        color: $darkTextColor
</style>

<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xeb99;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="span" to="/" class="iconfont header-fixed-back"
        >&#xeb99;</router-link
      >
      <data>景点详情</data>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 48) {
        // 注意：这里用let，而不是const
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。
  activated () {
    // 窗口监听事件，当窗口滚动scroll时，执行handlesCroll方法
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 页面即将被替换成新的页面的时候，该钩子生效
    // 解除全局组件绑定
    window.removeEventListener('scroll', this.handleScroll)
  },
  // 组件不使用keep-alive，activated 和  deactivated 就会失效，需要使用mounted和beforeDestroyed代替
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs
  position: absolute
  left: .5rem
  top: .5rem
  width: 2rem
  height: 2rem
  line-height: 2rem
  border-radius: 1rem
  text-align: center
  background: rgba(0, 0, 0, .8)
  .header-abs-back
    font-size: 1.5rem
    color: #ffffff
.header-fixed
  z-index: 2
  position: fixed
  left: 0
  right: 0
  top: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  background: $bgColor
  color: #ffffff
  .header-fixed-back
    display: block
    position: absolute
    left: .5rem
    top: .5rem
    width: 2rem
    height: 2rem
    line-height: 2rem
    border-radius: 1rem
    text-align: center
    font-size: 1.5rem
    color: #ffffff
</style>
